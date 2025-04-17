import {
  Volume2,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-zinc-900 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-pink-500/5" />
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div>
            <div className="flex items-center mb-8 group">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 to-pink-500/30 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Volume2 className="relative w-8 h-8 text-cyan-400 group-hover:text-pink-400 transition-colors duration-300" />
              </div>
              <span className="ml-3 text-xl font-bold">
                <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                  VoiceBot
                </span>
                <span className="text-white"> Botnoi</span>
              </span>
            </div>
            <p className="text-zinc-400 mb-6">
              {t('footer.description')}
            </p>
            <div className="flex space-x-6">
              {[Github, Twitter, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-cyan-400 hover:text-pink-400 transition-colors duration-300"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">{t('footer.product.title')}</h3>
            <ul className="space-y-4">
              {t('footer.product.links').map((item: string) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">{t('footer.company.title')}</h3>
            <ul className="space-y-4">
              {t('footer.company.links').map((item: string) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">{t('footer.contact.title')}</h3>
            <ul className="space-y-4">
              {[
                { icon: Mail, text: t('footer.contact.email') },
                { icon: Phone, text: t('footer.contact.phone') },
                { icon: MapPin, text: t('footer.contact.address') },
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <item.icon className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-zinc-400">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800">
          <div className="text-center text-zinc-500">
            {t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}
          </div>
        </div>
      </div>
    </footer>
  );
}