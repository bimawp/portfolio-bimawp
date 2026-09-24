import SectionLink from './SectionLink';


const footerLinks = [
  {
    label: 'Tentang',
    section: 'about'
  },
  {
    label: 'Proyek',
    section: 'projects'
  },
  {
    label: 'Kontak',
    section: 'contact'
  },
  {
    label: 'Blog',
    section: 'blog'
  }
];


export default function Footer() {
  return (

    <footer
      className="
        bg-gray-800
        text-gray-300
        py-6
        border-t
        mt-10
      "
      role="contentinfo"
    >

      <div
        className="
          max-w-6xl
          mx-auto
          px-4
          text-center
        "
      >

        <nav
          aria-label="Navigasi footer"
          className="
            flex
            flex-wrap
            justify-center
            gap-x-8
            gap-y-3
            mb-4
          "
        >

          {footerLinks.map(({
            label,
            section
          }) => (

            <SectionLink
              key={section}
              section={section}
              aria-label={
                `Navigasi ke bagian ${label}`
              }
              className="
                text-gray-300
                hover:text-green-400
                transition-colors
              "
            >
              {label}
            </SectionLink>

          ))}

        </nav>


        <p className="text-sm">
          &copy; {new Date().getFullYear()}{' '}
          Bima Wiryadi Praja.
          All rights reserved.
        </p>

      </div>

    </footer>

  );
}