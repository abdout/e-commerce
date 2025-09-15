import Image from "next/image";
import Link from "next/link";
import { Linkedin, Facebook, MessageCircle } from "lucide-react";
import { type Dictionary } from "@/components/internationalization/dictionaries";
import { type Locale } from "@/components/internationalization/config";

interface FooterProps {
  dictionary: Dictionary;
  lang: Locale;
}

export default function Footer({ dictionary, lang }: FooterProps) {
  const columns = [
    {
      title: dictionary.footer.featured.title,
      links: [
        dictionary.footer.featured.airForce1,
        dictionary.footer.featured.huarache,
        dictionary.footer.featured.airMax90,
        dictionary.footer.featured.airMax95,
      ],
    },
    {
      title: dictionary.footer.shoes.title,
      links: [
        dictionary.footer.shoes.allShoes,
        dictionary.footer.shoes.customShoes,
        dictionary.footer.shoes.jordanShoes,
        dictionary.footer.shoes.runningShoes,
      ],
    },
    {
      title: dictionary.footer.clothing.title,
      links: [
        dictionary.footer.clothing.allClothing,
        dictionary.footer.clothing.modestWear,
        dictionary.footer.clothing.hoodies,
        dictionary.footer.clothing.shirts,
      ],
    },
    {
      title: dictionary.footer.kids.title,
      links: [
        dictionary.footer.kids.infantToddler,
        dictionary.footer.kids.kidsShoes,
        dictionary.footer.kids.kidsJordan,
        dictionary.footer.kids.kidsBasketball,
      ],
    },
  ] as const;
  return (
    <footer className="bg-dark-900 text-light-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-12">
          <div className="flex items-start md:col-span-2">
            <Image src="/logo.svg" alt="Nike" width={48} height={48} />
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 md:col-span-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="mb-4 text-body-medium">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l}>
                      <Link
                        href={`/${lang}`}
                        className="text-caption text-light-400 hover:text-light-300"
                      >
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex gap-4 md:col-span-2 md:justify-end">
            {[
              { icon: Linkedin, alt: "LinkedIn", link: "https://www.linkedin.com/company/databayt-auto" },
              { icon: Facebook, alt: "Facebook", link: "https://www.facebook.com/profile.php?id=61579954895228" },
              { icon: MessageCircle, alt: "WhatsApp", link: "https://wa.me/00966557721603" },
            ].map((s) => (
              <Link
                key={s.alt}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.alt}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-light-100 text-dark-900 hover:bg-light-200"
              >
                <s.icon size={18} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-4 text-light-400 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-footnote">
            <Image src="/globe.svg" alt="" width={16} height={16} />
            <span>{dictionary.footer.location}</span>
            <span>{dictionary.footer.copyright}</span>
          </div>
          <ul className="flex items-center gap-6 text-footnote">
            {[
              dictionary.footer.legal.guides,
              dictionary.footer.legal.termsOfSale,
              dictionary.footer.legal.termsOfUse,
              dictionary.footer.legal.privacyPolicy,
            ].map((t) => (
              <li key={t}>
                <Link href={`/${lang}`}>{t}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
