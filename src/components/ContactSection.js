"use client";

import { useState } from "react";
import { FaUser, FaRegPaperPlane } from "react-icons/fa";
import {
  HiOutlineEnvelope,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";
import { useI18n } from "@/i18n/I18nProvider";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function ContactSection() {
  const { t } = useI18n();
  const [sectionRef, , hasIntersected] = useIntersectionObserver();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [sending, setSending] = useState(false);
  const [result, setResult] = useState(null); // { ok:boolean, msg:string }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setResult(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Beklenmeyen hata");
      setResult({ ok: true, msg: "Mesajınız gönderildi." });
      setFormData({ name: "", email: "", content: "" });
    } catch (err) {
      setResult({ ok: false, msg: err.message || "Gönderim başarısız" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 md:py-24 overflow-hidden"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#692433]/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[28rem] h-[28rem] rounded-full bg-[#1f222a]/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] rounded-full border border-black/5" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Title and description */}
          <div
            className={`transition-all duration-1000 ${
              hasIntersected
                ? "animate-fade-in-left opacity-100"
                : "opacity-0 -translate-x-8"
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t.contact?.title || "Bize Ulaşın"}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t.contact?.subtitle ||
                "Sorularınız için bizimle iletişime geçin. Size en kısa sürede dönüş yapacağız."}
            </p>
            {/* Contact info cards: email + phone + address stacked */}
            <div
              className={`mt-8 grid grid-cols-1 gap-4 transition-all duration-1000 ${
                hasIntersected
                  ? "animate-fade-in-up opacity-100"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              <a
                href="mailto:operasyon@mymiroglulojistik.com.tr"
                className="rounded-xl border border-gray-200 bg-white/60 backdrop-blur px-5 py-4 hover:bg-white/80 transition-colors cursor-pointer"
              >
                <div className="text-xs uppercase tracking-wide text-gray-500">
                  {t.footer?.email || "Email"}
                </div>
                <div className="mt-1 font-semibold text-gray-900 text-sm break-all">
                  {t.footer?.emailValue || "operasyon@mymiroglulojistik.com.tr"}
                </div>
              </a>
              <a
                href="tel:+905324311953"
                className="rounded-xl border border-gray-200 bg-white/60 backdrop-blur px-5 py-4 hover:bg-white/80 transition-colors cursor-pointer"
              >
                <div className="text-xs uppercase tracking-wide text-gray-500">
                  {t.footer?.phone || "Phone"}
                </div>
                <div className="mt-1 font-semibold text-gray-900 text-sm">
                  {t.footer?.phoneValue || "+90 532 431 19 53"}
                </div>
              </a>
              <a
                href="https://maps.google.com/?q=38.439744931147644,27.278825346015374"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-gray-200 bg-white/60 backdrop-blur px-5 py-4 hover:bg-white/80 transition-colors cursor-pointer"
              >
                <div className="text-xs uppercase tracking-wide text-gray-500">
                  {t.footer?.address || "Address"}
                </div>
                <div className="mt-1 font-semibold text-gray-900 text-sm">
                  {t.footer?.addressValue ||
                    "Kemalpaşa Mah. 7414. Sok. Kemalpaşa 5. San. Sit. Pınarbaşı, Bornova, İzmir."}
                </div>
              </a>
            </div>
          </div>

          {/* Right side - Form */}
          <div
            className={`rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-6 md:p-8 shadow-xl transition-all duration-1000 ${
              hasIntersected
                ? "animate-fade-in-right opacity-100"
                : "opacity-0 translate-x-8"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t.contact?.nameLabel || "Ad Soyad"}
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
                      <FaUser className="h-5 w-5" />
                    </span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#692433] focus:border-transparent transition-colors bg-white"
                      placeholder={
                        t.contact?.namePlaceholder ||
                        "Adınızı ve soyadınızı girin"
                      }
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t.contact?.emailLabel || "E-posta"}
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
                      <HiOutlineEnvelope className="h-5 w-5" />
                    </span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#692433] focus:border-transparent transition-colors bg-white"
                      placeholder={
                        t.contact?.emailPlaceholder || "ornek@email.com"
                      }
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="content"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t.contact?.messageLabel || "Mesajınız"}
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-3 top-3 text-gray-400">
                    <HiOutlineChatBubbleLeftRight className="h-5 w-5" />
                  </span>
                  <textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#692433] focus:border-transparent transition-colors resize-y bg-white"
                    placeholder={
                      t.contact?.messagePlaceholder ||
                      "Mesajınızı buraya yazın..."
                    }
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 bg-[#692433] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#7a2d3e] transition-colors duration-200 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <FaRegPaperPlane className="h-4 w-4" />
                  {sending
                    ? t.contact?.sending || "Gönderiliyor..."
                    : t.contact?.submitButton || "Gönder"}
                </button>
              </div>
              {result ? (
                <p
                  className={`text-sm mt-3 text-center ${
                    result.ok ? "text-green-700" : "text-red-700"
                  }`}
                >
                  {result.msg}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
