
import { defineCollection } from 'astro:content';
import { skillSchema,projectSchema } from '../shemas';


const skillCollection = defineCollection({
  type: 'data',
  schema:skillSchema
});

const projectCollection = defineCollection({
  type: 'data',
  schema:projectSchema

})

// 3. Exportar un único objeto `collections` para registrar tu(s) colección(es)
export const collections = {
  'skills': skillCollection,
  'projects': projectCollection,
};