import Link from "next/link";
import { Utensils, MapPin, Mail } from "lucide-react";

const footerNav = [
  {
    heading: "Explore",
    links: [
      { label: "Restaurants", href: "/#featured-restaurants" },
      { label: "Adventures", href: "/#adventures" },
      { label: "Golf", href: "/#golf" },
      { label: "Where to Stay", href: "/#where-to-stay" },
    ],
  },
  {
    heading: "Areas",
    links: [
      { label: "Waikiki", href: "/#featured-restaurants" },
      { label: "North Shore", href: "/#featured-restaurants" },
      { label: "Kailua", href: "/#featured-restaurants" },
      { label: "Kaneohe", href: "/#featured-restaurants" },
    ],
  },
  {
    heading: "Site",
    links: [
      { label: "About", href: "/about" },
      { label: "Sitemap", href: "/sitemap.xml" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background mt-auto">
      <div className="container mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <Utensils className="h-5 w-5 text-accent" />
              <span className="text-lg font-bold">OahuUnlocked</span>
            </Link>
            <p className="text-sm text-background/60 leading-relaxed mb-4">
              Local guides to the best restaurants, adventures, and golf on Oahu, Hawaii.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-background/50">
              <MapPin className="h-3.5 w-3.5" />
              <span>Oahu, Hawaii</span>
            </div>
          </div>

          {/* Nav columns */}
          {footerNav.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-background/50 mb-4">
                {col.heading}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/70 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-background/40">
          <p>© {new Date().getFullYear()} OahuUnlocked. All rights reserved.</p>
          <p className="text-center">
            OahuUnlocked may earn a commission from affiliate links on this site at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
