---
title: "L'importanza dei Core Web Vitals nei nostri approcci allo sviluppo web"
description: "I Core Web Vitals sono diventati un elemento fondamentale per la SEO. Sono un insieme di tre metriche che misurano l'esperienza dell'utente su un sito web. Queste metriche sono:"
pubDate: 'Dec 19 2023'
coverImage: '/core-web-vitals-approcci-allo-sviluppo-web.webp'
category: 'esperienza utente'
---

1. **Largest Contentful Paint (LCP)**: misura le prestazioni di caricamento. Per offrire una buona esperienza utente, l'LCP deve verificarsi entro i primi 2,5 secondi dall'inizio del caricamento della pagina.
2. **First Input Delay (FID)**: misura l'interattività. Per offrire una buona esperienza utente, le pagine devono avere un FID inferiore a 100 millisecondi.
3. **Cumulative Layout Shift (CLS)**: misura la stabilità visiva. Per offrire una buona esperienza utente, le pagine devono mantenere un CLS inferiore a 0,1.

## Approccio Classico: HTML, CSS, JavaScript

Nel nostro approccio classico allo sviluppo web, utilizziamo HTML, CSS e JavaScript, le tre tecnologie fondamentali per la creazione di pagine web[^4^][7]. Queste tecnologie ci permettono di costruire siti web robusti e interattivi.

Per ottimizzare i Core Web Vitals nel nostro approccio classico, seguiamo diverse tecniche:

1. **Ottimizzazione delle immagini**: Riduciamo le dimensioni delle immagini e utilizziamo formati di immagine moderni per migliorare le prestazioni di caricamento (LCP).
2. **Riduzione dei risorse che bloccano il rendering**: Rimuoviamo o ritardiamo il caricamento di JavaScript e CSS che bloccano il rendering per migliorare l'interattività (FID).
3. **Utilizzo di layout stabili**: Evitiamo gli spostamenti di layout inaspettati utilizzando dimensioni fisse per gli elementi multimediali e prevenendo gli inserimenti di contenuto in cima alla pagina.

## Approccio Moderno: Jamstack, PWA

Nel nostro approccio moderno allo sviluppo web, utilizziamo la Jamstack e le Progressive Web Apps (PWA). Queste tecnologie ci permettono di costruire siti web altamente performanti e affidabili.

Per ottimizzare i Core Web Vitals nel nostro approccio moderno, seguiamo queste tecniche:

1. **Pre-rendering e generazione statica**: Utilizziamo la generazione statica per pre-renderizzare le pagine, migliorando così le prestazioni di caricamento (LCP).
2. **Service Workers**: Utilizziamo i service workers per mettere in cache le risorse e migliorare l'interattività (FID).
3. **Layout stabili**: Come nel nostro approccio classico, evitiamo gli spostamenti di layout inaspettati per migliorare la stabilità visiva (CLS).

In conclusione, i Core Web Vitals sono un aspetto cruciale dell'esperienza dell'utente e della SEO. Che si tratti del nostro approccio classico o moderno allo sviluppo web, ci impegniamo a ottimizzare questi vitals per garantire che i nostri siti web offrano un'esperienza utente di alta qualità.
