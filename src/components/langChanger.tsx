import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { useLang } from "../contexts/langContext";
import { getLabel, all as pisma, Pismo } from "../utilities/pismo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";


export default function LangChanger({ className, changeTextColor, callback }: { className?: string, changeTextColor?: boolean, callback?: () => void }) {
    const { lang, setLang } = useLang();


    const setSelected = (selected: Pismo) => {
        setLang(selected);
        callback && callback();
    }


    return (<Listbox value={lang} onChange={setSelected}>
        <div className={`relative ${className}`}>
            <ListboxButton className={`relative w-full lg:w-[130px] cursor-pointer py-1.5 pl-2 pr-4 text-left focus:outline-none sm:text-sm ${changeTextColor ? 'text-secondary' : 'text-white'}`}>
                <span className="flex items-center">
                    <span className="block me-0">{getLabel(lang)}</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-1 flex items-center pr-1">
                    <FontAwesomeIcon icon={faChevronDown} aria-hidden="true" className="h-3 w-3 text-gray-400" />
                </span>
            </ListboxButton>

            <ListboxOptions
                transition
                className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-lg bg-white/80 dark:bg-secondary/80 py-1 text-base dark:text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
            >
                {pisma.map((language, index) => (
                    <ListboxOption
                        key={index}
                        value={language}
                        className="group relative cursor-pointer select-none py-2  text-gray-900 data-[focus]:bg-blue-500/80 data-[focus]:text-secondary dark:data-[focus]:text-primary/80"
                    >
                        <div className="flex items-center">
                            <span className="ml-3 block font-normal group-data-[selected]:text-primary group-data-[selected]:font-semibold">
                                {getLabel(language)}
                            </span>
                        </div>
                    </ListboxOption>
                ))}
            </ListboxOptions>
        </div>
    </Listbox>);
}