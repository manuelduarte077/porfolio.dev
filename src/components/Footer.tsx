import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { track } from "../lib/analytics";
import { buttonVariants, cn } from "./ui";

export default function Footer() {
  const { t } = useLanguage();
  const social = [
    {
      icon: Github,
      href: "https://github.com/manuelduarte077",
      label: "GitHub",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/manuelduarte077",
      label: "Twitter",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/manuelduarte077",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:hello@donmanuel.dev", label: "Email" },
  ];

  return (
    <footer
      id="contact"
      className="py-20 px-6 border-t border-border-main scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-4">
            {t("footer.title")}
          </h2>
          <p className="text-muted">
            © {new Date().getFullYear()} Don Manuel. {t("footer.rights")}
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-8">
          <div className="flex gap-6">
            {social.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  item.label === "Email"
                    ? track("contact-email-click", { source: "footer" })
                    : track("contact-social-click", {
                        platform: item.label,
                      })
                }
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "h-11! w-11! min-h-0! rounded-full! p-0! text-muted hover:text-accent",
                )}
                aria-label={item.label}
              >
                <item.icon size={22} className="shrink-0" aria-hidden />
              </a>
            ))}
          </div>
          <a
            href="mailto:hello@donmanuel.dev"
            onClick={() => track("contact-email-click", { source: "footer" })}
            className="text-lg font-medium underline underline-offset-8 decoration-accent/20 hover:decoration-accent transition-all"
          >
            hello@donmanuel.dev
          </a>
        </div>
      </div>
    </footer>
  );
}
