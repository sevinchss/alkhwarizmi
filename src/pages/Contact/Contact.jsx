import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { useState } from "react";
import { Clock, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error when typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Ism kiritilishi shart";
    if (!formData.phone.trim()) newErrors.phone = "Telefon raqam kerak";
    if (!formData.email.trim())
      newErrors.email = "Email manzilingizni kiriting";
    if (!formData.message.trim()) newErrors.message = "Xabarni yozing";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const mailtoLink = `mailto:info@al-khwarizmischool.uz?subject=Yangi xabar&body=Ism: ${formData.name}%0ATelefon: ${formData.phone}%0AEmail: ${formData.email}%0AXabar: ${formData.message}`;
      window.location.href = mailtoLink;
    }
  };

  return (
    <div className="relative font-poppins min-h-screen bg-white text-gray-800 py-24 px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#004AAD]/10 to-[#0077FF]/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#004AAD]/10 to-[#0077FF]/20 rounded-full blur-3xl -z-10" />

      {/* Header */}
      <div className="text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold text-[#004AAD] tracking-tight"
        >
          Biz bilan bog‘laning
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-gray-600 max-w-2xl mx-auto mt-5 text-lg leading-relaxed"
        >
          Sizning fikringiz biz uchun juda muhim! Quyidagi formani to‘ldiring
          yoki kontakt ma’lumotlarimizdan foydalaning.
        </motion.p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
        {/* Left: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="bg-white border border-gray-100 rounded-3xl p-10 shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,74,173,0.15)] transition-all duration-500"
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-[#004AAD]">
            <FaPaperPlane /> Xabar qoldiring
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Ismingiz"
                  className={`w-full border rounded-xl px-4 py-3 transition-all outline-none ${
                    errors.name
                      ? "border-red-500 ring-2 ring-red-300/40"
                      : "border-gray-200 focus:border-[#004AAD] focus:ring-2 focus:ring-[#004AAD]/30"
                  }`}
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1 pl-1"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </div>

              <div className="relative">
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="+998 99 999 99 99"
                  className={`w-full border rounded-xl px-4 py-3 transition-all outline-none ${
                    errors.phone
                      ? "border-red-500 ring-2 ring-red-300/40"
                      : "border-gray-200 focus:border-[#004AAD] focus:ring-2 focus:ring-[#004AAD]/30"
                  }`}
                />
                {errors.phone && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1 pl-1"
                  >
                    {errors.phone}
                  </motion.p>
                )}
              </div>
            </div>

            <div className="relative">
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email"
                className={`w-full border rounded-xl px-4 py-3 transition-all outline-none ${
                  errors.email
                    ? "border-red-500 ring-2 ring-red-300/40"
                    : "border-gray-200 focus:border-[#004AAD] focus:ring-2 focus:ring-[#004AAD]/30"
                }`}
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm mt-1 pl-1"
                >
                  {errors.email}
                </motion.p>
              )}
            </div>

            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Xabaringizni yozing..."
                className={`w-full border rounded-xl px-4 py-3 transition-all outline-none resize-none ${
                  errors.message
                    ? "border-red-500 ring-2 ring-red-300/40"
                    : "border-gray-200 focus:border-[#004AAD] focus:ring-2 focus:ring-[#004AAD]/30"
                }`}
              />
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm mt-1 pl-1"
                >
                  {errors.message}
                </motion.p>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-gradient-to-r from-[#004AAD] to-[#0077FF] text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-[0_8px_25px_rgba(0,74,173,0.4)] hover:shadow-[0_12px_35px_rgba(0,74,173,0.5)]"
            >
              Xabarni yuborish
            </motion.button>
          </form>
        </motion.div>

        {/* Right: Contact Cards */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex flex-col gap-8"
        >
          {[
            {
              icon: <FaPhoneAlt />,
              title: "Telefon",
              text: "1206",
              link: "tel:1206",
            },
            {
              icon: <FaEnvelope />,
              title: "Email",
              text: "info@al-khwarizmischool.uz",
              link: "mailto:info@al-khwarizmischool.uz",
            },
            {
              icon: <FaMapMarkerAlt />,
              title: "Manzil",
              text: "Toshkent, Mahtumquli ko'chasi, 1A",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{
                y: -5,
                boxShadow: "0px 12px 25px rgba(0,74,173,0.15)",
              }}
              className="group bg-white border border-gray-100 p-8 rounded-2xl shadow-md transition-all duration-300 hover:border-[#004AAD]/60 hover:scale-[1.01]"
            >
              <div className="flex items-center gap-5 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#004AAD] to-[#0077FF] flex items-center justify-center text-2xl text-white shadow-[0_0_15px_rgba(0,74,173,0.3)] transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(0,74,173,0.4)]">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#004AAD]">
                  {item.title}
                </h3>
              </div>
              {item.link ? (
                <a
                  href={item.link}
                  className="text-gray-600 hover:text-[#004AAD] font-medium transition-colors break-all"
                >
                  {item.text}
                </a>
              ) : (
                <p className="text-gray-600">{item.text}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Map + Info Section */}
      <div className="max-w-7xl mx-auto mt-28 grid md:grid-cols-2 gap-14 items-center">
        {/* Left Info */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-[#004AAD] border-l-4 border-[#004AAD] pl-4">
            Qanday borish mumkin
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            • Metro orqali: Eng yaqin metro — Mashinasozlar bekati. Shu bekatdan
            chiqib, 190-avtobusga chiqing. Avtobus sizni to‘g‘ridan-to‘g‘ri
            “Fidoyilar mahallasi” bekatigacha olib boradi.
            <br />• Jamoat transporti: Shuningdek, shaharning turli nuqtalaridan
            qatnovchi avtobus va marshrutkalar ham maktab yonidan o‘tadi.
            <br />• Shaxsiy avtomobilda: Maktab manzili — Mahtumquli ko‘chasi,
            1A. Maktab yaqinida qisqa muddatli to‘xtash joyi mavjud.
            <br />• Taksi orqali: Yandex Go yoki Bolt ilovalari orqali “Muhammad
            al-Xorazmiy maktabi” manzilini kiritsangiz, haydovchi sizni
            to‘g‘ridan-to‘g‘ri eshik oldigacha olib keladi.
          </p>

          <div className="space-y-3 mt-8 text-gray-800">
            <div className="flex items-center gap-3">
              <Mail className="text-[#004AAD] w-6 h-6" />
              <span>info@al-khwarizmischool.uz</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-[#004AAD] w-6 h-6" />
              <span>Mahtumquli ko'chasi, 1A</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-[#004AAD] w-6 h-6" />
              <span>Dushanba - Juma: 8:00 - 15:30</span>
            </div>
          </div>
        </motion.div>

        {/* Right Map */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full h-[450px] rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,74,173,0.2)] hover:scale-[1.01] transition-transform duration-700"
        >
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.5!2d69.304847315679!3d41.304519079271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDEuMzA0NTE5LCA2OS4zMDcwMzY!5e0!3m2!1sen!2sus!4v1729168000"
            allowFullScreen
            loading="lazy"
            title="Maktab joylashuvi"
          />
        </motion.div>
      </div>
    </div>
  );
}
