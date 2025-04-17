import { Check } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Pricing() {
  const { t } = useLanguage();

  const packages = [
    t("plans.buffet"),
    t("plans.starter"),
    t("plans.regular"),
    t("plans.expert"),
  ];

  return (
    <section className="py-32 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              {t("pricingTitle")}
            </span>
          </h2>
          <p className="text-zinc-400 text-xl max-w-3xl mx-auto">
            {t("pricingDescription")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((plan, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-zinc-900 p-8 rounded-xl border border-zinc-800 h-full transform transition duration-500 group-hover:-translate-y-2 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-6">
                  {plan.name}
                </h3>
                <ul className="space-y-4 flex-grow">
                  {plan.features.map(
                    (feature: string, featureIndex: number) => (
                      <li
                        key={featureIndex}
                        className="flex items-start text-zinc-300"
                      >
                        <Check className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-1" />
                        <span>{feature}</span>
                      </li>
                    )
                  )}
                </ul>
                <button className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-lg transition-all duration-300 hover:shadow-[0_0_1rem_0_rgba(34,211,238,0.3)]">
                  {t("getStarted")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
