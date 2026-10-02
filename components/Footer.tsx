import { navItems, profile } from "@/data/profile";
import { GitHub, LinkedIn, Mail, WhatsApp } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";

const SOCIALS = [
  {
    label: "Email",
    href: `mailto:${profile.contact.email}`,
    Icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    href: profile.contact.linkedin,
    Icon: LinkedIn,
    external: true,
  },
  {
    label: "GitHub",
    href: profile.contact.github,
    Icon: GitHub,
    external: true,
  },
  {
    label: "WhatsApp",
    href: profile.contact.whatsapp,
    Icon: WhatsApp,
    external: true,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mx-auto w-full max-w-[78rem] px-6 pb-10 sm:px-8">
      {/* Oversized outlined wordmark. Stroke raised from 18% to 30% white —
          at display size the previous value was effectively invisible. */}
      <Reveal direction="none" amount={0.4}>
        <a
          href="#accueil"
          aria-label="Retour en haut de page"
          className="group block border-t border-hair pt-10"
        >
          <span className="text-stroke block font-display text-[clamp(2.5rem,12.5vw,11rem)] leading-[0.85] tracking-[-0.03em] transition-colors duration-500 select-none group-hover:text-stroke-bright">
            {profile.firstName} {profile.lastName}
          </span>
        </a>
      </Reveal>

      <div className="mt-10 grid gap-8 border-t border-hair pt-8 md:grid-cols-3 md:items-center">
        <p className="text-sm text-ash">
          © {year} {profile.name}
        </p>

        <nav aria-label="Navigation de pied de page" className="md:justify-self-center">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="link-wipe text-sm text-ash after:link-wipe-after transition-colors duration-300 hover:text-bone"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex items-center gap-5 md:justify-self-end">
          {SOCIALS.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                {...(social.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : null)}
                aria-label={social.label}
                className="block text-ash transition-colors duration-300 hover:text-bone"
              >
                <social.Icon className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Was text-ash-dim/70 on a colour that already failed contrast. */}
      <p className="mt-8 text-[0.6875rem] tracking-[0.16em] uppercase text-ash">
        Conçu &amp; développé à {profile.location}
      </p>
    </footer>
  );
}