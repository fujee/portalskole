import { cirilica, english, getLang, latinica, Pismo } from "./pismo";

const SITE_URL = "https://portalskole.rs";

interface SeoCopy {
    title: string;
    description: string;
    ogLocale: string;
}

const copy: Record<Pismo, SeoCopy> = {
    [cirilica]: {
        title: "Портал Школе — платформа за веб портал ваше школе",
        description:
            "Портал Школе је савремено софтверско решење које омогућава да без техничког предзнања направите, уредите и одржавате веб портал своје школе. Хостинг, домен, безбедност и надоградње су укључени.",
        ogLocale: "sr_RS",
    },
    [latinica]: {
        title: "Portal Škole — platforma za veb portal vaše škole",
        description:
            "Portal Škole je savremeno softversko rešenje koje omogućava da bez tehničkog predznanja napravite, uredite i održavate veb portal svoje škole. Hosting, domen, bezbednost i nadogradnje su uključeni.",
        ogLocale: "sr_RS",
    },
    [english]: {
        title: "School Portal — the platform behind your school's website",
        description:
            "School Portal is a state-of-the-art software solution for building, editing and maintaining your school's web portal without any technical skills. Hosting, domain, security and upgrades are included.",
        ogLocale: "en_US",
    },
};

function setMeta(selector: string, attribute: "name" | "property", key: string, value: string) {
    let tag = document.head.querySelector<HTMLMetaElement>(selector);

    if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, key);
        document.head.appendChild(tag);
    }

    tag.setAttribute("content", value);
}

/**
 * Држи <html lang> и мета описе усклађене са изабраним писмом/језиком,
 * тако да претраживачи и друштвене мреже приказују исправан текст.
 */
export function applySeoMeta(pismo: Pismo) {
    const { title, description, ogLocale } = copy[pismo] ?? copy[cirilica];

    document.documentElement.lang = getLang(pismo);
    document.title = title;

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:locale"]', "property", "og:locale", ogLocale);
    setMeta('meta[property="og:url"]', "property", "og:url", `${SITE_URL}/`);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
}
