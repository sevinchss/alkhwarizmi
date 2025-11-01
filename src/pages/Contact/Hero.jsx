import React, { useEffect, useRef } from "react";

/**
 * ContactPage
 * - Fast reactive formula particles tied to cursor movement speed
 * - Immediate fade-out when cursor stops (no lag)
 * - Proper cleanup, DPR handling, and performance limits
 */
export const ContactPages = () => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const particlesRef = useRef([]);
  const lastSpawnRef = useRef(0);
  const lastMoveTimeRef = useRef(0);
  const lastPosRef = useRef({ x: 0, y: 0 });
  const isMountedRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;

    // ===== DPR-aware resize =====
    function resize() {
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      width = Math.floor(window.innerWidth);
      height = Math.floor(window.innerHeight);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      // scale drawing operations so we draw in CSS pixels
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();

    // ===== Background grid draw =====
    function drawGrid(t) {
      ctx.fillStyle = "#030814";
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      ctx.strokeStyle = "rgba(30,70,130,0.20)";
      ctx.lineWidth = 0.5;
      const spacing = 60;
      const offset = Math.sin(t * 0.0012) * 10;
      for (let x = offset; x < width; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = offset; y < height; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.restore();

      const g = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.7
      );
      g.addColorStop(0, "rgba(40,80,160,0.10)");
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);
    }

    // ===== Particle class =====
    const formulas = [
      "+",
      "-",
      "/",
      "*",
      "x",
      "y",
      "//",
      "λ",
      "Ω",
      "θ",
    ];

    class FormulaParticle {
      constructor(x, y, intensity = 1) {
        // slight explosion offset
        this.x = x + (Math.random() - 0.5) * 18;
        this.y = y + (Math.random() - 0.5) * 18;
        this.text = formulas[Math.floor(Math.random() * formulas.length)];
        this.alpha = 0;
        this.size = 20 + Math.random() * 18 * Math.min(1.6, 0.8 + intensity);
        this.life = 0;
        this.maxLife = 80 + Math.random() * 60;
        this.rotation = (Math.random() - 0.5) * 0.6;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        // velocity influenced by intensity (cursor speed)
        const base = 0.2 + Math.random() * 0.35;
        this.vx = (Math.random() - 0.5) * base * (1 + intensity);
        this.vy = (Math.random() - 0.5) * base * (1 + intensity);
        this.targetAlpha = 0.8 + Math.random() * 0.15;
      }
      update(isCursorMoving) {
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotationSpeed;
        this.life++;

        // FAST appear while cursor is moving; FAST vanish when stopped
        if (isCursorMoving) {
          // exponential-style ease-in for immediate presence
          this.alpha += (this.targetAlpha - this.alpha) * 0.35;
        } else {
          // quick fade-out (no lag): reduce alpha sharply
          this.alpha -= 0.28; // large step to remove lag
        }

        // clamp
        if (this.alpha > this.targetAlpha) this.alpha = this.targetAlpha;
        if (this.alpha < 0) this.alpha = 0;
      }
      draw(ctx) {
        if (this.alpha <= 0) return;
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.font = `${this.size}px "JetBrains Mono", monospace`;
        ctx.fillStyle = "rgba(175,200,255,0.98)";
        ctx.shadowColor = "rgba(120,170,255,0.44)";
        ctx.shadowBlur = 12;
        ctx.fillText(this.text, -ctx.measureText(this.text).width / 2, 0);
        ctx.restore();
      }
    }

    // ===== Animation loop =====
    let lastTime = performance.now();
    let t = 0;
    function animate(now) {
      if (!isMountedRef.current) return;
      const dt = Math.max(1, now - lastTime);
      lastTime = now;
      t += dt * 0.06; // smooth time increment

      drawGrid(t);

      // Determine whether cursor is "moving" recently (threshold 90ms)
      const timeSinceMove = Date.now() - (lastMoveTimeRef.current || 0);
      const isCursorMoving = timeSinceMove < 90; // <-- tight threshold for instant fade

      // update & draw particles
      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update(isCursorMoving);
        p.draw(ctx);
        // remove when invisible or over life
        if (p.alpha <= 0 || p.life > p.maxLife) {
          particles.splice(i, 1);
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    }
    rafRef.current = requestAnimationFrame(animate);

    // ===== Spawn logic based on instantaneous cursor speed =====
    function spawnAt(x, y, intensity = 1, count = 1) {
      const cap = 140;
      for (let i = 0; i < count; i++) {
        if (particlesRef.current.length >= cap) break;
        particlesRef.current.push(new FormulaParticle(x, y, intensity));
      }
    }

    // ===== Mouse / Pointer handlers (named for easy removal) =====
    let pointerTimeout = null;
    function onPointerMove(e) {
      const x = e.clientX;
      const y = e.clientY;
      const now = performance.now();
      lastMoveTimeRef.current = Date.now();

      // measure instantaneous pixel distance from last pos (no heavy math)
      const last = lastPosRef.current;
      const dx = x - (last.x ?? x);
      const dy = y - (last.y ?? y);
      const dist = Math.sqrt(dx * dx + dy * dy); // pixels per frame
      // intensity derived from dist — tuned for responsiveness
      const intensity = Math.min(4, dist * 0.06); // 0..4
      // spawn count grows with intensity
      const spawnCount = 1 + Math.floor(intensity * 1.6);

      // rate limit using lastSpawnRef (ms)
      const nowMs = Date.now();
      const elapsed = nowMs - (lastSpawnRef.current || 0);
      const minInterval = Math.max(12, 50 - Math.floor(intensity * 30)); // faster -> smaller interval
      if (elapsed >= minInterval) {
        spawnAt(x, y, intensity, spawnCount);
        lastSpawnRef.current = nowMs;
      }

      // update last pos
      lastPosRef.current.x = x;
      lastPosRef.current.y = y;

      // ensure quick fade-out if stop: schedule short timeout to mark stop (but animate uses lastMoveTime)
      if (pointerTimeout) clearTimeout(pointerTimeout);
      pointerTimeout = setTimeout(() => {
        // do nothing here — animate() checks lastMoveTimeRef to detect stop
      }, 100); // small buffer
    }

    function onPointerDown(e) {
      // optional: stronger pulse on click (spawn more quickly)
      const x = e.clientX;
      const y = e.clientY;
      spawnAt(x, y, 2.2, 8);
    }

    function onResizeHandler() {
      resize();
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("resize", onResizeHandler, { passive: true });

    // ===== Cleanup on unmount =====
    return () => {
      isMountedRef.current = false;
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("resize", onResizeHandler);
      if (pointerTimeout) clearTimeout(pointerTimeout);
      // clear arrays
      particlesRef.current.length = 0;
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden text-white font-poppins bg-[#030814]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-6 select-none px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-400 tracking-tight drop-shadow-lg">
          Muhammad Al-Xorazmiy maktabi
        </h1>
        <p className="text-base md:text-lg text-gray-300 max-w-2xl">
          Ilm, ixtiro va tafakkur har bir harakatda.
        </p>
        <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-200">
          Boshlash
        </button>
      </div>
    </section>
  );
};
