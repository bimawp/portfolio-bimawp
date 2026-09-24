// Daftar ID section yang tersedia di halaman utama.
export const HOME_SECTION_IDS = new Set([
  'hero',
  'about',
  'education',
  'blog',
  'projects',
  'skills',
  'contact',
]);

// Menggulir halaman menuju section yang dipilih.
export function scrollToSection(sectionId) {
  if (!HOME_SECTION_IDS.has(sectionId)) {
    return false;
  }

  const section = document.getElementById(sectionId);

  if (!section) {
    return false;
  }

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  section.scrollIntoView({
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
    block: 'start',
  });

  return true;
}

// Mengambil ID section dari URL.
export function getHomeSectionId(hash, search) {
  let sectionId = '';

  if (hash) {
    try {
      sectionId = decodeURIComponent(hash.slice(1));
    } catch {
      return null;
    }
  } else {
    // Kompatibilitas dengan format URL lama.
    sectionId =
      new URLSearchParams(search).get('scrollTo') || '';
  }

  return HOME_SECTION_IDS.has(sectionId)
    ? sectionId
    : null;
}