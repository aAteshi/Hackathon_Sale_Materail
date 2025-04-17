import { useLanguage } from "../context/LanguageContext";

export default function Voicebot() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-900">
      {/* Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-pink-500/10" />
      </div>

      {/* Background Image */}
      <div className="absolute w-full h-full">
        <div
          className="h-full w-full"
          style={{
            background: "url('/images/mountain.png') center/cover no-repeat",
            filter: "opacity(0.3)",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-full grid lg:grid-cols-2 gap-12 items-center pt-24 lg:pt-0">
          {/* Left Column - Text Content */}
          <div className="flex flex-col items-start justify-center">
            {/* Heading */}
            <div className="relative text-left mb-8">
              <div className="absolute -inset-x-8 -inset-y-4 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 blur-xl opacity-75" />
              <h1 className="relative text-6xl lg:text-8xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                  {t("heroTitle")}
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl lg:text-2xl text-zinc-300 font-light mb-12 leading-relaxed max-w-xl">
              {t("heroDescription")}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-lg text-lg font-medium transition-all duration-300 hover:shadow-[0_0_2rem_0_rgba(34,211,238,0.3)]">
                <div className="absolute top-0 left-0 w-full h-full bg-white/25 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">{t("launchExperience")}</span>
              </button>
              <button className="group relative px-8 py-4 bg-transparent border border-pink-500/50 rounded-lg text-lg font-medium transition-all duration-300 hover:border-pink-500 hover:shadow-[0_0_2rem_0_rgba(236,72,153,0.3)]">
                <div className="absolute top-0 left-0 w-full h-full bg-pink-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative text-white">{t("watchDemo")}</span>
              </button>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-2xl">
              {/* Video Container with Gradient Border */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/fRlb8A4KmwU"
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 blur-2xl rounded-full -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
