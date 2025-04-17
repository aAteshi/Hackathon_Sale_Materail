import { Shield, Plane, Wallet, Heart, Building } from 'lucide-react';
import { useLanguage } from "../context/LanguageContext";

export default function UseCases() {
  const { t } = useLanguage();

  const industries = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: t('industries.insurance.title'),
      description: t('industries.insurance.description')
    },
    {
      icon: <Plane className="w-12 h-12" />,
      title: t('industries.tourism.title'),
      description: t('industries.tourism.description')
    },
    {
      icon: <Wallet className="w-12 h-12" />,
      title: t('industries.finance.title'),
      description: t('industries.finance.description')
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: t('industries.healthcare.title'),
      description: t('industries.healthcare.description')
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: t('industries.realEstate.title'),
      description: t('industries.realEstate.description')
    }
  ];

  return (
    <section className="py-32 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              {t('useCasesTitle')}
            </span>
          </h2>
          <p className="text-zinc-400 text-xl max-w-3xl mx-auto">
            {t('useCasesDescription')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-zinc-900 p-8 rounded-xl border border-zinc-800 h-full transform transition duration-500 group-hover:-translate-y-2">
                <div className="text-cyan-400 group-hover:text-pink-400 transition-colors duration-500 mb-6">
                  {industry.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{industry.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}