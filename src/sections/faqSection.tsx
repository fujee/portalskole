import { Element } from "react-scroll";
import { useLang } from "../contexts/langContext";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";


export default function FaqSection() {
    const { t } = useLang()

    return (
        <Element name="faq">
            <div className="py-24 bg-pureWhite dark:bg-faqBlack">
                <div className="container mx-auto px-5 lg:px-0">
                    <p className="text-primary text-center font-semibold text-xl lg:text-2xl relative after:content-[''] after:absolute after:block after:h-[4px] after:w-[100px] after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:bg-primary after:rounded-xl">{t('Често постављена питања', "faq_uppertitle")}</p>
                    <h2 className="mt-10 text-2xl lg:text-4xl font-bold text-black dark:text-white text-center">{t('Питали сте...', "faq_title")}</h2>
                    <div className="mt-10">
                        <Disclosure as='div' className="py-5 border-b-2 border-secondary/20 dark:border-white/20">
                            <DisclosureButton
                                as="div"
                                className="w-full flex justify-between cursor-pointer group pb-2">
                                <h6 className="text-lg lg:text-2xl font-semibold text-black dark:text-white">{t("Шта је Портал Школе и како функционише?", "faq_q1")}</h6>
                                <FontAwesomeIcon icon={faPlusCircle} className="text-primary text-2xl block group-data-[open]:hidden" />
                                <FontAwesomeIcon icon={faMinusCircle} className="text-secondary dark:text-white text-2xl hidden group-data-[open]:block" />
                            </DisclosureButton>
                            <div className="overflow-hidden py-2">
                                <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                                    <p className="mt-4 text-black/80 dark:text-white/80">{t('Наша платформа пружа јединствено решење које омогућава брзу израду персонализованих веб презентација, лако одржавање и ефикасно управљање.', "faq_a1")}</p>
                                </DisclosurePanel>
                            </div>
                        </Disclosure>

                        <Disclosure as='div' className="py-5 border-b-2 border-secondary/20 dark:border-white/20">
                            <DisclosureButton
                                as="div"
                                className="w-full flex justify-between cursor-pointer group pb-2">
                                <h6 className="text-lg lg:text-2xl font-semibold text-black dark:text-white">{t("Да ли је потребно техничко предзнање за коришћење платформе?", "faq_q2")}</h6>
                                <FontAwesomeIcon icon={faPlusCircle} className="text-primary text-2xl block group-data-[open]:hidden" />
                                <FontAwesomeIcon icon={faMinusCircle} className="text-secondary dark:text-white text-2xl hidden group-data-[open]:block" />
                            </DisclosureButton>
                            <div className="overflow-hidden py-2">
                                <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                                    <p className="mt-4 text-black/80 dark:text-white/80">{t('Не, Портал Школе је осмишљен тако да омогући лако управљање садржајем без техничког предзнања. Платформа нуди интуитивни интерфејс и велики избор предефинисаних страница и компоненти, што је чини једноставном за употребу.', "faq_a2")}</p>
                                </DisclosurePanel>
                            </div>
                        </Disclosure>

                        <Disclosure as='div' className="py-5 border-b-2 border-secondary/20 dark:border-white/20">
                            <DisclosureButton
                                as="div"
                                className="w-full flex justify-between cursor-pointer group pb-2">
                                <h6 className="text-xl lg:text-2xl font-semibold text-black dark:text-white">{t("Може ли се платформа прилагодити нашим специфичним потребама?", "faq_q3")}</h6>
                                <FontAwesomeIcon icon={faPlusCircle} className="text-primary text-2xl block group-data-[open]:hidden" />
                                <FontAwesomeIcon icon={faMinusCircle} className="text-secondary dark:text-white text-2xl hidden group-data-[open]:block" />
                            </DisclosureButton>
                            <div className="overflow-hidden py-2">
                                <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                                    <p className="mt-4 text-black/80 dark:text-white/80">{t('Да, Портал Школе се може прилагодити вашим специфичним потребама. Наш тим блиско сарађује са клијентима како би осигурао да платформа у потпуности подржи њихове захтеве и пословне процесе на најбољи могући начин.', "faq_a3")}</p>
                                </DisclosurePanel>
                            </div>
                        </Disclosure>

                        <Disclosure as='div' className="py-5 border-b-2 border-secondary/20 dark:border-white/20">
                            <DisclosureButton
                                as="div"
                                className="w-full flex justify-between cursor-pointer group pb-2">
                                <h6 className="text-xl lg:text-2xl font-semibold text-black dark:text-white">{t("Да ли је могућа интеграција са постојећим системима?", "faq_q4")}</h6>
                                <FontAwesomeIcon icon={faPlusCircle} className="text-primary text-2xl block group-data-[open]:hidden" />
                                <FontAwesomeIcon icon={faMinusCircle} className="text-secondary dark:text-white text-2xl hidden group-data-[open]:block" />
                            </DisclosureButton>
                            <div className="overflow-hidden py-2">
                                <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                                    <p className="mt-4 text-black/80 dark:text-white/80">{t('Да, Портал Школе може да подржи интеграцију са постојећим системима који су од значаја за ваше пословање. ', "faq_a4")}</p>
                                </DisclosurePanel>
                            </div>
                        </Disclosure>

                        <Disclosure as='div' className="py-5 border-b-2 border-secondary/20 dark:border-white/20">
                            <DisclosureButton
                                as="div"
                                className="w-full flex justify-between cursor-pointer group pb-2">
                                <h6 className="text-xl lg:text-2xl font-semibold text-black dark:text-white">{t("Како се гарантује сигурност података на платформи?", "faq_q5")}</h6>
                                <FontAwesomeIcon icon={faPlusCircle} className="text-primary text-2xl block group-data-[open]:hidden" />
                                <FontAwesomeIcon icon={faMinusCircle} className="text-secondary dark:text-white text-2xl hidden group-data-[open]:block" />
                            </DisclosureButton>
                            <div className="overflow-hidden py-2">
                                <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                                    <p className="mt-4 text-black/80 dark:text-white/80">{t('Платформа обезбеђује заштиту података коришћењем најсавременијих сигурносних протокола, као што су криптовање, контрола приступа и редовно ажурирање сигурносних система. Ово осигурава висок ниво заштите и поузданости.', "faq_a5")}</p>
                                </DisclosurePanel>
                            </div>
                        </Disclosure>

                        <Disclosure as='div' className="py-5 border-b-2 border-secondary/20 dark:border-white/20">
                            <DisclosureButton
                                as="div"
                                className="w-full flex justify-between cursor-pointer group pb-2">
                                <h6 className="text-xl lg:text-2xl font-semibold text-black dark:text-white">{t("Која врста подршке је доступна корисницима?", "faq_q6")}</h6>
                                <FontAwesomeIcon icon={faPlusCircle} className="text-primary text-2xl block group-data-[open]:hidden" />
                                <FontAwesomeIcon icon={faMinusCircle} className="text-secondary dark:text-white text-2xl hidden group-data-[open]:block" />
                            </DisclosureButton>
                            <div className="overflow-hidden py-2">
                                <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                                    <p className="mt-4 text-black/80 dark:text-white/80">{t('Пружамо свеобухватну подршку корисницима, укључујући техничку помоћ, обуку и детаљну документацију.', "faq_a6")}</p>
                                </DisclosurePanel>
                            </div>
                        </Disclosure>

                        <Disclosure as='div' className="py-5 border-b-2 border-secondary/20 dark:border-white/20">
                            <DisclosureButton
                                as="div"
                                className="w-full flex justify-between cursor-pointer group pb-2">
                                <h6 className="text-xl lg:text-2xl font-semibold text-black dark:text-white">{t("Да ли су хостинг и домени део решења?", "faq_q7")}</h6>
                                <FontAwesomeIcon icon={faPlusCircle} className="text-primary text-2xl block group-data-[open]:hidden" />
                                <FontAwesomeIcon icon={faMinusCircle} className="text-secondary dark:text-white text-2xl hidden group-data-[open]:block" />
                            </DisclosureButton>
                            <div className="overflow-hidden py-2">
                                <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                                    <p className="mt-4 text-black/70 dark:text-white/80">{t('Сви трошкови хостинга су обухваћени ценом, без додатних издатака за одржавање. Клијентима који не располажу сопственим интернет доменом, у оквиру цене је доступна и јединствена веб адреса унутар нашег система.', "faq_a7")}</p>
                                </DisclosurePanel>
                            </div>
                        </Disclosure>


                        <Disclosure as='div' className="py-5">
                            <DisclosureButton
                                as="div"
                                className="w-full flex justify-between cursor-pointer group pb-2">
                                <h6 className="text-xl lg:text-2xl font-semibold text-black dark:text-white">{t("Како могу да добијем додатне информације о платформи?", "faq_q8")}</h6>
                                <FontAwesomeIcon icon={faPlusCircle} className="text-primary text-2xl block group-data-[open]:hidden" />
                                <FontAwesomeIcon icon={faMinusCircle} className="text-secondary dark:text-white text-2xl hidden group-data-[open]:block" />
                            </DisclosureButton>
                            <div className="overflow-hidden py-2">
                                <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                                    <p className="mt-4 text-black/80 dark:text-white/80">{t('Контактирајте нас', "faq_a8")} <a href="mailto:contact@portalmastersolutions.com" className="text-primary hover:text-secondary underline dark:hover:text-pureWhite">contact@portalmastersolutions.com</a></p>
                                </DisclosurePanel>
                            </div>
                        </Disclosure>
                    </div>
                </div>
            </div>
        </Element>
    );
}