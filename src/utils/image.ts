// Every photo in public/images has a small "-640" copy (made when the photo
// is added). The browser picks the smaller one for phones and small cards.
export function srcSetFor(src: string) {
  if (!src.startsWith('/images/') || !src.endsWith('.webp')) return undefined;
  return `${src.replace(/\.webp$/, '-640.webp')} 640w, ${src} 1400w`;
}
