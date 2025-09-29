"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <section className="mx-auto max-w-3xl px-4 sm:px-6 pb-16">
          <h1 className="anton-regular text-3xl md:text-5xl tracking-tight text-black mb-6">
            Privacy Policy
          </h1>
          <p className="text-black/70 mb-4">
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you use our website and services. By
            accessing or using the website, you agree to this policy.
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-2">
            Information We Collect
          </h2>
          <p className="text-black/70">
            We may collect personal information that you voluntarily provide
            such as contact details, as well as technical and usage data
            collected automatically (cookies, device, and analytics data) to
            improve our services.
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-2">
            How We Use Information
          </h2>
          <p className="text-black/70">
            We use your information to provide and improve our services, respond
            to inquiries, ensure security, comply with legal obligations, and
            personalize content where permitted.
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-2">Your Rights</h2>
          <p className="text-black/70">
            Depending on your jurisdiction, you may have rights to access,
            correct, delete, or restrict processing of your personal data.
            Contact us to exercise these rights.
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
