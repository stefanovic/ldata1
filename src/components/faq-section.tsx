import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
	{
		id: "item-1",
		question: "Cosè lo sviluppo web classico?",
		answer: "Lo Sviluppo Web Classico, considerando solo il front-end, si riferisce alla creazione di siti web utilizzando le tecnologie fondamentali HTML, CSS e JavaScript. Queste tecnologie lavorano insieme per costruire e stilizzare le pagine web come le conosciamo oggi.",
	},
	{
		id: "item-2",
		question: "Cosè lo sviluppo web moderno?",
		answer: "Lo Sviluppo Web Moderno è un approccio all’ingegneria del software che sfrutta le tecnologie e gli strumenti più recenti per creare siti web e applicazioni web più efficienti, performanti e sicure. Nel contesto del front-end, lo Sviluppo Web Moderno può includere l’uso di librerie e framework JavaScript come React, Vue.js e Angular, che permettono di creare interfacce utente dinamiche e reattive. Inoltre, lo Sviluppo Web Moderno può implicare l’uso di tecniche come Jamstack (JavaScript, API e Markup) e l’approccio headless CMS, che separa il back-end del contenuto dal front-end dell’esperienza utente. In sintesi, lo Sviluppo Web Moderno mira a migliorare l’esperienza utente, l’efficienza dello sviluppo e la qualità del prodotto finale attraverso l’uso di tecnologie e pratiche all’avanguardia. ",
	},
	{
		id: "item-3",
		question: "Cosa vuol dire JamStack?",
		answer: "Jamstack è un approccio moderno allo sviluppo web che mira a rendere i siti web più veloci, più sicuri e più facili da scalare. Il termine “Jamstack” è un acronimo che sta per JavaScript, API e Markup. In sintesi, Jamstack è un modo per costruire siti web che sfrutta la potenza del pre-rendering e delle API per offrire prestazioni, sicurezza e scalabilità superiori. ",
	},
	{
		id: "item-4",
		question: "Perchè è così importante la Content Strategy?",
		answer: "La Strategia dei contenuti \"Content Strategy\" è fondamentale perché guida la creazione, la distribuzione e la gestione dei contenuti di un sito web, assicurando che siano coerenti, di alta qualità e utili per il pubblico target (SEO data-driven, Intelligenza Artificiale).",
	},
	{
		id: "item-5",
		question: "Cosa sono i CMS Headless?",
		answer: "I CMS Headless, o Content Management Systems senza testa, sono sistemi di gestione dei contenuti che conservano, organizzano e distribuiscono contenuti senza un front-end associato. In altre parole, si occupano solo della parte “back-end” della gestione dei contenuti. Questo approccio offre una grande flessibilità, in quanto permette di utilizzare qualsiasi tecnologia front-end desiderata per presentare i contenuti. I contenuti vengono esposti attraverso API, generalmente RESTful o GraphQL, che possono essere consumate da qualsiasi client front-end. Alcuni esempi di CMS Headless includono Sanity e Contentful, che offrono potenti funzionalità di gestione dei contenuti, insieme a API flessibili e facili da usare. Questi strumenti permettono di creare esperienze digitali personalizzate su qualsiasi piattaforma o dispositivo, rendendo i CMS Headless una scelta popolare per molti progetti di sviluppo web moderni. ",
	},
	{
		id: "item-6",
		question: "Cosè il SEO Data Driven?",
		answer: "Il SEO Data Driven è un approccio alla Search Engine Optimization (SEO) che si basa sull’analisi dei dati per prendere decisioni informate. Questo può includere l’uso di dati su parole chiave, traffico del sito web, comportamento degli utenti, tendenze di ricerca e molto altro. L’obiettivo del SEO Data Driven è migliorare la visibilità di un sito web sui motori di ricerca, aumentare il traffico organico e migliorare l’engagement dell’utente. Questo viene fatto ottimizzando i contenuti del sito web, la struttura del sito, i meta tag, i link interni ed esterni, e altri elementi SEO in base ai dati raccolti. L’uso dei dati permette di capire meglio cosa funziona e cosa no, e di fare modifiche basate su prove concrete piuttosto che su supposizioni. Inoltre, con l’avvento dell’intelligenza artificiale e del machine learning, il SEO Data Driven può diventare ancora più potente, in quanto queste tecnologie possono analizzare grandi quantità di dati più rapidamente e accuratamente di quanto possa fare un essere umano. ",
	},
	{
		id: "item-7",
		question: "Cosè Vercel, come funziona?",
		answer: "Vercel è una piattaforma cloud per siti statici e funzioni serverless. Con Vercel, puoi collegare il tuo repository GitHub e la piattaforma si occuperà automaticamente di distribuire le tue modifiche ogni volta che fai un push su GitHub. Offre un CDN globale, domini personalizzati e HTTPS automatico. Vercel è particolarmente utile per gli sviluppatori front-end, poiché astrae il back-end e semplifica la creazione di siti e applicazioni con un framework JavaScript.  Inoltre, Vercel offre funzionalità come anteprime di distribuzione, funzioni come servizio, analisi e altro.",
	},
	{
		id: "item-8",
		question: "Cosa sono le PWA?",
		answer: "Le Progressive Web Applications (PWA) sono applicazioni web che utilizzano le più recenti tecnologie web per offrire un’esperienza utente simile a quella di un’applicazione nativa. Le PWA sono accessibili attraverso un browser web, ma possono anche essere installate sul dispositivo dell’utente, proprio come un’applicazione nativa.Le PWA offrono numerose funzionalità avanzate, tra cui la possibilità di funzionare offline, ricevere notifiche push e accedere ai sensori del dispositivo. Questo le rende una scelta popolare per le aziende che desiderano offrire un’esperienza utente di alta qualità senza la necessità di sviluppare e mantenere applicazioni native separate per diverse piattaforme. Nel nostro team, realizziamo PWA utilizzando moderni framework JavaScript come React, Vue.js e Astro.build. Questi strumenti ci permettono di creare applicazioni web ricche e reattive che offrono un’esperienza utente eccellente, sia online che offline.  ",
	},
];

export default function FaqSection() {
	return (
		<Accordion type="single" collapsible className="w-full">
			{faqData.map((faqItem) => (
				<AccordionItem key={faqItem.id} value={faqItem.id}>
					<AccordionTrigger>{faqItem.question}</AccordionTrigger>
					<AccordionContent>{faqItem.answer}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}
