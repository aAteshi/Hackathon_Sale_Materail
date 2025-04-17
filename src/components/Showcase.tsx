import { useLanguage } from "../context/LanguageContext";

export default function Showcase() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 blur-2xl rounded-full" />
            <h2 className="relative text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                {t("showcaseTitle")}
              </span>
            </h2>
            <p className="relative text-xl text-zinc-400 mb-12 leading-relaxed">
              {t("showcaseDescription")}
            </p>
            <div className="relative flex flex-col sm:flex-row gap-6">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-lg text-lg font-medium transition-all duration-300 hover:shadow-[0_0_2rem_0_rgba(34,211,238,0.3)]">
                <div className="absolute top-0 left-0 w-full h-full bg-white/25 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">{t("startFreeTrial")}</span>
              </button>
              <button className="group relative px-8 py-4 bg-transparent border border-pink-500/50 rounded-lg text-lg font-medium transition-all duration-300 hover:border-pink-500 hover:shadow-[0_0_2rem_0_rgba(236,72,153,0.3)]">
                <div className="absolute top-0 left-0 w-full h-full bg-pink-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative text-white">
                  {t("documentation")}
                </span>
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 blur-2xl rounded-full" />
            <img
              src="https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?auto=format&fit=crop&q=80"
              alt="Futuristic Technology"
              className="relative rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
