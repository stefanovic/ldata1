import { getCollection } from "astro:content";

export async function getCategories() {
  const posts = await getCollection("blog");

  const categories = [
    ...new Set([].concat.apply(posts.map((post) => post.data.category))),
  ];

  return categories;
}

export async function getPosts() {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return posts;
}

export async function getPostsByCategory(category: string) {
  const posts = (await getCollection("blog"))
    .filter((post) => post.data.category === category)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return posts;
}

export async function getGuides() {
  const guides = (await getCollection("guides"))
    .filter((guide) => guide.data.published)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return guides;
}


export async function getCategoriesServizi() {
  const posts = await getCollection("servizi");

  const categories = [
    ...new Set([].concat.apply(posts.map((post) => post.data.category))),
  ];

  return categories;
}

export async function getServizi() {
  const posts = (await getCollection("servizi")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return posts;
}

export async function getServiziByCategory(category: string) {
  const posts = (await getCollection("servizi"))
    .filter((post) => post.data.category === category)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return posts;
}



export async function getCategoriesShowcase() {
  const posts = await getCollection("showcase");

  const categories = [
    ...new Set([].concat.apply(posts.map((post) => post.data.category))),
  ];

  return categories;
}

export async function getShowcase() {
  const posts = (await getCollection("showcase")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return posts;
}

export async function getShowcaseByCategory(category: string) {
  const posts = (await getCollection("showcase"))
    .filter((post) => post.data.category === category)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return posts;
}





export async function getCategoriesHighlights() {
  const posts = await getCollection("highlights");

  const categories = [
    ...new Set([].concat.apply(posts.map((post) => post.data.category))),
  ];

  return categories;
}

export async function getHighlights() {
  const posts = (await getCollection("highlights")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return posts;
}

export async function getHighlightsByCategory(category: string) {
  const posts = (await getCollection("highlights"))
    .filter((post) => post.data.category === category)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return posts;
}


