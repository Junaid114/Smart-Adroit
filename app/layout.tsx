import type { Metadata } from "next";
import "@/public/styles/style.scss";
import InitAnimations from "@/components/layout/InitAnimations";

export const metadata: Metadata = {
  title: "Smart Adroit ",
  description: "Software Development & IT Solutions",
  keywords: [
    "Software",
    "IT",
    "Agency",
    "Javascript",
    "Typescript",
    "React",
    "nextjs",
  ],
  authors: [
    {
      name: "Smart Adroit",
      url: "https://res.cloudinary.com/dstnwi5iq/image/upload/v1722680605/WhatsApp_Image_2024-08-03_at_3.19.46_PM_gvxoa2.jpg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <InitAnimations />
      </body>
    </html>
  );
}
