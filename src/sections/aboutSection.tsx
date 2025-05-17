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
                            <img src={theme === DARK_THEME ? primenaDark : primena} alt={t('Једноставно управљање порталом – без потребе за техничким предзнањем', "about_f1_title")} className="me-4 w-fit group-hover:animate-wiggle" />
                            <h3 className="text-lg lg:text-2xl font-semibold text-secondary dark:text-white">{t('Једноставно управљање порталом – без потребе за техничким предзнањем', "about_f1_title")}</h3>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-primary font-semibold"><FontAwesomeIcon icon={faCheck} className="me-2" />{t("Једноставно креирање и уређивање садржаја", "about_f1_subtitle_1")}</h5>
                            <p className="text-black/80 dark:text-white/80">{t('Администратори могу додавати странице, дефинисати меније и уграђивати компоненте, попут вести, обавештења, календара или формулара, без потребе за техничким знањем.', "about_f1_desc_1")}</p>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-primary font-semibold"><FontAwesomeIcon icon={faCheck} className="me-2" />{t("Аутоматска ажурирања", "about_f1_subtitle_2")}</h5>
                            <p className="text-black/80 dark:text-white/80">{t('Сви портали се аутоматски ажурирају најновијим функционалностима, без потребе за додатним техничким прилагођавањима.', "about_f1_desc_2")}</p>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-primary font-semibold"><FontAwesomeIcon icon={faCheck} className="me-2" />{t("Подршка и обука за особље школе", "about_f1_subtitle_2")}</h5>
                            <p className="text-black/80 dark:text-white/80">{t('Нудимо техничку подршку и обуку како би сваки корисник могао максимално да искористи потенцијал платформе.', "about_f1_desc_2")}</p>
                        </div>
                    </div>
                    <div className="group">
                        <div className="flex flex-col lg:flex-row justify-start lg:items-center">
                            <img src={theme === DARK_THEME ? iskustvoDark : iskustvo} alt={t('Све на једном месту – без скривених трошкова', "about_f2_title")} className="me-4 w-fit group-hover:animate-wiggle" />
                            <h3 className="text-lg lg:text-2xl font-semibold text-secondary dark:text-white">{t('Све на једном месту – без скривених трошкова', "about_f2_title")}</h3>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-primary font-semibold"><FontAwesomeIcon icon={faCheck} className="me-2" />{t("Хостинг и домени као део решења", "about_f2_subtitle_1")}</h5>
                            <p className="text-black/80 dark:text-white/80">{t('Укључени су и трошкови хостинга за портал, чиме се елиминишу додатни оперативни издаци. Поред тога, клијентима који не желе да користе сопствене домене, нудимо могућност креирања поддомена за сваки појединачни портал.', "about_f2_desc_1")}</p>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-primary font-semibold"><FontAwesomeIcon icon={faCheck} className="me-2" />{t("Праћење активности и корисничке интеракције", "about_f2_subtitle_2")}</h5>
                            <p className="text-black/80 dark:text-white/80">{t('Детаљни извештаји пружају увид у коришћење портала, попут најпосећенијих страница, учесталости приступања порталу и функционалности које се највише користе.', "about_f2_desc_2")}</p>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-primary font-semibold"><FontAwesomeIcon icon={faCheck} className="me-2" />{t("Прецизни подаци за боље одлуке", "about_f2_subtitle_3")}</h5>
                            <p className="text-black/80 dark:text-white/80">{t('Интегрисани аналитички алати омогућавају доношење стратешких одлука заснованих на подацима.', "about_f2_desc_3")}</p>
                        </div>
                    </div>
                    <div className="group">
                        <div className="flex flex-col lg:flex-row justify-start lg:items-center">
                            <img src={theme === DARK_THEME ? securityDark : security} alt={t('Јединствен изглед и висок квалитет – у складу са стандардима', "about_f3_title")} className="me-4 w-fit group-hover:animate-wiggle" />
                            <h3 className="text-lg lg:text-2xl font-semibold text-secondary dark:text-white">{t('Јединствен изглед и висок квалитет – у складу са стандардима', "about_f3_title")}</h3>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-primary font-semibold"><FontAwesomeIcon icon={faCheck} className="me-2" />{t("Професионални дизајн", "about_f3_subtitle_1")}</h5>
                            <p className="text-black/80 dark:text-white/80">{t('Креирање професионално дизајнираних и визуелно уједначених портала, прилагођених специфичним захтевима Ваше школе.', "about_f3_desc_1")}</p>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-primary font-semibold"><FontAwesomeIcon icon={faCheck} className="me-2" />{t("Усклађеност са стандардима приступачности", "about_f3_subtitle_2")}</h5>
                            <p className="text-black/80 dark:text-white/80">{t('Подршка за вишејезичност, алати за аутоматско прилагођавање садржаја и опције за бољу читљивост (попут инверзних тема) осигуравају да портали буду доступни свима.', "about_f3_desc_2")}</p>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-primary font-semibold"><FontAwesomeIcon icon={faCheck} className="me-2" />{t("Савремени дизајн прилагођен свим уређајима", "about_f3_subtitle_3")}</h5>
                            <p className="text-black/80 dark:text-white/80">{t('Респонзиван изглед портала обезбеђује једнако квалитетно корисничко искуство на рачунару, таблету и мобилном телефону – без губитка визуелног идентитета.', "about_f3_desc_3")}</p>
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
                            <h5 className="text-primary font-semibold"><FontAwesomeIcon icon={faCheck} className="me-2" />{t("Интеграција са постојећим системима", "about_f4_subtitle_2")}</h5>
                            <p className="text-black/80 dark:text-white/80">{t('Платформа се може интегрисати са постојећим сервисима за аутентикацију, чиме се обезбеђује додатна заштита података и минимизирају ризици од неовлашћеног приступа.', "about_f4_desc_2")}</p>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-primary font-semibold"><FontAwesomeIcon icon={faCheck} className="me-2" />{t("Континуирано унапређивање", "about_f4_subtitle_3")}</h5>
                            <p className="text-black/80 dark:text-white/80">{t('Администратори не морају да брину о редовном ажурирању софтверских библиотека, усклађивању са најновијим стандардима или континуираном побољшању нивоа заштите. Наш тим стручњака централизовано одржава све портале, обезбеђујући највиши ниво сигурности и стабилности. Информације које вам помажу у доношењу одлука.', "about_f4_desc_3")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Element>
}