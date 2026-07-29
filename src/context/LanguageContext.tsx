"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'es';

type Dictionary = {
  [key: string]: string;
};

const translations: Record<Language, Dictionary> = {
  en: {
    nav_medicare: "Medicare",
    nav_medicaid: "Medicaid",
    nav_life: "Life Insurance",
    nav_resources: "Resources",
    nav_about: "About Us",
    call: "Call",
    eyebrow: "Local advisors. Personal care.",
    h1: "Trusted Medicare Guidance for Every Stage of Life",
    lead: "We help seniors and their families compare Medicare, Medicaid, and health insurance options with confidence and clarity—at no cost to you.",
    cta: "Get My Free Quote",
    advisorCall: "Speak with a local advisor",
    stars: "4.9/5 from 1,200+ local families",
    noObligation: "No obligation. 100% free.",
    s1_title: "Medicare",
    s1_desc: "Understand your options and find the right Medicare plan for your needs.",
    s1_cta: "Learn More",
    s2_title: "Medicaid",
    s2_desc: "Get help exploring Medicaid coverage and see if you qualify.",
    s3_title: "Life Insurance",
    s3_desc: "Protect your loved ones with life insurance options that fit your goals.",
    s4_title: "Prescription Plans",
    s4_desc: "Lower your prescription costs with plans that fit your budget.",
    s5_title: "Supplemental Coverage",
    s5_desc: "Add extra protection for vision, dental, hospital stays, and more.",
    b1_title: "Local & Independent",
    b1_desc: "We're local advisors who know your community.",
    b2_title: "Unbiased Guidance",
    b2_desc: "We compare plans from top carriers to find what's right for you.",
    b3_title: "No Cost to You",
    b3_desc: "Our services are always free. You pay nothing extra.",
    b4_title: "Ongoing Support",
    b4_desc: "We're here for you before, during, and after you enroll.",
    footer_desc: "Trusted Medicare Guidance for Every Stage of Life. Local advisors. Personal care.",
    company: "Company",
    contactUs: "Contact Us",
    contact_desc: "Have questions? We are here to help.",
    services: "Services",
    rights: "Marymax Insurance Services. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    demo_page: "This is a placeholder page for the demo. The real content for {title} will be added here later.",
    demo_badge: "DEMO WEBSITE FOR MARYMAX"
  },
  es: {
    nav_medicare: "Medicare",
    nav_medicaid: "Medicaid",
    nav_life: "Seguro de Vida",
    nav_resources: "Recursos",
    nav_about: "Sobre Nosotros",
    call: "Llama al",
    eyebrow: "Asesores locales. Atención personalizada.",
    h1: "Orientación confiable de Medicare para cada etapa de la vida",
    lead: "Ayudamos a las personas mayores y a sus familias a comparar opciones de Medicare, Medicaid y seguros de salud con confianza y claridad, sin costo alguno para usted.",
    cta: "Obtener mi cotización gratis",
    advisorCall: "Habla con un asesor local",
    stars: "4.9/5 de más de 1,200 familias locales",
    noObligation: "Sin compromiso. 100% gratis.",
    s1_title: "Medicare",
    s1_desc: "Comprenda sus opciones y encuentre el plan de Medicare adecuado para sus necesidades.",
    s1_cta: "Más información",
    s2_title: "Medicaid",
    s2_desc: "Obtenga ayuda para explorar la cobertura de Medicaid y ver si califica.",
    s3_title: "Seguro de Vida",
    s3_desc: "Proteja a sus seres queridos con opciones de seguro de vida que se ajusten a sus objetivos.",
    s4_title: "Planes de Recetas",
    s4_desc: "Reduzca los costos de sus recetas con planes que se ajusten a su presupuesto.",
    s5_title: "Cobertura Suplementaria",
    s5_desc: "Agregue protección adicional para visión, dental, estadías en el hospital y más.",
    b1_title: "Locales e Independientes",
    b1_desc: "Somos asesores locales que conocen su comunidad.",
    b2_title: "Orientación Imparcial",
    b2_desc: "Comparamos planes de las mejores aseguradoras para encontrar el adecuado para usted.",
    b3_title: "Sin Costo Para Usted",
    b3_desc: "Nuestros servicios son siempre gratuitos. No paga nada extra.",
    b4_title: "Apoyo Continuo",
    b4_desc: "Estamos aquí para usted antes, durante y después de inscribirse.",
    footer_desc: "Orientación confiable de Medicare para cada etapa de la vida. Asesores locales. Atención personalizada.",
    company: "Empresa",
    contactUs: "Contáctenos",
    contact_desc: "¿Tiene preguntas? Estamos aquí para ayudar.",
    services: "Servicios",
    rights: "Marymax Insurance Services. Todos los derechos reservados.",
    privacy: "Política de Privacidad",
    terms: "Términos de Servicio",
    demo_page: "Esta es una página de prueba para la demo. El contenido real para {title} se añadirá aquí más tarde.",
    demo_badge: "SITIO WEB DEMO PARA MARYMAX"
  }
};

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string, variables?: Record<string, string>) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Detect browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('es')) {
      setLang('es');
    }
  }, []);

  const t = (key: string, variables?: Record<string, string>) => {
    let text = translations[lang][key] || key;
    if (variables) {
      Object.keys(variables).forEach((varKey) => {
        text = text.replace(`{${varKey}}`, variables[varKey]);
      });
    }
    return text;
  };

  // Avoid hydration mismatch by not rendering until mounted if needed, 
  // but since we want SEO, we'll just render default 'en' during SSR.
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <div key={mounted ? 'mounted' : 'unmounted'} className="contents">
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
