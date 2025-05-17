import { useLang } from "../contexts/langContext"
import { Element } from "react-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { useTheme } from "../contexts/themeContext"
import { LIGHT_THEME } from "../types/theme"

import feature1 from "../media/functions/feature1.gif"
import feature2 from "../media/functions/feature2.gif"
import feature3 from "../media/functions/feature3.gif"
import feature4 from "../media/functions/feature4.gif"
import feature5 from "../media/functions/feature5.gif"
import feature6 from "../media/functions/feature6.gif"
import feature7 from "../media/functions/feature7.gif"
import pretragaImg from '../media/functions/pretraga.png'

import feature1Dark from "../media/functions/dark_feature1.gif"
import feature2Dark from "../media/functions/dark_feature2.gif"
import feature3Dark from "../media/functions/dark_feature3.gif"
import feature4Dark from "../media/functions/dark_feature4.gif"
import feature5Dark from "../media/functions/dark_feature5.gif"
import feature6Dark from "../media/functions/dark_feature6.gif"
import feature7Dark from "../media/functions/dark_feature7.gif"


export default function FunctionSection() {
    const { t } = useLang()
    const { theme } = useTheme()

    return <Element name='function'>
        <div className="py-24">
            <div className="container mx-auto px-5 lg:px-0">
                <p className="text-primary text-center font-semibold text-xl lg:text-2xl relative after:content-[''] after:absolute after:block after:h-[4px] after:w-[100px] after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:bg-primary after:rounded-xl">{t('Кључне функционалности', "func_uppertitle")}</p>
                <h2 className="mt-10 text-2xl lg:text-4xl font-bold text-black dark:text-white text-center">{t('Нека и Ваша школа добије професионално дигитално присуство – једноставно, ефикасно и без техничких препрека.', "func_title")}</h2>
                <p className="max-w-screen-lg mx-auto mt-5 text-center text-sm lg:text-lg text-black/90 dark:text-white/90">{t('Свака школа добија модеран, прегледан и функционалан сајт, без техничких препрека. Истакните своје вредности, пројекте и успехе, и изградите дигитално присуство које гради поверење и препознатљивост у заједници.', "func_desc")}</p>
                <div className="grid grid-cols-1 lg:grid-cols-8 lg:grid-rows-4 gap-6 mt-20">
                    <div className="lg:col-span-5 lg:row-span-1 border-2 rounded-xl lg:h-[440px] border-navBorder dark:border-navBorderDark bg-pureWhite bg-custom_bg1 dark:bg-pureBlack dark:bg-custom_bg1_dark p-5 lg:p-10 flex flex-col">
                        <div className="flex-grow-0">
                            <h5 className="text-xl lg:text-2xl text-black font-bold dark:text-white">{t("Једноставно управљање", "func_1_title")}</h5>
                            <p className="mt-3 text-md lg:text-lg text-black/80 dark:text-white/80">{t('Додавање, уређивање и управљање садржајем, са подршком за интеграцију са екстерним системима за аутентикацију.', "func_1_desc")}</p>
                        </div>
                        <div className="flex-grow relative overflow-hidden mt-4 flex">
                            <img src={theme === LIGHT_THEME ? feature1 : feature1Dark} alt={t("Интегрисан CRM систем", "func_1_title")} className="max-h-[230px] w-full h-full object-contain mt-auto" />
                        </div>
                    </div>

                    <div className="border-2 rounded-xl h-[440px] border-navBorder dark:border-navBorderDark p-5 lg:p-10 bg-pureWhite dark:bg-pureBlack lg:col-span-3 lg:row-span-1 flex flex-col">
                        <div className="flex-grow-0">
                            <h5 className="text-xl lg:text-2xl text-black font-bold dark:text-white">{t("Прилагодљиве теме и шаблони", "func_2_title")}</h5>
                            <p className="mt-3 text-md lg:text-lg text-black/80 dark:text-white/80">{t('Одабир тема и шаблона уз могућност прилагођавања боја, логотипа и изгледа сваког портала.', "func_2_desc")}</p>
                        </div>
                        <div className="flex-grow relative overflow-hidden mt-4 flex">
                            <img src={theme === LIGHT_THEME ? feature2 : feature2Dark} alt={t("Ефикасна дистрибуција материјала", "func_2_title")} className="max-h-[230px] w-full h-full object-contain mt-auto" />
                        </div>
                    </div>

                    <div className="border-2 rounded-xl h-[440px] border-navBorder dark:border-navBorderDark p-5 lg:p-10 lg:col-span-4 lg:row-span-1 bg-pureWhite bg-custom_bg2 dark:bg-pureBlack dark:bg-custom_bg2_dark flex flex-col">
                        <div className="flex-grow-0">
                            <h5 className="text-xl lg:text-2xl text-black font-bold dark:text-white">{t("Интуитивне компоненте", "func_3_title")}</h5>
                            <p className="mt-3 text-md lg:text-lg text-black/80 dark:text-white/80">{t('Креирање страница са новостима, галеријама слика, документима и многих других, без потребе за техничким знањем.', "func_3_desc")}</p>
                        </div>
                        <div className="flex-grow relative overflow-hidden mt-4 flex">
                            <img src={theme === LIGHT_THEME ? feature3 : feature3Dark} alt={t("Централизовано одржавање садржаја", "func_3_title")} className="max-h-[230px] w-full h-full object-contain mt-auto" />
                        </div>
                    </div>


                    <div className="border-2 rounded-xl h-[440px] border-navBorder dark:border-navBorderDark p-5 lg:p-10 lg:col-span-4 lg:row-span-1 bg-pureWhite bg-custom_bg3 dark:bg-pureBlack dark:bg-custom_bg3_dark bg-no-repeat flex flex-col">
                        <div className="flex-grow-0">
                            <h5 className="text-xl lg:text-2xl text-black font-bold dark:text-white">{t("Локализација", "func_4_title")}</h5>
                            <p className="mt-3 text-md lg:text-lg text-black/80 dark:text-white/80">{t('Интегрисана подршка за више језика и аутоматско превођење између ћирилице и латинице.', "func_4_desc")}</p>
                        </div>
                        <div className="flex-grow relative overflow-hidden mt-4 flex">
                            <img src={theme === LIGHT_THEME ? feature4 : feature4Dark} alt={t("Једноставно управљање", "func_4_title")} className="max-h-[230px] w-full h-full object-contain mt-auto" />
                        </div>
                    </div>


                    <div className="border-2 rounded-xl h-[440px] border-navBorder dark:border-navBorderDark p-5 lg:p-10 lg:col-span-3 lg:row-span-1 bg-pureWhite dark:bg-pureBlack bg-custom_bg6 dark:bg-custom_bg6_dark bg-no-repeat flex flex-col">
                        <div className="flex-grow-0">
                            <h5 className="text-xl lg:text-2xl text-black font-bold dark:text-white">{t("Аналитика", "func_5_title")}</h5>
                            <p className="mt-3 text-md lg:text-lg text-black/80 dark:text-white/80">{t('Увид у број посета, најпосећеније странице и навике корисника. Омогућава планирање садржаја на основу података.', "func_5_desc")}</p>
                        </div>
                        <div className="flex-grow relative overflow-hidden mt-4 flex">
                            <img src={theme === LIGHT_THEME ? feature5 : feature5Dark} alt={t("Прилагодљиве теме и шаблони", "func_5_title")} className="max-h-[230px] w-full h-full object-contain mt-auto" />
                        </div>
                    </div>

                    <div className="border-2 rounded-xl h-[440px] border-navBorder dark:border-navBorderDark p-5 lg:p-10 lg:col-span-5 lg:row-span-1 bg-pureWhite bg-custom_bg4 dark:bg-pureBlack dark:bg-custom_bg4_dark flex flex-col">
                        <div className="flex-grow-0">
                            <h5 className="text-xl lg:text-2xl text-black font-bold dark:text-white">{t("Напредна претрага", "func_6_title")}</h5>
                            <p className="mt-3 text-md lg:text-lg text-black/80 dark:text-white/80">{t('Претраживање садржаја портала са једног места, уз коришћење напредних филтера као што су категорије, кључне речи или временски опсези.', "func_6_desc")}</p>
                        </div>
                        <div className="flex-grow relative overflow-hidden mt-4 flex">
                            <img src={theme === LIGHT_THEME ? feature6 : feature6Dark} alt={t("Интуитивне компоненте", "func_6_title")} className="max-h-[230px] w-full h-full object-contain mt-auto" />
                        </div>
                    </div>

                    <div className="border-2 rounded-xl h-[440px] border-navBorder dark:border-navBorderDark p-5 lg:p-10 lg:col-span-4 lg:row-span-1 bg-custom_bg5 dark:bg-pureBlack dark:bg-custom_bg5_dark flex flex-col">
                        <div className="flex-grow-0">
                            <h5 className="text-xl lg:text-2xl text-black font-bold dark:text-white">{t("Ефикасна дистрибуција информација", "func_7_title")}</h5>
                            <p className="mt-3 text-md lg:text-lg text-black/80 dark:text-white/80">{t('Дистрибуција важних обавештења, различитих докумената и упутстава једним кликом, са могућношћу праћења ко је примио и прочитао садржај.', "func_7_desc")}</p>
                        </div>
                        <div className="flex-grow relative overflow-hidden mt-4 flex">
                            <img src={theme === LIGHT_THEME ? feature7 : feature7Dark} alt={t("Локализација", "func_7_title")} className="max-h-[230px] w-full h-full object-contain mt-auto" />
                        </div>
                    </div>

                    <div className="border-2 rounded-xl h-[440px] border-navBorder dark:border-navBorderDark p-5 lg:p-10 lg:col-span-4 lg:row-span-1 bg-pureWhite dark:bg-pureBlack">
                        <div>
                            <h5 className="text-xl lg:text-2xl text-black font-bold dark:text-white">{t("Историја измена и архиве", "func_8_title")}</h5>
                            <p className="mt-3 text-md lg:text-lg text-black/80 dark:text-white/80">{t('Аутоматско чување претходних верзија страница и могућност враћања на ранију верзију садржаја. Корисно за исправке, ревизије и чување важних информација.', "func_8_desc")}</p>
                        </div>
                        <div className="relative w-fit mx-auto mt-20">
                            <img src={pretragaImg} alt={t('pretraga')} className="animate-pulse" />
                            <div className="absolute border-2 px-4 py-1 rounded-md border-secondary bg-pureWhite -top-5 -left-5 shadow-lg text-secondary dark:bg-black dark:border-white dark:text-pureWhite">
                                <p>{t('Претражите...', "func_8_label_1")}<FontAwesomeIcon icon={faMagnifyingGlass} className="ms-2 text-black dark:text-pureWhite" /></p>
                            </div>
                            <div className="absolute z-10 bg-primary px-4 py-2 rounded-md text-pureWhite shadow-xl -top-12 left-20 lg:left-28 ">
                                <p className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-white pr-5 text-sm lg:text-base">{t('ОШ "Бранислав Нушић"', "func_8_label_2")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Element>
}