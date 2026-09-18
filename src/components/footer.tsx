import { useLang } from "../contexts/langContext";
import logo from "../media/logo.svg";
import routes from "../utilities/routes";
import { Link } from "react-scroll";

// import facebook from "../media/contact/facebook.svg";
// import instagram from "../media/contact/instagram.svg";
// import linkedin from "../media/contact/linkedin.svg";

import fonLogo from "../media/fon.png";
import fonLogoLat from "../media/fon_lat.png";
import fonLogoEng from "../media/fon_eng.png";

export default function Footer() {
  const { t, lang } = useLang();

  return (
    <div className="bg-black dark:bg-pureBlack py-20 pb-10">
      <div className="container mx-auto">
        <div className="border-t-2 border-white/10 pt-20 mt-20">
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 items-center">
            <div className="mb-10 lg:mb-0">
              <img loading="lazy" decoding="async"
                src={logo}
                alt={t("Портал Школе", "brand_name")}
                className="mx-auto lg:mx-0 max-w-[300px]"
              />
              <p className="text-white/80 mt-7 text-center lg:text-start">
                {t(
                  "Портал на клик од вас – лако, безбедно и ефикасно.",
                  "footer_phrase",
                )}
              </p>
            </div>
            <div className="text-center mb-10 lg:mb-0">
              {routes
                .filter((x) => x.path !== "home")
                .map((item) => (
                  <Link
                    to={item.path}
                    smooth={true}
                    spy={true}
                    key={item.name}
                    duration={500}
                    className={`text-white text-center hover:text-primary duration-100 ease-in-out cursor-pointer block my-2`}
                  >
                    {t(item.name, item.langKey)}
                  </Link>
                ))}
            </div>
            <div className="lg:ms-auto">
              {/* <div className="flex justify-center lg:justify-start gap-5">
                {/* <a href="https://fon.bg.ac.rs" target="_blank" rel="noreferrer"><img loading="lazy" decoding="async" src={facebook} alt="facebook icon" /></a> *
                <a href="https://fon.bg.ac.rs" target="_blank" rel="noreferrer">
                  <img loading="lazy" decoding="async" src={linkedin} alt="linkedin icon" />
                </a>
                {/* <a href="https://fon.bg.ac.rs" target="_blank" rel="noreferrer"><img loading="lazy" decoding="async" src={instagram} alt="instagram icon" /></a> 
              </div> */}
              <div className="mt-10 text-center lg:text-start">
                {/* <p className="text-white">{t("Телефон")}</p>
                            <p className="text-white/80 mb-2"><a href="tel:+381645845484" className="text-white/80 hover:text-primary">+381645845484</a></p> */}
                <p className="text-white mt-2">
                  {t("Електронска пошта", "footer_email")}
                </p>
                <p className="text-white/80">
                  <a
                    href="mailto:podrska@portalskole.fon.bg.ac.rs"
                    className="text-white/80 hover:text-primary"
                  >
                    podrska@portalskole.fon.bg.ac.rs
                  </a>
                </p>
              </div>
              <div className="w-full mt-10">
                <p className="text-white/60 text-center lg:text-start mb-2">
                  {t("Подржано од стране", "footer_supported")}
                </p>
                <a href="https://fon.bg.ac.rs" rel="noreferrer" target="_blank">
                  <img loading="lazy" decoding="async"
                    src={
                      lang === "cir"
                        ? fonLogo
                        : lang === "lat"
                          ? fonLogoLat
                          : fonLogoEng
                    }
                    className="w-[70%] sm:w-[50%] mx-auto lg:w-full h-auto object-contain lg:max-w-[250px]"
                    alt="Факултет организационих наука"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-20 text-center">
            <p className="text-white">
              &copy; Copyright 2024,{" "}
              {t("Сва права задржана", "footer_rights")}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
