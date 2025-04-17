import { Mic, Wand2, Zap, Globe, Cpu, Shield, Clock, Users } from 'lucide-react';
import { useLanguage } from "../context/LanguageContext";

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: t('featuresList.neuralVoice.title'),
      description: t('featuresList.neuralVoice.description')
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: t('featuresList.quantum.title'),
      description: t('featuresList.quantum.description')
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('featuresList.security.title'),
      description: t('featuresList.security.description')
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: t('featuresList.realTime.title'),
      description: t('featuresList.realTime.description')
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('featuresList.translation.title'),
      description: t('featuresList.translation.description')
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t('featuresList.multiUser.title'),
      description: t('featuresList.multiUser.description')
    },
    {
      icon: <Wand2 className="w-8 h-8" />,
      title: t('featuresList.context.title'),
      description: t('featuresList.context.description')
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t('featuresList.latency.title'),
      description: t('featuresList.latency.description')
    }
  ];

  return (
    <section className="py-32 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              {t('featuresTitle')}
            </span>
          </h2>
          <p className="text-zinc-400 text-xl max-w-3xl mx-auto">
            {t('featuresDescription')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-zinc-900 p-8 rounded-xl border border-zinc-800 h-full transform transition duration-500 group-hover:-translate-y-2">
                <div className="text-cyan-400 group-hover:text-pink-400 transition-colors duration-500 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}