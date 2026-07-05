import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders'; 

const home = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/home" }),
});

export const collections = { home };