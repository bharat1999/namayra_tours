const hostname = "https://namayratourism.com/";

import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

import { writeFileSync } from "fs";
// Create a stream to write to
const stream = new SitemapStream({ hostname: hostname });

const links = [
  { url: "/", changefreq: "daily", priority: 1 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/category/1", changefreq: "monthly", priority: 0.8 },
  { url: "/category/2", changefreq: "monthly", priority: 0.8 },
  { url: "/category/3", changefreq: "monthly", priority: 0.8 },
  { url: "/category/4", changefreq: "monthly", priority: 0.8 },
  { url: "/category/5", changefreq: "monthly", priority: 0.8 },
  { url: "/category/6", changefreq: "monthly", priority: 0.8 },
  { url: "/category/7", changefreq: "monthly", priority: 0.8 },
  { url: "/category/1", changefreq: "monthly", priority: 0.8 },
  { url: "/category/2", changefreq: "monthly", priority: 0.8 },
  { url: "/category/3", changefreq: "monthly", priority: 0.8 },
  { url: "/category/4", changefreq: "monthly", priority: 0.8 },
  { url: "/category/5", changefreq: "monthly", priority: 0.8 },
  { url: "/category/6", changefreq: "monthly", priority: 0.8 },
  { url: "/category/7", changefreq: "monthly", priority: 0.8 },
  { url: "/category/8", changefreq: "monthly", priority: 0.8 },
  { url: "/category/9", changefreq: "monthly", priority: 0.8 },
  { url: "/category/10", changefreq: "monthly", priority: 0.8 },
  { url: "/category/11", changefreq: "monthly", priority: 0.8 },
  { url: "/category/12", changefreq: "monthly", priority: 0.8 },
  { url: "/category/13", changefreq: "monthly", priority: 0.8 },
  { url: "/category/14", changefreq: "monthly", priority: 0.8 },
  { url: "/category/15", changefreq: "monthly", priority: 0.8 },
  { url: "/category/16", changefreq: "monthly", priority: 0.8 },
  { url: "/category/17", changefreq: "monthly", priority: 0.8 },
  { url: "/category/18", changefreq: "monthly", priority: 0.8 },
  { url: "/category/19", changefreq: "monthly", priority: 0.8 },
  { url: "/category/20", changefreq: "monthly", priority: 0.8 },
  { url: "/category/21", changefreq: "monthly", priority: 0.8 },
  { url: "/category/22", changefreq: "monthly", priority: 0.8 },
  { url: "/category/23", changefreq: "monthly", priority: 0.8 },
  { url: "/category/24", changefreq: "monthly", priority: 0.8 },
  { url: "/category/25", changefreq: "monthly", priority: 0.8 },
  { url: "/category/26", changefreq: "monthly", priority: 0.8 },
  { url: "/category/27", changefreq: "monthly", priority: 0.8 },
  { url: "/category/28", changefreq: "monthly", priority: 0.8 },
  { url: "/category/29", changefreq: "monthly", priority: 0.8 },
  { url: "/category/30", changefreq: "monthly", priority: 0.8 },
  { url: "/category/31", changefreq: "monthly", priority: 0.8 },
  { url: "/category/32", changefreq: "monthly", priority: 0.8 },
  { url: "/category/33", changefreq: "monthly", priority: 0.8 },
  { url: "/category/34", changefreq: "monthly", priority: 0.8 },
  { url: "/category/35", changefreq: "monthly", priority: 0.8 },
  { url: "/category/36", changefreq: "monthly", priority: 0.8 },
  { url: "/category/37", changefreq: "monthly", priority: 0.8 },
  { url: "/category/38", changefreq: "monthly", priority: 0.8 },
  { url: "/category/39", changefreq: "monthly", priority: 0.8 },
  { url: "/category/40", changefreq: "monthly", priority: 0.8 },
  { url: "/category/41", changefreq: "monthly", priority: 0.8 },
  { url: "/category/42", changefreq: "monthly", priority: 0.8 },
];

// Return a promise that resolves with your XML string
async function makesitemap() {
  return streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
    data.toString()
  );
}

writeFileSync("./public/sitemap.xml", await makesitemap());
