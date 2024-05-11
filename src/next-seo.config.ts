import { DefaultSeoProps } from "next-seo";

export default {
  title: "KUSheet",
  description: "KUSheet เว็บที่รวบรวมชีทของเด็กเกษตรไว้ครบจบในที่เดียว",
  openGraph: {
    title: "KUSheet",
    url: "https://kusheet.tech.nisit.ku.ac.th",
    type: "website",
    description: "KUSheet เว็บที่รวบรวมชีทของเด็กเกษตรไว้ครบจบในที่เดียว",
    images: [
      //   {
      //     url: "/og-image.png",
      //     width: 1600,
      //     height: 900,
      //     alt: "KU Clubs",
      //   },
    ],
    siteName: "KUSD",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
} as DefaultSeoProps;