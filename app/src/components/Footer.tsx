const footerColumns = [
  {
    title: 'Company',
    links: ['Home', 'Studio', 'Service', 'Blog'],
  },
  {
    title: 'Terms & Policies',
    links: ['Privacy Policy', 'Terms & Conditions', 'Explore', 'Accessibility'],
  },
  {
    title: 'Follow Us',
    links: ['Instagram', 'LinkedIn', 'Youtube', 'Twitter'],
  },
  {
    title: 'Contact Us',
    links: [
      '1498 W Fulton Ste, STE\n20 Chicago, IL 63687',
      '(123) 456789000',
      'Info@elementum.com',
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#E0E0E0]">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {footerColumns.map((column, colIndex) => (
            <div key={colIndex}>
              <h4 className="text-[#1A1A1A] font-medium text-sm mb-4">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-[#888888] text-xs md:text-sm hover:text-[#1A1A1A] transition-colors duration-200 whitespace-pre-line leading-relaxed"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#F0F0F0] text-center">
          <p className="text-[#888888] text-xs">
            ©2023 Elementum. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
