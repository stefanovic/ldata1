import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  infosNav: [
    {
      title: "Menu",
      items: [
        {
          title: "Tutti i servizi",
          href: "/servizi",
          description: "Naviga attraverso i nostri servizi.",
        },
        {
          title: "Showcase",
          href: "/showcase",
          description: "Dai un’occhiata al nostro showcase.",
          external: false,
        },
        {
          title: "FAQ",
          href: "/faq",
          description: "Risposte a domande frequenti.",
          external: false,
        },
        
      ],
    },
  ],
  examplesNav: [
    {
      title: "Servizi",
      items: [
        {
          title: "Sviluppo Web Classico",
          href: "/servizi/sviluppo-web-classico/",
          description: "Sviluppo front-end basato su HTML, CSS, JavaScript.",
        },
        {
          title: "Sviluppo Web Moderno",
          href: "/servizi/sviluppo-web-moderno/",
          description:
            "La velocità e l’efficienza di Jamstack e SSG sono al centro.",
        },
        {
          title: "UI/UX Design",
          href: "/servizi/servizio-ui-ux/",
          description: "Esperienze utente intuitive e coinvolgenti.",
          disabled: false,
        },
        {
          title: "Strategia dei Contenuti",
          href: "/servizi/content-strategy/",
          description: "SEO data driven e intelligenza artificiale ci permette di creare contenuti che coinvolgono e convertono.",
          disabled: false,
        },
        {
          title: "Gestione Contenuti",
          href: "/servizi/gestione-contenuti/",
          description:
            "Esperienze web personalizzate con CMS come ProcessWire e l’approccio headless.",
          disabled: false,
        },
        {
          title: "Progressive Web Application",
          href: "/servizi/pwa/",
          description: "PWA dinamiche e reattive con React, Astro.build e Vue.js.",
          disabled: false,
        },
      ],
    },
  ],
  links: [
    {
      title: "Chi siamo",
      href: "/about",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    /*{
      title: "Risorse",
      href: "/docs/getting-started",
    },*/
  ],
};
