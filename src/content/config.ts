import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
    type: 'content', 
    schema: z.object({
      title: z.string(),
      image: z.string(),
      description: z.string(),
      stack: z.array(z.string()),
      github: z.string(),
      demo: z.string(), 
    }),
  });

export const collections = {
  'projects': projectsCollection,
};