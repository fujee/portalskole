import { useLang } from "../contexts/langContext"
import { Element } from "react-scroll"
import React from "react"

export default function DemoSection() {
  const { t } = useLang()

  return <Element name='demo'>
    <div id="demo" className="bg-transparent pt-24 pb-24">
      <div className="container mx-auto">
        <p className="text-primary font-semibold text-2xl relative after:content-[''] after:absolute after:block after:h-[4px] after:w-[100px] after:-bottom-4 after:left-0 after:bg-primary after:rounded-xl">
          {t('Демо – Упознајте')} <em>Портал Школе</em>
        </p>
        <h2 className="mt-10 text-1xl font-bold text-black dark:text-white">
          {t('Погледајте како Портал Мастер може трансформисати рад организације из перспективе Министарства просвете, школе и крајњих корисника (ученика и родитеља).')}
        </h2>
        <h2 className="mt-1 text-1xl font-bold text-black dark:text-white">
          {t('Сваки снимак приказује неке од најважнијих функционалности које ова платформа нуди.')}
        </h2>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-20 mt-10">
          {/* Министарство */}
          <div className="border-b-[2px] border-black/20 dark:border-primary/20 pb-5">
            <div className="flex justify-start items-center">
              <h3 className="text-2xl font-semibold text-primary">
                {t('Министарство – Централизовано управљање порталима')}
              </h3>
            </div>
            <div className="mt-5">
              <p className="text-justify text-black/80 dark:text-white/80">
                {t('Портал Мастер омогућава Министарству просвете да једноставно и ефикасно управља свим школским порталима у мрежи. Са интегрисаним CRM системом, свака школа добија подршку за комуникацију, док се важне информације, правилници и упутства лако дистрибуирају кроз цео систем. Централизовано одржавање глобалног садржаја, попут вести, докумената и линкова, омогућава брзу и сигурну измену информација која се аутоматски примењује на све портале. Министарство такође има потпуну контролу над администрацијом школа и корисника, укључујући једноставно додавање нових школа или креирање налога за кориснике.')}
              </p>
            </div>
          </div>
          <div className="border-b-[2px] border-black/20 dark:border-primary/20 pb-5">
            <video width="640" height="360" controls>
              <source src={`${process.env.PUBLIC_URL}/videos/ministarstvo.mp4`} type="video/mp4" />
              Ваш претраживач не подржава видео елемент.
            </video>
          </div>

          {/* Школе */}
          <div className="border-b-[2px] border-black/20 dark:border-primary/20 pb-5">
            <div className="flex justify-start items-center">
              <h3 className="text-2xl font-semibold text-primary">
                {t('Школе – Прилагођени портали за образовне институције')}
              </h3>
            </div>
            <div className="mt-5">
              <p className="text-justify text-black/80 dark:text-white/80">
                {t('Портал Мастер олакшава школама креирање и управљање порталима, прилагођеним њиховим потребама, уз минималан технички напор. Захваљујући предефинисаним шаблонима и могућности избора више тема за изглед портала, свака школа може да креира јединствен, професионалан портал. Платформа омогућава лако објављивање вести, галерија слика и докумената, што је посебно корисно за комуникацију са родитељима и ученицима. Портал Мастер је развијен са приоритетом на српском језику, уз подршку за језике мањина, а аутоматско превођење са ћирилице на латиницу додатно олакшава приступ различитим корисницима.')}
              </p>
            </div>
          </div>
          <div className="border-b-[2px] border-black/20 dark:border-primary/20 pb-5">
            <video width="640" height="360" controls>
              <source src={`${process.env.PUBLIC_URL}/videos/skola.mp4`} type="video/mp4" />
              Ваш претраживач не подржава видео елемент.
            </video>
          </div>

          {/* Крајњи корисници */}
          <div className="pb-5">
            <div className="flex justify-start items-center">
              <h3 className="text-2xl font-semibold text-primary">
                {t('Крајњи корисници – Родитељи и ученици')}
              </h3>
            </div>
            <div className="mt-5">
              <p className="text-justify text-black/80 dark:text-white/80">
                {t('Портал Мастер је дизајниран тако да пружи једноставно и интуитивно корисничко искуство за родитеље и ученике. Јединствено место за претраживање омогућава лак приступ информацијама из свих школа у систему. Захваљујући сличној структури садржаја на порталима различитих школа, крајњи корисници брзо долазе до жељених информација. Платформа је развијена са високим стандардима приступачности, нудећи опције као што су црно-бела и инверзна тема, како би портали били приступачни свима.')}
              </p>
            </div>
          </div>
          <div>
            <video width="640" height="360" controls>
              <source src={`${process.env.PUBLIC_URL}/videos/korisnik.mp4`} type="video/mp4" />
              Ваш претраживач не подржава видео елемент.
            </video>
          </div>
        </div>
      </div>

    </div></Element>
}