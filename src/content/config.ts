import { defineCollection, z } from 'astro:content';

const homeCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    items: z.array(z.object({
      name: z.string(),
      time: z.string(),
      price: z.string(),
      description: z.string(),
      features: z.array(z.string()),
    })),
  }),
});

export const collections = {
  'home': homeCollection,
};