"use client";

import { useState, type FormEvent } from "react";
import { PhoneCall } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PROJECT_STAGES = ["Planning", "Design & specification", "Ready to install", "Live support / fault"];

const SERVICES_NEEDED = [
  "Data cabling / structured cabling",
  "WiFi surveys / WLAN design",
  "Cellular",
  "CCTV",
  "Starlink, satellite & DTT",
  "BMS & building control",
  "AV monitors, TVs & projectors",
  "AI-assisted delivery",
  "Not sure yet",
];

const PHONE_NUMBER = "+92 327 6517258";
const PHONE_TEL = "+92 327 6517258";
const EMAIL = "info@abtechnologies.co.uk";

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    siteLocation: "",
    projectStage: PROJECT_STAGES[0],
    serviceNeeded: SERVICES_NEEDED[0],
    summary: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const subject = `Survey enquiry — ${form.serviceNeeded}`;
    const body = [
      `Full name: ${form.fullName}`,
      `Company: ${form.company}`,
      `Work email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Site location: ${form.siteLocation}`,
      `Project stage: ${form.projectStage}`,
      `Service needed: ${form.serviceNeeded}`,
      "",
      "Requirement summary:",
      form.summary,
    ].join("\n");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  }

  return (
    <main className="relative page-gradient">
      <Header />

      <div className="container-page pt-10 pb-20 sm:pt-14 sm:pb-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/[0.06] px-4 py-1.5 text-xs font-medium text-cyan-400">
          Initial response target: within 1 business day
        </span>

        <h1 className="mt-5 max-w-3xl text-balance text-[1.85rem] font-semibold leading-[1.12] sm:text-4xl lg:text-[2.6rem]">
          Request a Data Cabling, Wi-Fi or Network Infrastructure Survey.
        </h1>

        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-cyan-400 sm:text-base">
          Tell us what you need for data cabling, Wi-Fi surveys, fibre, CCTV,
          AV, BMS or network infrastructure and our team will come back with
          practical next steps and likely survey scope.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 lg:grid-cols-2">
          {/* Contact details */}
          <div className="rounded-2xl border border-[#2a3d61] bg-white/[0.02] p-6 shadow-card sm:p-7">
            <h2 className="text-lg font-semibold text-white">Contact details</h2>

            <address className="mt-4 not-italic text-[14px] leading-relaxed text-haze-300">
              AB Technologies
              <br />
              Unit 12, Chiltern Enterprise Centre
              <br />
              Station Road, Theale
              <br />
              Berkshire RG7 4AA
            </address>

            <div className="mt-4 space-y-1 text-[14px] leading-relaxed">
              <p className="text-haze-300">
                Tel:{" "}
                <a href={`tel:${PHONE_TEL}`} className="text-white hover:text-cyan-400">
                  {PHONE_NUMBER} 
                </a>
              </p>
              <p className="text-haze-300">
                Email:{" "}
                <a href={`mailto:${EMAIL}`} className="text-cyan-400 hover:text-cyan-300">
                  {EMAIL}
                </a>
              </p>
            </div>

            <div className="mt-5 overflow-hidden rounded-xl border border-[#2a3d61]">
              <iframe
                title="AB Technologies location — Chiltern Enterprise Centre, Station Road, Theale, Berkshire RG7 4AA"
                src="https://www.google.com/maps?q=Chiltern+Enterprise+Centre,+Station+Road,+Theale,+Berkshire+RG7+4AA&output=embed"
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Enquiry form */}
          <div className="rounded-2xl border border-[#2a3d61] bg-white/[0.02] p-6 shadow-card sm:p-7">
            <h2 className="text-lg font-semibold text-white">Project enquiry form</h2>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Full name" required>
                  <input
                    type="text"
                    required
                    value={form.fullName}
                    onChange={(e) => update("fullName", e.target.value)}
                    className="field-input"
                  />
                </Field>
                <Field label="Company" required>
                  <input
                    type="text"
                    required
                    value={form.company}
                    onChange={(e) => update("company", e.target.value)}
                    className="field-input"
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Work email" required>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className="field-input"
                  />
                </Field>
                <Field label="Phone" required>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className="field-input"
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Site location" required>
                  <input
                    type="text"
                    required
                    value={form.siteLocation}
                    onChange={(e) => update("siteLocation", e.target.value)}
                    className="field-input"
                  />
                </Field>
                <Field label="Project stage" required>
                  <select
                    required
                    value={form.projectStage}
                    onChange={(e) => update("projectStage", e.target.value)}
                    className="field-input field-select"
                  >
                    {PROJECT_STAGES.map((stage) => (
                      <option key={stage} value={stage} className="field-option">
                        {stage}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Service needed" required>
                <select
                  required
                  value={form.serviceNeeded}
                  onChange={(e) => update("serviceNeeded", e.target.value)}
                  className="field-input field-select"
                >
                  {SERVICES_NEEDED.map((service) => (
                    <option key={service} value={service} className="field-option">
                      {service}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Requirement summary" required>
                <textarea
                  required
                  rows={5}
                  value={form.summary}
                  onChange={(e) => update("summary", e.target.value)}
                  className="field-input resize-y"
                />
              </Field>

              <div className="flex flex-col gap-3 pt-1 sm:flex-row">
                <button
                  type="submit"
                  className="inline-flex flex-1 items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-ink-900 transition-transform hover:-translate-y-0.5"
                >
                  Submit Enquiry
                </button>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <PhoneCall size={16} />
                  Call now
                </a>
              </div>

              {submitted && (
                <p className="text-[13px] text-cyan-400">
                  Your email client should now be open with your enquiry
                  pre-filled — send it across and we&rsquo;ll be in touch
                  within 1 business day.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-[13px] font-medium text-haze-300">
        {label} {required && <span className="text-cyan-400">*</span>}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}