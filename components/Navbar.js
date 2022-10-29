import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

export default function Navbar({ title, links }) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMobileNavOpen(false);
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);
  return (
    <nav className="bg-gray-800/75 fixed w-full z-50  backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white logo text-xl font-extrabold">
              <Link key={title} href="/">
                {title}
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {links.map(({ id, href, content }) => {
                  const classes = classNames(
                    "px-3 py-2 rounded-md text-sm font-medium",
                    {
                      "hover:text-white hover:bg-gray-700 text-gray-300":
                        router.pathname !== href,
                      "text-white bg-gray-900": router.pathname === href,
                    }
                  );
                  return (
                    <Link key={id || content} href={href} className={classes}>
                      {content}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMobileNavOpen((isOpen) => !isOpen)}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open navigation menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={classNames("md:hidden", {
          hidden: !isMobileNavOpen,
        })}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {links.map(({ id, href, content }) => {
            return (
              <Link
                key={id || content}
                href={href}
                className={classNames(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  {
                    "text-gray-300 hover:text-white hover:bg-gray-700":
                      router.pathname !== href,
                    " text-white bg-gray-900": router.pathname === href,
                  }
                )}
              >
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
