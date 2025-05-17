import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLang } from '../contexts/langContext';
import bgImg from '../media/hero-img-min.png'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Element, Link } from 'react-scroll'


export default function HeroSection() {
    const { t, lang } = useLang()
    return (
        <Element name='home'>
            <div className="min-h-screen relative">
                <img src={bgImg} alt='Hero Img' className='absolute w-full h-full object-cover z-0'></img>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-5 lg:px-0 lg:max-w-screen-lg'>
                    <div className='block border-2 border-primary bg-white/10 z-10 py-2 px-4 rounded-md text-sm lg:text-lg mt-18 lg:mt-0 text-white w-fit mx-auto'>
                        {t("Једна платформа - Бескрајне могућности", "hero_first")}
                    </div>

                    <h1 className="text-3xl lg:text-7xl text-white text-center mt-8 font-bold uppercase">
                        {t('ПОРТАЛ ', "hero_title_1")}
                        <span className='text-primary relative'>{t('НА КЛИК', "hero_title_2")}
                        </span>
                        {t(' ОД ВАС', "hero_title_3")}
                    </h1>
                    <h2 className='text-lg lg:text-2xl text-white text-center uppercase mt-2'>{t('ЛАКО, БЕЗБЕДНО И ЕФИКАСНО', "hero_subtitle")}</h2>


                    <p className='text-white text-center mt-10'>{t("Портал школе је савремено софтверско решење које Вам омогућава да, без техничког предзнања, направите и једноставно управљате веб порталом своје школе.", "hero_description")}</p>
                    {lang === 'en' && <p className='text-white text-center'>{t("", "hero_description_other")}</p>}
                    <div className='flex justify-center items-center mt-20 gap-4'>
                        <a href='mailto:contact@portalmastersolutions.com' className='py-2 px-4 text-white bg-primary border-2 border-primary rounded-md hover:bg-primary/30 cursor-pointer ease-in-out duration-200'>{t("Започните сада", "hero_btn_1")}</a>
                        <Link to='about'
                            smooth={true}
                            spy={true}
                            duration={500}
                            className='py-2 px-4 text-white bg-transparent border-2 border-white rounded-md hover:bg-white/30 cursor-pointer ease-in-out duration-200'>{t("Сазнајте више", "hero_btn_2")} <FontAwesomeIcon icon={faArrowRight} className='ms-2' /></Link>
                            <Link to='about'
                            smooth={true}
                            spy={true}
                            duration={500}
                            className='py-2 px-4 text-white bg-primary border-2 border-primary rounded-md hover:bg-primary/30 cursor-pointer ease-in-out duration-200'>{t("Претражи школе", "hero_btn_2")}</Link>
                    </div>
                </div>
            </div>
        </Element>);
}