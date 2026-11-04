// Project screenshots.
// Drop .png, .jpg or .webp files into src/assets/projects/<project>/ and they show up
// automatically on the project card and in the gallery of its detail page.
// Files are sorted by name, so prefix them with 01, 02, 03 to choose the order.

const files = import.meta.glob('./*/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

export type ProjectSlug = 'finea' | 'escale' | 'techthetime' | 'neura' | 'foodex';

export const getProjectImages = (slug: ProjectSlug): string[] =>
  Object.keys(files)
    .filter((path) => path.startsWith(`./${slug}/`))
    .sort()
    .map((path) => files[path]);
