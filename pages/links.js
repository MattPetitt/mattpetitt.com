import Link from "next/link";
import absoluteUrl from "utils/absoluteUrl";

export async function getServerSideProps({ req }) {
  const { origin } = absoluteUrl(req, "localhost:3000");

  const res = await fetch(`${origin}/api/links`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

export default function Links({ data, notFound }) {
  return (
    <div className="py-20 sm:py-24">
      <div className="mt-4 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              {notFound && (
                <h1 className="lg:text-center mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
                  Sorry my favorite links aren&apos;t showing up. They&apos;re
                  pulled from my{" "}
                  <Link href="https://notion.so" className="text-blue-600">
                    Notion
                  </Link>{" "}
                  database which might be down.
                </h1>
              )}
              {!notFound && (
                <div className="shadow overflow-hidden border-b border-gray-200 dark:border-slate-900 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-900">
                    <thead className="bg-gray-50 dark:bg-slate-800">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-100 uppercase tracking-wider"
                        >
                          Title
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-100 uppercase tracking-wider"
                        >
                          Tags
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-slate-800 divide-y divide-gray-200 dark:divide-slate-900">
                      {data.results.map((link) => {
                        const name = link.properties.Name.title[0].plain_text;
                        const url = link.properties.URL.url;
                        const tags = link.properties.Tags.multi_select;
                        return (
                          <tr key={link.id}>
                            <td>
                              <div className="flex items-center">
                                <div className="ml-4">
                                  <Link
                                    href={url}
                                    className="text-blue-600 dark:text-white text-sm font-medium"
                                  >
                                    <div className="px-4 py-4">{name}</div>
                                  </Link>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              {tags.map((tag) => {
                                return (
                                  <span
                                    key={tag.id}
                                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-${tag.color}-100 dark:bg-${tag.color}-700 text-${tag.color}-800 dark:text-${tag.color}-100 whitespace-nowrap`}
                                  >
                                    {tag.name}
                                  </span>
                                );
                              })}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
