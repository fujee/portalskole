import { Element } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useLang } from "../contexts/langContext";

import momcilo from "../media/examples/momcilo.webp";
import pekic from "../media/examples/pekic.webp";
import vranje from "../media/examples/vranje.webp";

interface Example {
  image: string;
  url: string;
  name: string;
  nameKey: string;
  place: string;
  placeKey: string;
  type: string;
  typeKey: string;
}

const examples: Example[] = [
  {
    image: momcilo,
    url: "https://osmomcilonastasijevic.edu.rs/rs",
    name: 'ОШ „Момчило Настасијевић“',
    nameKey: "ex_1_name",
    place: "Горњи Милановац",
    placeKey: "ex_1_place",
    type: "Основна школа",
    typeKey: "ex_1_type",
  },
  {
    image: pekic,
    url: "https://skola-pekic.edu.rs/rs",
    name: 'ОШ „Борислав Пекић“',
    nameKey: "ex_2_name",
    place: "Београд",
    placeKey: "ex_2_place",
    type: "Основна школа",
    typeKey: "ex_2_type",
  },
  {
    image: vranje,
    url: "https://ekonomskavranje.edu.rs/rs",
    name: "Економско-трговинска школа",
    nameKey: "ex_3_name",
    place: "Врање",
    placeKey: "ex_3_place",
    type: "Средња школа",
    typeKey: "ex_3_type",
  },
];

export default function ExamplesSection() {
  const { t } = useLang();

  return (
    <Element name="examples">
      <div className="py-24">
        <div className="container mx-auto px-5 lg:px-0">
          <p className="text-primary text-center font-semibold text-xl lg:text-2xl relative after:content-[''] after:absolute after:block after:h-[4px] after:w-[100px] after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:bg-primary after:rounded-xl">
            {t("Примери реализованих портала", "examples_uppertitle")}
          </p>
          <h2 className="mt-10 text-2xl lg:text-4xl font-bold text-black dark:text-white text-center">
            {t("Једна платформа, различити идентитети школа", "examples_title")}
          </h2>
          <p className="max-w-screen-lg mx-auto mt-5 text-center text-sm lg:text-lg text-black/90 dark:text-white/90">
            {t(
              "Сви портали засновани су на заједничкој платформи и истим стандардима, док свака школа задржава свој визуелни идентитет и самостално представља своје садржаје, активности и резултате.",
              "examples_desc",
            )}
          </p>
          <p className="max-w-screen-lg mx-auto mt-3 text-center text-sm lg:text-lg text-black/90 dark:text-white/90">
            {t("Погледајте неке од реализованих портала.", "examples_desc_2")}
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-20">
            {examples.map((example) => (
              <li key={example.url} className="flex">
                <a
                  href={example.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t(example.name, example.nameKey)}, ${t(example.place, example.placeKey)} – ${t("Погледајте портал", "examples_cta")}`}
                  className="group flex w-full flex-col overflow-hidden rounded-xl border-2 border-navBorder dark:border-navBorderDark bg-pureWhite dark:bg-pureBlack transition duration-300 ease-in-out hover:-translate-y-1 hover:border-primary hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-b-2 border-navBorder dark:border-navBorderDark">
                    <img
                      loading="lazy"
                      decoding="async"
                      width={1200}
                      height={751}
                      src={example.image}
                      alt={t(
                        `Почетна страна портала – ${example.name}`,
                        `${example.nameKey}_alt`,
                      )}
                      className="h-full w-full object-cover object-top transition duration-500 ease-in-out group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 rounded-md bg-primary px-3 py-1 text-xs lg:text-sm font-semibold text-pureWhite">
                      {t(example.type, example.typeKey)}
                    </span>
                  </div>

                  <div className="flex flex-grow flex-col p-5 lg:p-6">
                    <h3 className="text-lg lg:text-xl font-semibold text-secondary dark:text-white">
                      {t(example.name, example.nameKey)}
                    </h3>
                    <p className="mt-1 text-sm lg:text-base text-black/70 dark:text-white/70">
                      {t(example.place, example.placeKey)}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm lg:text-base font-semibold text-primary">
                      {t("Погледајте портал", "examples_cta")}
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="transition duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Element>
  );
}
