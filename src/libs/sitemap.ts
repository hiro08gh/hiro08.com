import { meta } from '@/src/libs/meta';
import { PostType } from '@/src/types/post';

export const generateSiteMap = (posts: PostType[]) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>${meta.site_url}</loc>
     </url>
     ${posts
       .map(({ id }) => {
         return `
       <url>
           <loc>${`${meta.site_url}/blogs/${id}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
};