/** Official MrBoom9 site (SEO copy, canonical references). */
export const SITE_ORIGIN = "https://mrboom9.com" as const;

/** All outbound CTAs (register, promos, social, partners) use this campaign URL. */
export const LANDING_PAGE_URL = "https://mrboom9.com/RFLANDINGPAGEE" as const;

/** Returns the campaign landing URL for every CTA path. */
export function siteUrl(_path?: string): string {
  return LANDING_PAGE_URL;
}
