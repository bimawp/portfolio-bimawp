
import { Helmet } from "react-helmet";

// Identitas utama website
const SITE_URL = "https://portfolio-bimawp.vercel.app";

const SITE_NAME = "Bima Wiryadi Praja";

const DEFAULT_TITLE =
  "Bima Wiryadi Praja | Frontend & Web Developer";

const DEFAULT_DESCRIPTION =
  "Portofolio Bima Wiryadi Praja, pengembang web " +
  "dengan pengalaman React, JavaScript, WebGIS, " +
  "dan pengembangan sistem informasi.";

const DEFAULT_IMAGE = "/profil1.webp";

// Mengubah URL relatif menjadi absolut
// dan menyeragamkan domain website.
function normalizeUrl(value, removeParameters = false) {
  try {
    const url = new URL(value, `${SITE_URL}/`);

    if (url.hostname === "portfolio-bimawp.vercel.app") {
      url.hostname = "portfolio-bimawp.vercel.app";
    }

    if (removeParameters) {
      url.hash = "";
      url.search = "";

      if (url.pathname !== "/") {
        url.pathname = url.pathname.replace(/\/+$/, "");
      }
    }

    return url.toString();
  } catch {
    return `${SITE_URL}/`;
  }
}

export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  url = "/",
  type = "website",
  robots = "index, follow"
}) {
  const canonicalUrl = normalizeUrl(url, true);

  const imageUrl = normalizeUrl(image);

  return (
    <Helmet>
      {/* Identitas halaman */}
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="author"
        content={SITE_NAME}
      />

      <meta
        name="robots"
        content={robots}
      />

      {/* Canonical URL */}
      <link
        rel="canonical"
        href={canonicalUrl}
      />

      {/* Open Graph */}
      <meta
        property="og:type"
        content={type}
      />

      <meta
        property="og:site_name"
        content={SITE_NAME}
      />

      <meta
        property="og:locale"
        content="id_ID"
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={canonicalUrl}
      />

      <meta
        property="og:image"
        content={imageUrl}
      />

      {/* Twitter / X */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={imageUrl}
      />
    </Helmet>
  );
}