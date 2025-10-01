"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const items = [
  {
    title: "L2 Lojistik Yeterlilik",
    logo: "/certs/logo/l2.png",
    pdf: "/certs/YetkiBelgesi.pdf",
  },
  {
    title: "TİO Belgesi",
    logo: "/certs/logo/tio.png",
    pdf: "/certs/YetkiBelgesi-1.pdf",
  },
  {
    title: "UND Üyeliği",
    logo: "/certs/logo/und.png",
    pdf: null,
  },
  {
    title: "TOBB Üyeliği",
    logo: "/certs/logo/tobb.png",
    pdf: null,
  },
];

export default function CertificatesPage() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="py-10 md:py-14">
              <h1 className="anton-regular tracking-tight text-4xl md:text-6xl text-black">
                Belgeler ve Sertifikalar
              </h1>
              <p className="mt-3 text-black/70 max-w-2xl">
                Yetkinliğimizi ve yasal uygunluğumuzu gösteren belge ve
                üyelikler.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((it, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-center h-40">
                    <Image
                      src={it.logo}
                      alt={it.title}
                      width={240}
                      height={120}
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-black">
                    {it.title}
                  </h3>
                  {it.pdf ? (
                    <a
                      href={it.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center rounded-full bg-[#1f222a] text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-black/90 transition-colors"
                    >
                      PDF&apos;i Görüntüle
                    </a>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
