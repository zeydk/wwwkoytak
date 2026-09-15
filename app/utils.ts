export function createExcerpt({ text, length = 150 }: { text: string; length?: number }): string {
  return text.split('', length).concat(['...']).join('');
}

export async function getContent({ context, prefix }): Promise<Array<Record<string, unknown>>> {
  const slugs: string[] = [];
  const content: Array<Record<string, unknown>> = [];

  // Get slugs
  for (let index = 0; index < context.keys().length; index += 1) {
    const slug = context.keys()[index].replace(/^.\/|.json$/g, '');
    slugs.push(slug);
  }

  // Get content
  for (let index = 0; index < slugs.length; index += 1) {
    const slug = slugs[index];

    const entry = require(`@/content/${prefix}/${slug}.json`);

    // Add the slug to the post object
    Object.assign(entry, { slug });

    content.push({
      slug,
      title: entry.title,
      title_tr: entry.title_tr,
      order: entry.order,
      ...(prefix === 'blog' && {
        excerpt: createExcerpt({ text: entry.content }),
        publishedAt: entry.publishedAt,
      }),
      featuredImage: entry.featuredImage,
    });
  }

  return content;
}
