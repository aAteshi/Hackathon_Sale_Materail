import { useLanguage } from "../context/LanguageContext";

export default function Stats() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[t("stats.accuracy"), t("stats.languages"), t("stats.response")].map(
            (stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative text-center">
                  <div className="text-7xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-2xl text-zinc-400">{stat.label}</div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
