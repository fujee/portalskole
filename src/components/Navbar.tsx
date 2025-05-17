import { useEffect, useState } from "react";
import { useLang } from "../contexts/langContext";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import LangChanger from "./langChanger";
import logo from "../media/logo.png"
import logoDark from "../media/logo-dark.png"
import ThemeSwitcher from "./themeSwitcher";
import { Link } from "react-scroll";
import { useTheme } from "../contexts/themeContext";
import { LIGHT_THEME } from "../types/theme";
import routes from "../utilities/routes";


export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const { theme } = useTheme()
    const { t } = useLang()

    //change nav color when scrolling
    const [color, setColor] = useState<boolean>(false)

    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeColor)
        return () => {
            window.removeEventListener('scroll', changeColor)
        }
    }, [])

    const handleSetActive = (to: string) => {
        if (to === 'home') {
            setScrolled(false)
        } else {
            setScrolled(true)
        }
    }

    return (
        <Disclosure as="nav" className={`fixed w-[90%] lg:w-full backdrop-blur-xl left-1/2 -translate-x-1/2 bg-navBg dark:bg-navBgDark shadow-lg border-navBorder dark:border-navBorderDark z-20 transition duration-300 ease-in-out top-3 border-2 rounded-lg ${color ? 'lg:max-w-none lg:top-0 lg:border-none lg:rounded-none' : 'lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl lg:top-3 lg:border-2  lg:rounded-lg'}`}>
            <div className={`mx-auto container py-4 px-4 ${color ? 'lg:px-0' : 'lg:px-8'}`}>
                <div className="relative flex items-center justify-between">
                    <div className="flex flex-1 items-start lg:items-center justify-start lg:items-stretch lg:justify-start h-full">
                        <div className="flex flex-shrink-0 items-start lg:items-center justify-start">
                            <Link to='home' smooth={true} spy={true} className="cursor-pointer" onSetActive={handleSetActive}>
                                <img src={scrolled && theme === LIGHT_THEME ? logoDark : logo} alt="Logo" className="h-[35px] object-contain" />
                            </Link>
                        </div>
                        <div className="hidden lg:ml-auto lg:flex space-x-4 items-center">
                            {routes.filter(x => x.path !== 'home').map((item) => (
                                <Link
                                    to={item.path}
                                    smooth={true}
                                    spy={true}
                                    key={item.name}
                                    duration={500}
                                    activeClass={'active'}
                                    onSetActive={handleSetActive}
                                    className={`hover:text-primary/80 text-base font-medium cursor-pointer font-medium cursor-pointer [&.active]:text-primary ${scrolled ? 'text-secondary dark:text-white dark:[&.active]:text-primary dark:hover:text-primary/80' : 'text-white'}`}
                                >
                                    {t(item.name, item.langKey)}
                                </Link>
                            ))}
                        </div>
                        <LangChanger className="hidden ms-auto lg:block pt-2" changeTextColor={scrolled && theme === LIGHT_THEME} />
                        <div className="flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0 hidden lg:flex">
                            <ThemeSwitcher changeTextColor={scrolled && theme === LIGHT_THEME} />
                        </div>
                        <a href="mailto:contact@portalmastersolutions.com"
                            className="block bg-primary text-white rounded-md py-2 px-4 text-base ms-2 border-2 border-primary hover:bg-primary/30 hidden xl:block"
                        >{t("Контактирајте нас", "nav_contact")}<FontAwesomeIcon icon={faArrowRight} className="ms-2" /></a>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-blue-400 hover:bg-blue-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <FontAwesomeIcon icon={faBars} aria-hidden="true" className={`block h-6 w-6 group-data-[open]:hidden ${scrolled && theme === LIGHT_THEME ? 'text-secondary' : 'text-white'}`} />
                            <FontAwesomeIcon icon={faTimes} aria-hidden="true" className={`hidden h-6 w-6 group-data-[open]:block ${scrolled && theme === LIGHT_THEME ? 'text-secondary' : 'text-white'}`} />
                        </DisclosureButton>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="lg:hidden">
                {({ close }: { close: () => void }) => (
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {routes.filter(x => x.path !== 'home').map((item) => (
                            <Link
                                to={item.path}
                                smooth={true}
                                spy={true}
                                key={item.name}
                                duration={500}
                                activeClass={'active'}
                                onSetActive={handleSetActive}
                                onClick={close}
                                className={`hover:bg-primary/20 hover:text-white block rounded-md px-3 py-2 text-base font-medium cursor-pointer [&.active]:bg-primary/80 [&.active]:text-white ${scrolled && theme === LIGHT_THEME ? 'text-secondary' : 'text-white'}`}
                            >
                                {t(item.name, item.langKey)}
                            </Link>
                        ))}
                        <div className="pt-5 pt-5">
                            {/* <a href="mailto:contact@portalmastersolutions.com"
                                className="block bg-primary text-white rounded-md py-2 px-6 text-base ms-2 border-2 border-primary hover:bg-primary/30 max-w-sm"
                            >{t("Контактирај нас")}<FontAwesomeIcon icon={faArrowRight} className="ms-2" /></a> */}
                            <ThemeSwitcher callback={close} changeTextColor={scrolled && theme === LIGHT_THEME} />
                            <LangChanger callback={close} changeTextColor={scrolled && theme === LIGHT_THEME} />
                        </div>
                    </div>
                )}
            </DisclosurePanel>
        </Disclosure>
    )
}