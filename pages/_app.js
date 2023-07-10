import Head from "next/head";
import Navbar from "components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import "tailwindcss/tailwind.css";
import "./styles.css";

const links = [
  {
    href: "/projects",
    content: "Projects",
  },
  {
    href: "/resume",
    content: "Resume",
  },
  {
    href: "/links",
    content: "Favorite Links",
  },
  {
    href: "/utils",
    content: "Utils",
  },
];

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Matt Petitt - UX Manager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Analytics />
      <Navbar title="Matt Petitt" links={links} />
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
    </>
  );
}
