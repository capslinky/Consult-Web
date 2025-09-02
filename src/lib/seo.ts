export function ensureTrailingSlash(url: string): string {
  if (!url) return '/';
  return url.endsWith('/') ? url : `${url}/`;
}

export function canonical(path: string = '/'): string {
  const base = ensureTrailingSlash(process.env.NEXT_PUBLIC_SITE_URL || 'https://azfamilylaw.wiki');
  // normalize path to have leading and trailing slash
  let p = path.startsWith('/') ? path : `/${path}`;
  p = p.endsWith('/') ? p : `${p}/`;
  // avoid double slashes when joining
  return base.replace(/\/$/, '') + p;
}

