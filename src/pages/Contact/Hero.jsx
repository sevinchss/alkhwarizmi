import React, { useEffect, useRef } from "react";

export const ContactPage = () => {
  const canvasRef = useRef(null);
  const lastSpawnRef = useRef(0);
  const cursorActiveRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // ⚙️ Draw static + animated grid background
    function drawGrid(t) {
      ctx.fillStyle = "#030814";
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      ctx.strokeStyle = "rgba(30, 70, 130, 0.3)";
      ctx.lineWidth = 0.5;

      const spacing = 60;
      const offset = Math.sin(t * 0.001) * 10; // sokin harakat
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

      // 💡 subtle glow center
      const g = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        width / 1.3
      );
      g.addColorStop(0, "rgba(40,80,160,0.12)");
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);
    }

    // 🧮 Formula trail particles
    const formulas = [
      "E = mc²",
      "∫ f(x) dx",
      "πr²",
      "Σ F = ma",
      "√x",
      "Δy/Δx",
      "φ = (1 + √5)/2",
      "λ",
      "Ω",
      "θ",
    ];
    const particles = [];
    const maxParticles = 60;

    class FormulaParticle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.text = formulas[Math.floor(Math.random() * formulas.length)];
        this.alpha = 0;
        this.fadeIn = true;
        this.size = 28 + Math.random() * 20;
        this.life = 0;
        this.maxLife = 130 + Math.random() * 40;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.01;
        this.vx = (Math.random() - 0.5) * 0.25;
        this.vy = (Math.random() - 0.5) * 0.25;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotationSpeed;
        this.life++;

        if (cursorActiveRef.current) {
          this.alpha += 0.04;
          if (this.alpha >= 0.9) this.fadeIn = false;
        } else {
          this.alpha -= 0.06;
        }
      }
      draw(ctx) {
        if (this.alpha <= 0) return;
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.font = `${this.size}px "JetBrains Mono", monospace`;
        ctx.fillStyle = "rgba(180,200,255,0.95)";
        ctx.shadowColor = "rgba(120,170,255,0.3)";
        ctx.shadowBlur = 10;
        ctx.fillText(this.text, -ctx.measureText(this.text).width / 2, 0);
        ctx.restore();
      }
    }

    // 🔁 Animate
    let t = 0;
    function animate() {
      t += 1.3;
      drawGrid(t);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw(ctx);
        if (p.alpha <= 0) particles.splice(i, 1);
      }

      requestAnimationFrame(animate);
    }
    animate();

    // 🖱️ Mouse logic
    let mouseTimeout;
    window.addEventListener("mousemove", (e) => {
      cursorActiveRef.current = true;
      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        cursorActiveRef.current = false;
      }, 600);

      const now = Date.now();
      if (now - lastSpawnRef.current > 100 && particles.length < maxParticles) {
        particles.push(new FormulaParticle(e.clientX, e.clientY));
        lastSpawnRef.current = now;
      }
    });

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden text-white font-poppins">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      ></canvas>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-6 select-none">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-400 tracking-tight drop-shadow-lg">
          Muhammad Al-Xorazmiy maktabi
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
          Ilm, ixtiro va tafakkur har bir harakatda.
        </p>
        <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-700/40 transition-all duration-300">
          Boshlash
        </button>
      </div>
    </section>
  );
};
