import type { MetadataRoute } from 'next';

const baseUrl = 'https://dogwheel.ru';

const pages = ['', 'about', 'products', 'faq', 'contact', 'sizing'];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return pages.map(path => ({
    url: `${baseUrl}/${path ? `${path}/` : ''}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.8
  }));
}
