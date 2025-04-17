import { useState, useEffect } from "react";
import { Volume2, Menu, X, Globe2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { currentLang, setCurrentLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 150);
      setLastScrollY(currentScrollY);
      setTimeout(() => {
        setIsAtTop(currentScrollY === 0);
      }, 90);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 80;
      const sectionTop = section.offsetTop - navHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  const toggleLanguage = (lang: 'EN' | 'TH') => {
    setCurrentLang(lang);
    setIsLangOpen(false);
  };

  const navItems = [
    { label: t('features'), id: "features" },
    { label: t('useCases'), id: "use-cases" },
    { label: t('technology'), id: "showcase" },
    { label: t('pricing'), id: "pricing" },
    { label: t('about'), id: "stats" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 py-4 ${
        isAtTop && !isMenuOpen
          ? "bg-transparent"
          : "bg-black/80 backdrop-blur-md"
      } transform ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center group cursor-pointer"
            onClick={() => scrollToSection("voicebot")}
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 to-pink-500/30 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Volume2 className="relative w-8 h-8 text-cyan-400 group-hover:text-pink-400 transition-colors duration-300" />
            </div>
            <span className="ml-3 text-xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                Voice
              </span>
              <span className="text-white">Bot</span>
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-zinc-400 hover:text-white transition-colors duration-300 text-lg relative group"
              >
                <span className="relative">
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </span>
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-full bg-zinc-800/50 hover:bg-zinc-700/50 transition-colors duration-300"
              >
                <Globe2 className="w-5 h-5 text-cyan-400" />
                <span className="text-white">{currentLang}</span>
              </button>
              
              {/* Dropdown Menu */}
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-32 rounded-lg bg-zinc-800 shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <button
                      onClick={() => toggleLanguage("EN")}
                      className="block w-full px-4 py-2 text-sm text-white hover:bg-zinc-700 transition-colors duration-300"
                    >
                      English
                    </button>
                    <button
                      onClick={() => toggleLanguage("TH")}
                      className="block w-full px-4 py-2 text-sm text-white hover:bg-zinc-700 transition-colors duration-300"
                    >
                      ไทย
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button className="px-6 py-2 text-zinc-400 hover:text-white transition-colors duration-300">
              {t('signIn')}
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-lg transition-all duration-300 hover:shadow-[0_0_1rem_0_rgba(34,211,238,0.3)]">
              {t('getStarted')}
            </button>
          </div>

          <button
            className={`md:hidden text-zinc-400 transition-transform duration-300 transform ${
              isMenuOpen ? "rotate-180" : "rotate-0"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-zinc-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-pink-500/10 rounded-lg transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              {/* Mobile Language Switcher */}
              <div className="px-3 py-2">
                <div className="flex space-x-2">
                  <button
                    onClick={() => toggleLanguage("EN")}
                    className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                      currentLang === "EN"
                        ? "bg-gradient-to-r from-cyan-500 to-pink-500 text-white"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => toggleLanguage("TH")}
                    className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                      currentLang === "TH"
                        ? "bg-gradient-to-r from-cyan-500 to-pink-500 text-white"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    ไทย
                  </button>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <button className="w-full px-3 py-2 text-zinc-400 hover:text-white transition-colors duration-300">
                  {t('signIn')}
                </button>
                <button className="w-full px-3 py-2 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-lg transition-all duration-300">
                  {t('getStarted')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}