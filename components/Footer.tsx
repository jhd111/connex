import { Mail, MessageCircle, Facebook, Linkedin } from "lucide-react";

const SOCIALS = [
  { icon: Mail, label: "Email", href: "mailto:hello@abtechnologies.co.uk" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[#2a3d61]">
      <div className="container-page flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-[13px] text-haze-400">
          &copy; 2026 AB Technologies
        </p>
        <div className="flex items-center gap-3">
          {SOCIALS.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-haze-300 transition-colors hover:border-cyan-500/40 hover:text-cyan-400"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
