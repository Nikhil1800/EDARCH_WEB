// Get BASE_URL with fallback for GitHub Pages
export const BASE_URL = (import.meta.env.BASE_URL || "/EDARCH_WEB/").endsWith("/")
  ? (import.meta.env.BASE_URL || "/EDARCH_WEB/")
  : (import.meta.env.BASE_URL || "/EDARCH_WEB/") + "/";
