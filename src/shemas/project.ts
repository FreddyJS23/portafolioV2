import { z } from 'astro:content'

export const projectSchema = z.object({
  proyectos: z.array(
    z.object({
      proyecto: z.string(),
      descripcion: z.string(),
      repositorio: z.string(),
      web: z.string(),
      imagen: z.object({ alt: z.string(), src: z.string() }),
      tegnologias: z.array(z.object({ alt: z.string(), src: z.string() })),
    })
  ),
});