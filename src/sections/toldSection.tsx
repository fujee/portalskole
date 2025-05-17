import { Element } from "react-scroll"
import { useLang } from "../contexts/langContext"
import fonLogo from "../media/told/fon-white.svg"
import fonLogoDark from "../media/told/fon-dark.svg"
import mare from "../media/told/marko jovanovic.png"
import ministarstvo from "../media/told/ministarstvo.png"
import ana from "../media/told/ana.png"
import { useTheme } from "../contexts/themeContext"
import { DARK_THEME } from "../types/theme"

export default function ToldSection() {
    const { t } = useLang()
    const { theme } = useTheme()

    return (
        <Element name='results'>
            <div className="py-24">
                <div className="container mx-auto px-5 lg:px-0">
                    <p className="text-primary text-center font-semibold text-2xl relative after:content-[''] after:absolute after:block after:h-[4px] after:w-[100px] after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:bg-primary after:rounded-xl">{t('Рекли су о нама')}</p>
                    <h2 className="mt-10 text-4xl font-bold text-black dark:text-white text-center">{t('Задовољство клијената – основа нашег успеха')}</h2>
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 mt-20">
                        <div className="px-8 lg:px-24 border-black/30 border-b-2 pb-10 mb-10 lg:border-b-0 lg:border-r-2 lg:mb-0 lg:pb-0">
                            <img src={theme === DARK_THEME ? fonLogoDark : fonLogo} alt={t('Факултет организационих наука')} className="mb-10" />
                            <p className="text-black dark:text-white">“<em>Portal Master Solutions</em>{t(" је потпуно променио начин на који управљамо нашим школским порталом. Све је постало једноставније и сигурније, а подршка тима је изванредна.”")}</p>
                            <div className="flex justify-start items-center mt-10">
                                <div className="w-[64px] h-[64px] overflow-hidden rounded-full flex-none">
                                    <img src={mare} alt={t('Миодраг Јовановић')} className="w-full h-auto object-cover" />
                                </div>
                                <div className="ms-5">
                                    <p className="text-secondary dark:text-primary font-bold text-lg">{t('Миодраг Јовановић')}</p>
                                    <p className="text-black/80 dark:text-white/80 text-sm">{t('директор школе')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="px-8 lg:px-24">
                            <img src={ministarstvo} alt={t('Министарство просвете')} className="mb-10" />
                            <p className="text-black dark:text-white">{t("“Систем омогућава свеобухватну контролу и транспарентност. Аналитички подаци су сада лако доступни, што нам помаже у доношењу важних одлука.”")}</p>
                            <div className="flex justify-start items-center mt-10">
                                <div className="w-[64px] h-[64px] overflow-hidden rounded-full flex-none">
                                    <img src={ana} alt={t('Ана Поповић')} className="w-full h-auto object-cover" />
                                </div>
                                <div className="ms-5">
                                    <p className="text-secondary dark:text-primary font-bold text-lg">{t('Ана Поповић')}</p>
                                    <p className="text-black/80 dark:text-white/80 text-sm">{t('менаџер за развој образовног система')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>)
}