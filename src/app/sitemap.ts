// TODO: integrate all sitemaps

import { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/sign-in`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/sign-up`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/privacy`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/terms`,
    },
  ];
}
