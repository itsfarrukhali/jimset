// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://jimset.com";

  return [
    { url: base, priority: 1.0, changeFrequency: "weekly" },
    { url: `${base}/about`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/about/founder`, priority: 0.6, changeFrequency: "yearly" },
    {
      url: `${base}/about/former-executive-director`,
      priority: 0.6,
      changeFrequency: "yearly",
    },
    {
      url: `${base}/about/in-memory`,
      priority: 0.5,
      changeFrequency: "yearly",
    },
    {
      url: `${base}/about/management`,
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/about/organogram`,
      priority: 0.5,
      changeFrequency: "yearly",
    },
    {
      url: `${base}/about/vision-mission`,
      priority: 0.7,
      changeFrequency: "yearly",
    },
    {
      url: `${base}/about/affiliation`,
      priority: 0.7,
      changeFrequency: "yearly",
    },
    { url: `${base}/programs`, priority: 0.9, changeFrequency: "monthly" },
    {
      url: `${base}/programs/electrical`,
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/programs/mechanical`,
      priority: 0.9,
      changeFrequency: "monthly",
    },
    { url: `${base}/admissions`, priority: 0.9, changeFrequency: "monthly" },
    {
      url: `${base}/admissions/eligibility`,
      priority: 0.8,
      changeFrequency: "yearly",
    },
    {
      url: `${base}/admissions/fee-structure`,
      priority: 0.8,
      changeFrequency: "yearly",
    },
    {
      url: `${base}/admissions/process`,
      priority: 0.8,
      changeFrequency: "yearly",
    },
    {
      url: `${base}/admissions/apply`,
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/admissions/academic-calendar`,
      priority: 0.6,
      changeFrequency: "yearly",
    },
    {
      url: `${base}/admissions/regulations`,
      priority: 0.6,
      changeFrequency: "yearly",
    },
    {
      url: `${base}/admissions/scholarships`,
      priority: 0.7,
      changeFrequency: "monthly",
    },
    { url: `${base}/contact`, priority: 0.7, changeFrequency: "yearly" },
    { url: `${base}/news-events`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${base}/careers`, priority: 0.7, changeFrequency: "monthly" },
  ];
}
