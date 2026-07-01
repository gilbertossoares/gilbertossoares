import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),

	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),

			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),

			heroImage: z.optional(image()),

			tags: z.array(z.string()).default([]),

			lang: z.enum(['en', 'pt-BR']).default('en'),

			draft: z.boolean().default(false),

			featured: z.boolean().default(false),

			canonicalURL: z.string().url().optional(),
		}),
});

export const collections = { blog };