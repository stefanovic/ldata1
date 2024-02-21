---
title: 'Programmazione SVG e le sue tendenze'
description: 'La Programmazione SVG (Scalable Vector Graphics) è un linguaggio di markup XML per la descrizione di grafica bidimensionale. SVG è un potente strumento per creare grafica vettoriale su web che può essere manipolata tramite JavaScript.'
pubDate: 'Apr 03 2023'
coverImage: '/programmazione-svg-tendenze.webp'
category: 'esperienza utente'
---


### GSAP e la manipolazione SVG
GSAP (GreenSock Animation Platform) è una libreria JavaScript per creare animazioni ad alte prestazioni. GSAP è particolarmente utile quando si tratta di animare elementi SVG. Permette di animare qualsiasi proprietà di qualsiasi oggetto, non solo le proprietà CSS. Ciò lo rende estremamente flessibile e potente nel manipolare SVG.

### JSON e la comunicazione con i back-end
JSON (JavaScript Object Notation) è un formato di dati leggero per lo scambio di dati. È facile da leggere e scrivere per gli umani e facile da analizzare e generare per le macchine. JSON è diventato il formato di dati dominante per la comunicazione tra client e server in applicazioni web. In combinazione con SVG, JSON può essere utilizzato per inviare e ricevere dati grafici da un back-end.

### Tendenze Web e SVG
Nel contesto delle tendenze web attuali, la programmazione SVG sta guadagnando sempre più popolarità. Le animazioni SVG, in particolare, stanno diventando un elemento chiave del design web moderno. Con l’ascesa del design responsive, SVG offre un modo per avere grafica vettoriale che si scala perfettamente su tutti i dispositivi.

Inoltre, con l’adozione di librerie come GSAP per l’animazione e l’uso di JSON per la comunicazione dei dati, SVG si integra perfettamente nell’ecosistema web moderno.

In conclusione, la programmazione SVG, con l’aiuto di strumenti come GSAP e JSON, sta diventando un elemento fondamentale nello sviluppo web. Con la sua crescente popolarità, ci si può aspettare che la programmazione SVG continui a svolgere un ruolo importante nelle tendenze web future.

## Images

#### Syntax

```markdown
![Alt text](./full/or/relative/path/of/image)
```

#### Output

![blog placeholder](/blog-placeholder-about.jpg)

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

### Blockquote without attribution

#### Syntax

```markdown
> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use _Markdown syntax_ within a blockquote.
```

#### Output

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use _Markdown syntax_ within a blockquote.

### Blockquote with attribution

#### Syntax

```markdown
> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>
```

#### Output

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tables

#### Syntax

```markdown
| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |
```

#### Output

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |

## Code Blocks

#### Syntax

we can use 3 backticks ``` in new line and write snippet and close with 3 backticks on new line and to highlight language specific syntac, write one word of language name after first 3 backticks, for eg. html, javascript, css, markdown, typescript, txt, bash

````markdown
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```
````

Output

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

## List Types

### Ordered List

#### Syntax

```markdown
1. First item
2. Second item
3. Third item
```

#### Output

1. First item
2. Second item
3. Third item

### Unordered List

#### Syntax

```markdown
- List item
- Another item
- And another item
```

#### Output

- List item
- Another item
- And another item

### Nested list

#### Syntax

```markdown
- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese
```

#### Output

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

## Other Elements — abbr, sub, sup, kbd, mark

#### Syntax

```markdown
<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
```

#### Output

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
