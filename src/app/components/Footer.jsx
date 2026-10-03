import Link from "next/link";
import Image from "next/image";

const footerNav = [
  {
    title: "About Us",
    defaultOpen: true,
    links: [
      { label: "Our Company", href: "" },
      { label: "Our History", href: "" },
      { label: "Founder-Chairman", href: "" },
      { label: "Chairman - Managing Director", href: "" },
      { label: "Products & Brands", href: "" },
      { label: "Corporate Social Responsibility", href: "" },
      { label: "Milestones", href: "3" },
      { label: "Our Impact", href: "" },
      { label: "Manufacturing Locations", href: "" },
    ],
  },
  {
    title: "Sustainability",
    links: [
      { label: "Overview", href: "" },
      { label: "Sustainability", href: "" },
      { label: "Decarbonisation", href: "" },
      { label: "Net Zero Carbon", href: "" },
      { label: "Health, Safety & Environment", href: "" },
    ],
  },
  {
    title: "Investors",
    links: [
      { label: "Financial Reporting", href: "" },
      { label: "Shares", href: "" },
      { label: "Shareholders' Information", href: "" },
      { label: "Resource Centre", href: "" },
      { label: "Corporate Governance", href: "" },
      { label: "Policies", href: "" },
    ],
  },
  {
    title: "News & Media",
    links: [
      { label: "News", href: "" },
      { label: "Press Releases", href: "" },
      { label: "Events", href: "" },
      { label: "Resource Center", href: "" },
      { label: "Media Kit", href: "" },
    ],
  },
  {
    title: "Careers",
    links: [
      { label: "Overview", href: "" },
      { label: "Early Talent", href: "" },
      { label: "Internship", href: "" },
    ],
    extraLinks: [
      { label: "Community", href: "" },
      { label: "Contact Us", href: "" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(145deg, #FFF 50.53%, #D7B959 131.06%)",
      }}
      className="w-full text-black select-none pt-12 lg:pt-16 pb-[60px]"
    >
      <div className="w-full max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-6 min-[1368px]:px-[60px]">
        <div className="flex flex-col lg:flex-row items-start pb-12 lg:pb-16 gap-8 xl:gap-10">
          <Link href="/" className="flex items-center shrink-0">
            <div className="w-[165px] h-[27px] min-[992px]:w-[210px] xl:w-[264px] min-[992px]:h-[35px] xl:h-[39px] relative flex items-center">
              <Image
                src="/Desktop Logo.svg"
                alt="Coca-Cola Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          <div className="hidden lg:grid grid-cols-5 gap-6 xl:gap-8 flex-1 w-full">
            {footerNav.map((col) => (
              <div key={col.title} className="flex flex-col min-w-0">
                <h4 className="font-heading font-semibold text-[14px] leading-[140%] text-black mb-[20px]">
                  {col.title}
                </h4>

                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[13px] xl:text-[14px] leading-[160%] text-[#5C5C5C] hover:text-black transition-colors block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}

                  {col.extraLinks?.map((extra) => (
                    <li key={extra.label} className="pt-2">
                      <Link
                        href={extra.href}
                        className="font-heading font-semibold text-[14px] leading-[140%] text-black hover:opacity-75 transition-opacity block"
                      >
                        {extra.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="w-full lg:hidden flex flex-col divide-y divide-black/5">
            {footerNav.map((col) => (
              <details
                key={col.title}
                open={col.defaultOpen}
                className="group py-3.5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="w-full flex items-center justify-between py-1 text-left font-heading font-semibold text-[14px] leading-[140%] text-black cursor-pointer list-none select-none">
                  <span>{col.title}</span>
                  <span className="text-xl leading-none text-black group-open:hidden">
                    +
                  </span>
                  <span className="text-xl leading-none text-black hidden group-open:inline">
                    −
                  </span>
                </summary>

                <ul className="flex flex-col gap-2.5 pt-3 pb-2 pl-1">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[14px] leading-[160%] text-[#5C5C5C] hover:text-black block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}

            <div className="py-4">
              <Link
                href="#community"
                className="font-heading font-semibold text-[14px] leading-[140%] text-black block py-1"
              >
                Community
              </Link>
            </div>
            <div className="py-4">
              <Link
                href="#contact"
                className="font-heading font-semibold text-[14px] leading-[140%] text-black block py-1"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-black opacity-5" />

        <div className="py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-6 text-[12px] leading-[140%] text-black font-normal">
            <Link
              href="#privacy"
              className="hover:opacity-70 transition-opacity"
            >
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:opacity-70 transition-opacity">
              Terms And Conditions
            </Link>
            <Link
              href="#disclaimer"
              className="hover:opacity-70 transition-opacity"
            >
              Disclaimer
            </Link>
          </div>

          <div className="flex items-center gap-5 text-black">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:opacity-70 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
              >
                <path
                  d="M19.3333 8.45849C19.3333 7.79115 19.8743 7.25016 20.5417 7.25016C21.209 7.25016 21.75 7.79115 21.75 8.45849C21.75 9.12583 21.209 9.66682 20.5417 9.66682C19.8743 9.66682 19.3333 9.12583 19.3333 8.45849Z"
                  fill="#343434"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.5 8.76057C11.3301 8.76057 8.76041 11.3303 8.76041 14.5002C8.76041 17.67 11.3301 20.2397 14.5 20.2397C17.6699 20.2397 20.2396 17.67 20.2396 14.5002C20.2396 11.3303 17.6699 8.76057 14.5 8.76057ZM10.5729 14.5002C10.5729 12.3313 12.3311 10.5731 14.5 10.5731C16.6689 10.5731 18.4271 12.3313 18.4271 14.5002C18.4271 16.669 16.6689 18.4272 14.5 18.4272C12.3311 18.4272 10.5729 16.669 10.5729 14.5002Z"
                  fill="#343434"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.8537 3.42338C16.6649 2.95523 12.3351 2.95523 8.1463 3.42338C5.71507 3.69511 3.75233 5.61033 3.4665 8.05422C2.9656 12.3369 2.9656 16.6634 3.4665 20.9461C3.75233 23.39 5.71507 25.3052 8.1463 25.5769C12.3351 26.0451 16.6649 26.0451 20.8537 25.5769C23.285 25.3052 25.2477 23.39 25.5335 20.9461C26.0344 16.6634 26.0344 12.3369 25.5335 8.05422C25.2477 5.61033 23.285 3.69511 20.8537 3.42338ZM8.34762 5.22467C12.4026 4.77146 16.5974 4.77146 20.6524 5.22467C22.2596 5.4043 23.5471 6.67258 23.7333 8.26477C24.2178 12.4076 24.2178 16.5927 23.7333 20.7355C23.5471 22.3277 22.2596 23.596 20.6524 23.7756C16.5974 24.2288 12.4026 24.2288 8.34762 23.7756C6.74041 23.596 5.45295 22.3277 5.26672 20.7355C4.78219 16.5927 4.78219 12.4076 5.26672 8.26477C5.45295 6.67258 6.74041 5.4043 8.34762 5.22467Z"
                  fill="#343434"
                />
              </svg>
            </Link>

            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:opacity-70 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.5498 10.0982C12.2698 9.93022 11.9211 9.92582 11.637 10.0867C11.3529 10.2475 11.1773 10.5488 11.1773 10.8753V18.1253C11.1773 18.4518 11.3529 18.7531 11.637 18.9139C11.9211 19.0748 12.2698 19.0704 12.5498 18.9024L18.5914 15.2774C18.8644 15.1136 19.0314 14.8186 19.0314 14.5003C19.0314 14.182 18.8644 13.887 18.5914 13.7232L12.5498 10.0982ZM16.3638 14.5003L12.9898 16.5247V12.4759L16.3638 14.5003Z"
                  fill="#343434"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.5789 5.60852C16.5326 5.29195 12.4678 5.29195 8.42153 5.60852L5.71401 5.82034C4.06758 5.94915 2.72067 7.1831 2.44851 8.81199C1.81925 12.5781 1.81925 16.4225 2.44851 20.1886C2.72067 21.8175 4.06758 23.0515 5.71401 23.1803L8.42153 23.3921C12.4678 23.7086 16.5326 23.7086 20.5789 23.3921L23.2864 23.1803C24.9329 23.0515 26.2798 21.8175 26.5519 20.1886C27.1812 16.4225 27.1812 12.5781 26.5519 8.81199C26.2798 7.1831 24.9329 5.94915 23.2864 5.82034L20.5789 5.60852ZM8.5629 7.41549C12.5151 7.10629 16.4854 7.10629 20.4376 7.41549L23.1451 7.62732C23.9614 7.69119 24.6293 8.30303 24.7642 9.11069C25.3604 12.679 25.3604 16.3216 24.7642 19.8899C24.6293 20.6976 23.9614 21.3094 23.1451 21.3733L20.4376 21.5851C16.4854 21.8943 12.5151 21.8943 8.5629 21.5851L5.85538 21.3733C5.03902 21.3094 4.37117 20.6976 4.23622 19.8899C3.64001 16.3216 3.64001 12.679 4.23622 9.11069C4.37117 8.30303 5.03902 7.69119 5.85538 7.62732L8.5629 7.41549Z"
                  fill="#343434"
                />
              </svg>
            </Link>

            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:opacity-70 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.04167 1.51025C4.20647 1.51025 2.71875 2.99797 2.71875 4.83317C2.71875 6.66837 4.20647 8.15609 6.04167 8.15609C7.87686 8.15609 9.36458 6.66837 9.36458 4.83317C9.36458 2.99797 7.87686 1.51025 6.04167 1.51025ZM4.53125 4.83317C4.53125 3.99899 5.20749 3.32275 6.04167 3.32275C6.87585 3.32275 7.55208 3.99899 7.55208 4.83317C7.55208 5.66735 6.87585 6.34359 6.04167 6.34359C5.20749 6.34359 4.53125 5.66735 4.53125 4.83317Z"
                  fill="#343434"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.71875 9.6665C2.71875 9.166 3.12449 8.76025 3.625 8.76025H8.45833C8.95884 8.76025 9.36458 9.166 9.36458 9.6665V25.3748C9.36458 25.8753 8.95884 26.2811 8.45833 26.2811H3.625C3.12449 26.2811 2.71875 25.8753 2.71875 25.3748V9.6665ZM4.53125 10.5728V24.4686H7.55208V10.5728H4.53125Z"
                  fill="#343434"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.1771 9.6665C11.1771 9.166 11.5828 8.76025 12.0833 8.76025H16.9167C17.4172 8.76025 17.8229 9.166 17.8229 9.6665V10.191L18.3489 9.96554C19.2531 9.57801 20.2201 9.33499 21.1981 9.24608C24.5512 8.94126 27.4896 11.5761 27.4896 14.9593V25.3748C27.4896 25.8753 27.0838 26.2811 26.5833 26.2811H21.75C21.2495 26.2811 20.8438 25.8753 20.8438 25.3748V16.9165C20.8438 16.5159 20.6846 16.1317 20.4014 15.8485C20.1181 15.5652 19.7339 15.4061 19.3333 15.4061C18.9327 15.4061 18.5486 15.5652 18.2653 15.8485C17.982 16.1317 17.8229 16.5159 17.8229 16.9165V25.3748C17.8229 25.8753 17.4172 26.2811 16.9167 26.2811H12.0833C11.5828 26.2811 11.1771 25.8753 11.1771 25.3748V9.6665ZM12.9896 10.5728V24.4686H16.0104V16.9165C16.0104 16.0352 16.3605 15.19 16.9837 14.5668C17.6068 13.9437 18.452 13.5936 19.3333 13.5936C20.2146 13.5936 21.0598 13.9437 21.683 14.5668C22.3062 15.19 22.6562 16.0352 22.6562 16.9165V24.4686H25.6771V14.9593C25.6771 12.6582 23.6701 10.8413 21.3622 11.0511C20.5719 11.123 19.7906 11.3196 19.0629 11.6315L17.2737 12.3983C16.9937 12.5183 16.6721 12.4896 16.4178 12.3219C16.1635 12.1542 16.0104 11.8699 16.0104 11.5653V10.5728H12.9896Z"
                  fill="#343434"
                />
              </svg>
            </Link>

            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:opacity-70 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.6723 4.57679C13.862 3.38711 15.4755 2.71875 17.158 2.71875H20.4205C20.921 2.71875 21.3268 3.12449 21.3268 3.625V7.975C21.3268 8.47551 20.921 8.88125 20.4205 8.88125H17.158C17.1099 8.88125 17.0638 8.90035 17.0298 8.93434C16.9959 8.96833 16.9768 9.01443 16.9768 9.0625V11.4187H20.4205C20.6996 11.4187 20.9631 11.5473 21.1348 11.7673C21.3066 11.9872 21.3674 12.2741 21.2997 12.5448L20.2122 16.8948C20.1113 17.2982 19.7489 17.5812 19.333 17.5812H16.9768V25.375C16.9768 25.8755 16.571 26.2812 16.0705 26.2812H11.7205C11.22 26.2812 10.8143 25.8755 10.8143 25.375V17.5812H8.45801C7.9575 17.5812 7.55176 17.1755 7.55176 16.675V12.325C7.55176 11.8245 7.9575 11.4187 8.45801 11.4187H10.8143V9.0625C10.8143 7.38003 11.4826 5.76648 12.6723 4.57679ZM17.158 4.53125C15.9562 4.53125 14.8037 5.00865 13.9539 5.85842C13.1042 6.7082 12.6268 7.86074 12.6268 9.0625V12.325C12.6268 12.8255 12.221 13.2312 11.7205 13.2312H9.36426V15.7687H11.7205C12.221 15.7687 12.6268 16.1745 12.6268 16.675V24.4688H15.1643V16.675C15.1643 16.1745 15.57 15.7687 16.0705 15.7687H18.6254L19.2598 13.2312H16.0705C15.57 13.2312 15.1643 12.8255 15.1643 12.325V9.0625C15.1643 8.53372 15.3743 8.02661 15.7482 7.65271C16.1221 7.27881 16.6292 7.06875 17.158 7.06875H19.5143V4.53125H17.158Z"
                  fill="#343434"
                />
              </svg>
            </Link>

            <Link
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="hover:opacity-70 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="23"
                viewBox="0 0 19 23"
                fill="none"
              >
                <path
                  d="M14.9625 1.00195H17.8766L11.5116 9.83108L19 21.8457H13.1373L8.54525 14.5576L3.29056 21.8457H0.37525L7.18319 12.4013L0 1.00195H6.01231L10.1626 7.66189L14.9625 1.00195ZM13.9412 19.7297H15.5563L5.13356 3.00727H3.40219L13.9412 19.7297Z"
                  fill="#343434"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="w-full h-[1px] bg-black opacity-5" />

        <div className="pt-6 text-[12px] leading-[140%] text-black font-normal">
          <p>
            ©2026 Hindustan Coca-Cola Holdings Private Limited. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
