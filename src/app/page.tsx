import { ExternalLinks } from "./components";

export default function Home() {
  return (
    <>
      {/* Side Info */}
      <div className="relative flex-none overflow-hidden px-6 lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex lg:px-0">
        {/* Backdrop */}
        <div className="absolute inset-0 -z-10 overflow-hidden bg-stone-950 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem]">
          <svg
            className="absolute -bottom-48 left-[-40%] h-[80rem] w-[180%] lg:-right-40 lg:bottom-auto lg:left-auto lg:top-[-40%] lg:h-[180%] lg:w-[80rem]"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id=":R1d6:-desktop" cx="100%">
                <stop offset="0%" stopColor="rgba(250, 204, 21, 0.3)"></stop>
                <stop
                  offset="53.95%"
                  stopColor="rgba(217, 119, 6, 0.09)"
                ></stop>
                <stop offset="100%" stopColor="rgba(10, 14, 23, 0)"></stop>
              </radialGradient>
              <radialGradient id=":R1d6:-mobile" cy="100%">
                <stop offset="0%" stopColor="rgba(250, 204, 21, 0.3)"></stop>
                <stop
                  offset="53.95%"
                  stopColor="rgba(217, 119, 6, 0.09)"
                ></stop>
                <stop offset="100%" stopColor="rgba(10, 14, 23, 0)"></stop>
              </radialGradient>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#:R1d6:-desktop)"
              className="hidden lg:block"
            ></rect>
            <rect
              width="100%"
              height="100%"
              fill="url(#:R1d6:-mobile)"
              className="lg:hidden"
            ></rect>
          </svg>

          <div className="absolute inset-x-0 bottom-0 right-0 h-px bg-white mix-blend-overlay lg:left-auto lg:top-0 lg:h-auto lg:w-px" />
        </div>

        {/* Content */}
        <div className="relative flex w-full lg:pointer-events-auto lg:mr-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-y-auto lg:pl-[max(2rem,calc(50%-38rem))]">
          <div className="mx-auto max-w-lg lg:mx-0 lg:flex lg:flex-col lg:w-[26rem] lg:before:flex-1 lg:before:pt-6">
            <div className="pb-16 pt-20 sm:pb-20 sm:pt-32 lg:py-20">
              <div>
                <span className="text-sm text-gray-400 leading-relaxed">
                  Hey, I’m Matheus Santos
                </span>
                <h1 className="mt-2 text-4xl leading-normal text-gray-100">
                  I’m full-stack engineer, making{" "}
                  <span className="text-amber-500">digital-products</span>
                </h1>
                <p className="mt-5 leading-relaxed">
                  I’m always seeking to helping people with solutions. I’m
                  focused on building, coding and designing human-centered
                  solutions at Zup.
                </p>
              </div>
            </div>
            <ExternalLinks className="flex flex-1 items-end pb-6" />
          </div>
        </div>
      </div>

      {/* Main */}
      <main className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="lg:ml-[26rem] lg:flex lg:w-full lg:justify-end lg:pl-32">
            <div className="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-lg lg:flex-auto prose">
              <h2>Trying to make some difference</h2>
              <p>
                Hey! I’m Matheus Santos and I love to solve problems with
                technology. My interest in web development started back in 2018,
                when I started a System Development Technician course and have
                my first contact with React.{" "}
              </p>
              <p>
                During the last years, I’ve worked in a start-up, a school based
                technology institute and huge corporations. My main focus
                nowadays is build accessible, inclusive and awesome products and
                digital experiences for all.{" "}
              </p>
              <h2>Where I’ve worked</h2>
              <h3>
                React Frontend Developer <span>@Zup Innovation</span>
              </h3>
              <p>
                Participating in the planning, development and delivery of new
                features for the career development tool, Zenity People, used by
                more than 4k monthly users. Focusing on accessibility, unit
                testing and scalability.
              </p>
              <h3>
                Angular Frontend Developer <span>@Infosys</span>
              </h3>
              <p>
                Developing new features in the Auction and Carrier Registration
                modules on Loadshark, Braskem&apos;s freight management
                platform, generating savings of over 3 million reais and 200+
                registered carriers.
              </p>
              <h3>
                React Frontend Developer <span>@SENAI</span>
              </h3>
              <p>
                Responsible for implementing the design and development of new
                features on the Ultracar platform, a system that facilitates the
                management of auto repair shops in Brazil.
              </p>
              <h3>
                React Frontend Developer <span>@Intelitrader</span>
              </h3>
              <p>
                Participating in the development of the InteliRisk financial
                risk management platform from the beginning, and being
                responsible for the delivery and maintainability of new frontend
                features. Developing the CSS framework for styling and
                standardizing all Intelitrader products, used in companies such
                as XP Investimentos and GUIDE.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
