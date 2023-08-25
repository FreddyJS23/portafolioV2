import {z} from 'astro:content'

export const skillSchema=z.object({
    tegnologias: z.array(
      z.object({skill: z.string(), image: z.object({ alt: z.string(), src: z.string() })}))
  })