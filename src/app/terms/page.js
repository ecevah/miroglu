"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfUsePage() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <section className="mx-auto max-w-3xl px-4 sm:px-6 pb-16">
          <h1 className="anton-regular text-3xl md:text-5xl tracking-tight text-black mb-6">
            Terms of Use
          </h1>
          <p className="text-black/70 mb-4">
            These Terms of Use govern your access to and use of our website and
            services. By accessing or using the website, you agree to these
            terms.
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-2">Use of the Site</h2>
          <p className="text-black/70">
            You agree to use the site in compliance with applicable laws and not
            to misuse the services. We may modify or discontinue features at any
            time.
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-2">
            Limitation of Liability
          </h2>
          <p className="text-black/70">
            To the fullest extent permitted by law, we will not be liable for
            any indirect, incidental, or consequential damages arising from your
            use of the site.
          </p>
          <p className="text-black/50 text-sm mt-8">
            Last updated: {new Date().getFullYear()}
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
