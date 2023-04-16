import { ExternalLinks, PageLinks } from "./components";

export default function Home() {
  return (
    <>
      {/* Side Info */}
      <div className="relative flex-none overflow-hidden lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex lg:px-0">
        {/* Backdrop */}
        <div className="absolute inset-0 -z-10 overflow-hidden bg-stone-950 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem]">
          <svg
            className="absolute -bottom-48 left-[-40%] h-[80rem] w-[180%] lg:-right-40 lg:bottom-auto lg:left-auto lg:top-[-40%] lg:h-[180%] lg:w-[80rem]"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id=":R1d6:-desktop" cx="100%">
                <stop offset="0%" stop-color="rgba(250, 204, 21, 0.3)"></stop>
                <stop
                  offset="53.95%"
                  stop-color="rgba(217, 119, 6, 0.09)"
                ></stop>
                <stop offset="100%" stop-color="rgba(10, 14, 23, 0)"></stop>
              </radialGradient>
              <radialGradient id=":R1d6:-mobile" cy="100%">
                <stop offset="0%" stop-color="rgba(250, 204, 21, 0.3)"></stop>
                <stop
                  offset="53.95%"
                  stop-color="rgba(217, 119, 6, 0.09)"
                ></stop>
                <stop offset="100%" stop-color="rgba(10, 14, 23, 0)"></stop>
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

          <div className="absolute inset-x-0 bottom-0 right-0 h-1 bg-white mix-blend-overlay lg:left-auto lg:top-0 lg:h-auto lg:w-px" />
        </div>

        {/* Content */}
        <div className="relative flex w-full lg:pointer-events-auto lg:mr-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-y-auto lg:pl-[max(2rem,calc(50%-38rem))]">
          <div className="lg:flex lg:flex-col lg:w-[26rem] lg:before:flex-1 lg:before:pt-6">
            <div>
              <span className="text-sm text-gray-400 leading-relaxed">
                Hey, I’m Matheus Santos
              </span>
              <h1 className="mt-2 text-4xl leading-normal text-gray-100">
                I’m full-stack engineer, making{" "}
                <span className="text-amber-500">digital-products</span>
              </h1>
              <p className="mt-5 leading-relaxed">
                I’m always seeking to helping people with solutions. Currently,
                I’m focused on bulding, coding and designing human-centered
                solutions at Zup.
              </p>
              <PageLinks className="mt-4" />
            </div>
            <ExternalLinks className="flex flex-1 items-end pb-6" />
          </div>
        </div>
      </div>

      {/* Main */}
      <main className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="lg:ml-[26rem] lg:flex lg:w-full lg:justify-end lg:pl-32">
            <div className="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-lg lg:flex-auto">
              <h2 className="text-gray-100 text-3xl">
                Trying to make some difference
              </h2>
              <p>
                Hey! I’m Matheus Santos and I love to solve problems with
                technology. My interest in web development started back in 2018,
                when I started a System Development Technician course and have
                my first contact with React.{" "}
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
