import Link from "next/link";
import Image from "next/image";

function Project({
  isPreview = false,
  title,
  children,
  image,
  page,
  link,
  description,
}) {
  if (isPreview) {
    return (
      <Link href={page}>
        <a className="flex flex-col md:flex-row text-gray-900 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-transform transform hover:-translate-y-0.5 hover:scale-105">
          <div className="flex-shrink-0 ">
            <div className="flex items-center justify-center h-24 w-36 relative shadow overflow-hidden border-b border-gray-200">
              <Image
                className="rounded-sm"
                objectFit="cover"
                src={image}
                layout="fill"
                alt={title}
              />
            </div>
          </div>
          <div className="md:ml-4 mt-4 md:mt-0">
            <p className="text-lg leading-6 font-medium ">{title}</p>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
              {description}
            </p>
          </div>
        </a>
      </Link>
    );
  }
  return (
    <div className="font-sans leading-normal tracking-normal py-12">
      <div className="text-center pt-12 px-4">
        <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 md:text-4xl">
          {title}
        </h1>
        <p className="text-xl py-2 font-semibold text-gray-600 dark:text-gray-300">
          {description}
        </p>
        {link ? (
          <div className="my-6">
            <Link href={link}>
              <a
                target="_blank"
                className="transition duration-500 ease-in-out transform hover:-translate-1 hover:scale-105 bg-blue-600 text-white font-semibold py-3 px-8 rounded-md"
              >
                Check It Out
              </a>
            </Link>
          </div>
        ) : (
          <p className="text-gray-600 dark:text-gray-300">
            Unfortunately this site is no longer live.
          </p>
        )}
      </div>
      <div className="container mx-auto max-w-5xl py-6">
        <img
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "auto",
            maxWidth: "100%",
          }}
          className="rounded shadow border-b"
          src={image}
        />
      </div>

      <div className="container mx-auto max-w-5xl">
        <div className="bg-white dark:bg-slate-800 prose w-full p-8 text-gray-800 dark:text-gray-200 shadow border-b border-gray-200 dark:border-slate-900 rounded-lg text-lg leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Project;
