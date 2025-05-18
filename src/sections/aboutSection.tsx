import { useLang } from "../contexts/langContext"
import security from "../media/about/security.svg"
import securityDark from "../media/about/security-dark.svg"
import analitika from "../media/about/analitika.svg"
import analitikaDark from "../media/about/analitika-dark.svg"
import administracija from "../media/about/administracija.svg"
import administracijaDark from "../media/about/administracija-dark.svg"
import kvalitet from "../media/about/kvalitet.svg"
import kvalitetDark from "../media/about/kvalitet-dark.svg"
import primena from "../media/about/primena.svg"
import primenaDark from "../media/about/primena-dark.svg"
import iskustvo from "../media/about/iskustvo.svg"
import iskustvoDark from "../media/about/iskustvo-dark.svg"
import { useTheme } from "../contexts/themeContext"
import { DARK_THEME } from "../types/theme"
import { Element } from "react-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

export default function AboutSection() {
    const { t } = useLang()
    const { theme } = useTheme()

    return <Element name='about'>
        <div id="about" className="bg-transparent pt-24 pb-10">
            <div className="container mx-auto px-5 lg:px-0">
                <p className="text-primary font-semibold text-xl lg:text-2xl relative after:content-[''] after:absolute after:block after:h-[4px] after:w-[100px] after:-bottom-4 after:left-0 after:bg-primary after:rounded-xl">{t('Зашто Портал Школе?', "about_uppertitle")}</p>
                <h2 className="mt-10 text-2xl lg:text-4xl font-bold text-black dark:text-white">{t('Пречица до дигиталне препознатљивости Ваше школе', "about_title")}</h2>
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-20 mt-10">
                    <div className="group">
                        <div className="flex flex-col lg:flex-row justify-start lg:items-center">
                            <img src={theme === DARK_THEME ? primenaDark : primena} alt={t('Једноставно коришћење – без потребе за техничким предзнањем', "about_f1_title")} className="me-4 w-fit group-hover:animate-wiggle" />
                            <h3 className="text-lg lg:text-2xl font-semibold text-secondary dark:text-white">{t('Једноставно коришћење – без потребе за техничким предзнањем', "about_f1_title")}</h3>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-primary font-semibold"><FontAwesomeIcon icon={faCheck} className="me-2" />{t("Једноставно креирање и уређивање садржаја", "about_f1_subtitle_1")}</h5>
                            <p className="text-black/80 dark:text-white/80">{t('Корисници, кроз једноставан интерфејс, могу самостално и без техничког предзнања да додају странице, дефинишу меније и уграђују компоненте, попут вести, обавештења, календара, галерија и слично.', "about_f1_desc_1")}</p>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-primary font-semibold"><FontAwesomeIcon icon={faCheck} className="me-2" />{t("Аутоматска ажурирања", "about_f1_subtitle_2")}</h5>
                            <p className="text-black/80 dark:text-white/80">{t('Нове функционалности и унапређења постају одмах доступни путем аутоматских ажурирања, без потребе за било каквом интервенцијом или додатним техничким прилагођавањима.', "about_f1_desc_2")}</p>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-primary font-semibold"><FontAwesomeIcon icon={faCheck} className="me-2" />{t("Подршка и обука за особље школе", "about_f1_subtitle_2")}</h5>
                            <p className="text-black/80 dark:text-white/80">{t('Корисницима су на располагању кратка видео упутства и техничка подршка, како би без потешкоћа могли да искористе све функционалности система.', "about_f1_desc_2")}</p>
                        </div>
                    </div>
                    <div className="group">
                        <div className="flex flex-col lg:flex-row justify-start lg:items-center">
                            <img src={theme === DARK_THEME ? iskustvoDark : iskustvo} alt={t('Све на једном месту – без скривених трошкова', "about_f2_title")} className="me-4 w-fit group-hover:animate-wiggle" />
                            <h3 className="text-lg lg:text-2xl font-semibold text-secondary dark:text-white">{t('Све на једном месту – без скривених трошкова', "about_f2_title")}</h3>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-primary font-semibold"><FontAwesomeIcon icon={faCheck} className="me-2" />{t("Хостинг и домени као део решења", "about_f2_subtitle_1")}</h5>
                            <p className="text-black/80 dark:text-white/80">{t('Сви трошкови хостинга су обухваћени ценом, без додатних издатака за одржавање. Клијентима који не располажу сопственим интернет доменом, у оквиру цене је доступна и јединствена веб адреса унутар нашег система.', "about_f2_desc_1")}</p>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-primary font-semibold"><FontAwesomeIcon icon={faCheck} className="me-2" />{t("Укључено техничко одржавање", "about_f2_subtitle_2")}</h5>
                            <p className="text-black/80 dark:text-white/80">{t('Техничко одржавање платформе је у потпуности у нашој надлежности. Ажурирања, безбедносне исправке, праћење исправности рада и техничка подршка укључени су у основну цену.', "about_f2_desc_2")}</p>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-primary font-semibold"><FontAwesomeIcon icon={faCheck} className="me-2" />{t("Праћење активности корисника без додатних алата и накнада", "about_f2_subtitle_3")}</h5>
                            <p className="text-black/80 dark:text-white/80">{t('Интегрисани извештаји који пружају увид у понашање корисника – од најпосећенијих страница, преко учесталости приступа, до најчешће коришћених функционалности.', "about_f2_desc_3")}</p>
                        </div>
                    </div>
                    <div className="group">
                        <div className="flex flex-col lg:flex-row justify-start lg:items-center">
                            <img src={theme === DARK_THEME ? securityDark : security} alt={t('Јединствен изглед и висок квалитет – у складу са стандардима', "about_f3_title")} className="me-4 w-fit group-hover:animate-wiggle" />
                            <h3 className="text-lg lg:text-2xl font-semibold text-secondary dark:text-white">{t('Јединствен изглед и висок квалитет – у складу са стандардима', "about_f3_title")}</h3>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-primary font-semibold"><FontAwesomeIcon icon={faCheck} className="me-2" />{t("Професионални дизајн", "about_f3_subtitle_1")}</h5>
                            <p className="text-black/80 dark:text-white/80">{t('Креирање професионално дизајнираног портала, прилагођеног визуелном идентитету и специфичним потребама Ваше школе.', "about_f3_desc_1")}</p>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-primary font-semibold"><FontAwesomeIcon icon={faCheck} className="me-2" />{t("Усклађеност са стандардима приступачности", "about_f3_subtitle_2")}</h5>
                            <p className="text-black/80 dark:text-white/80">{t('Подршка за вишејезичност, алати за аутоматско прилагођавање садржаја и могућности попут подешавања боја и контраста за особе са осетљивим видом осигуравају да портал буде доступан свима.', "about_f3_desc_2")}</p>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-primary font-semibold"><FontAwesomeIcon icon={faCheck} className="me-2" />{t("Савремени дизајн прилагођен свим уређајима", "about_f3_subtitle_3")}</h5>
                            <p className="text-black/80 dark:text-white/80">{t('Прилагодљив изглед портала обезбеђује једнако квалитетно корисничко искуство на рачунару, таблету и мобилном телефону – без губитка визуелног идентитета.', "about_f3_desc_3")}</p>
                        </div>
                    </div>
                    <div className="group">
                        <div className="flex flex-col lg:flex-row justify-start lg:items-center">
                            <img src={theme === DARK_THEME ? administracijaDark : administracija} alt={t('Сигурност на првом месту', "about_f4_title")} className="me-4 w-fit group-hover:animate-wiggle" />
                            <h3 className="text-lg lg:text-2xl font-semibold text-secondary dark:text-white">{t('Сигурност на првом месту', "about_f4_title")}</h3>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-primary font-semibold"><FontAwesomeIcon icon={faCheck} className="me-2" />{t("Централизовано управљање корисничким налозима", "about_f4_subtitle_1")}</h5>
                            <p className="text-black/80 dark:text-white/80">{t('Сви налози, подаци и активности су под строгим надзором, чиме се обезбеђује висок ниво сигурности у раду.', "about_f4_desc_1")}</p>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-primary font-semibold"><FontAwesomeIcon icon={faCheck} className="me-2" />{t("Додатни механизми заштите", "about_f4_subtitle_2")}</h5>
                            <p className="text-black/80 dark:text-white/80">{t('Платформа подржава напредне механизме заштите, попут могућности укључивања додатног степена аутентификације, као и интеграције са еИД системом.', "about_f4_desc_2")}</p>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-primary font-semibold"><FontAwesomeIcon icon={faCheck} className="me-2" />{t("Континуирано унапређивање", "about_f4_subtitle_3")}</h5>
                            <p className="text-black/80 dark:text-white/80">{t('Корисници не морају да брину о ажурирању софтверских библиотека, усклађивању са стандардима или одржавању безбедности. Наш тим централизовано одржава све портале, обезбеђујући висок ниво сигурности и стабилности.', "about_f4_desc_3")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Element>
}