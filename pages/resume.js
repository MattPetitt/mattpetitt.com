import Head from "next/head";

export default function Resume() {
  return (
    <>
      <Head>
        <title>Matt Petitt - Resume</title>
      </Head>
      <div className="py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h1 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"></h1>
          </div>
          <div className="mt-4 bg-white shadow overflow-hidden rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-3xl leading-6 font-extrabold text-gray-900">
                Matt Petitt
              </h3>
              <p className="mt-3 max-w-2xl text-sm text-gray-500">
                1616 Fieldthorn Drive, Reston VA, 20194
              </p>
              <p className="max-w-2xl text-sm text-gray-500">
                703-678-6047 |{" "}
                <a
                  className="text-blue-600 hover:text-blue-500"
                  href="mailto:matt@petitt.io"
                >
                  Matt@Petitt.io
                </a>
              </p>
            </div>
            <div className="border-t border-gray-200">
              <div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <p className="text-sm font-medium text-gray-500">Profile</p>
                  <p className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    I’m a UI dev, team lead, and people manager based in Reston,
                    Virginia. For the last eight years, I have helped companies
                    in the DC area design, launch, and maintain modern user
                    interfaces. My most recent work has focused on design
                    systems, component libraries, and web applications built
                    with modern Javascript and React.
                  </p>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <p className="text-sm font-medium text-gray-500">
                    <span className="text-black font-semibold">
                      Front-End Engineer
                    </span>
                    <br />
                    Amazon AWS
                  </p>
                  <p className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <p className="text-gray-500">
                      Javascript, React, UX, Data Visualization, Testing
                    </p>
                    I build and maintain applications for querying and
                    visualizing AWS service health across regions. Due to the
                    massive amounts of data our customers view and interact
                    with, I spend most of my development time focusing on our
                    applications’ performance, accuracy, and UX. I’ve planned,
                    designed, and architected many core features of the UI in
                    close collaboration with our customers and backend
                    engineering team.
                  </p>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <p className="text-sm font-medium text-gray-500">
                    <span className="text-black font-semibold">
                      Lead Front-End Engineer
                    </span>
                    <br />
                    Cvent R&D
                  </p>
                  <p className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <p className="text-gray-500">
                      Management, Javascript, React, Design Systems, UX, Code
                      Reviews, Hiring, Accessibility
                    </p>
                    I lead a UI development team within Cvent R&D, focusing on
                    our internal design system, React component libraries, and
                    new web applications. My time was split between people
                    managing, project planning, writing/reviewing code,
                    interviewing, and mentoring. My team worked closely with UX
                    from early ideation and prototyping to maintenance and
                    support for consuming product teams.
                  </p>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <p className="text-sm font-medium text-gray-500">
                    <span className="text-black font-semibold">
                      Lead Front-End Developer
                    </span>
                    <br />
                    Extensia
                  </p>
                  <p className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <p className="text-gray-500">
                      Typscript, Fabric.js, Angular, Bootstrap, Kendo, Webpack,
                      Java, Tapestry
                    </p>
                    As the UI lead, I designed, developed, and launched our
                    flagship web application suite in less than a year. Our
                    product was Google Docs for enterprise ID cards. Our
                    customers were manually editing and printing unique ID cards
                    via a desktop app and attached printer. Our solution was a
                    cloud-based printer and template management system with an
                    in-browser WYSIWYG template designer and a mobile capture
                    app. The web app and card designer are built with
                    Angular/Typescript and the mobile capture app in
                    React/Node/Express.
                  </p>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <p className="text-sm font-medium text-gray-500">
                    <span className="text-black font-semibold">
                      Lead UX/UI Developer
                    </span>
                    <br />
                    CuriosityStream
                  </p>
                  <p className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <p className="text-gray-500">
                      React, Redux, Angular, Bootstrap, SASS, Wordpress, PHP,
                      Laravel
                    </p>
                    As the sole UI developer, I developed and launched our
                    marketing site, video-on-demand streaming application, and
                    media CMS dashboard within six months. I lead the effort
                    with our digital marketing firm to optimize our marketing
                    funnel by setting up analytics, tag management, SEO, and A/B
                    testing.
                  </p>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <p className="text-sm font-medium text-gray-500">
                    <span className="text-black font-semibold">
                      Senior Front-End Developer
                    </span>
                    <br />
                    StoryBlocks
                  </p>
                  <p className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <p className="text-gray-500">
                      HTML, CSS, Javascript, jQuery, PHP, Node
                    </p>
                    I worked on updating and redesigning the UI for three large
                    web applications. Additionally, I worked with the marketing
                    team to design and code mobile landing pages, build and
                    optimize email campaigns, set up A/B tests, and create
                    channel-specific landing pages for social media and SEM.
                  </p>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <p className="text-sm font-medium text-gray-500">
                    <span className="text-black font-semibold">
                      Front-End Developer
                    </span>
                    <br />
                    Hodgson Consulting
                  </p>
                  <p className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <p className="text-gray-500">
                      HTML, CSS, Javascript, jQuery, .NET, Ektron, Wordpress
                    </p>
                    I built out and integrated responsive UI’s for CMS based web
                    sites and web applications. Many customers were colleges and
                    non-profits, who focused on accessibility and
                    responsiveness.
                  </p>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <p className="text-sm font-medium text-gray-500">
                    Hackathons
                  </p>
                  <p className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Twitters 2nd Place prize at HackMIT for PartyGenius
                    Cambridge, MA; Nov 2013
                    <br />
                    Y-Hack; New Haven, CT; Nov 2013
                  </p>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <p className="text-sm font-medium text-gray-500">Skills</p>
                  <p className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Javascript/ES6+, Typescript, React, Redux, Emotion, Jest,
                    Git, VSCode, Sketch, Framer X, Figma, Invision, Jenkins, too
                    much Slack
                  </p>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <p className="text-sm font-medium text-gray-500">
                    Attachments
                  </p>
                  <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <div className="border border-gray-200 rounded-md divide-y divide-gray-200">
                      <a
                        href="/MattPetittResume.pdf"
                        target="_blank"
                        className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                      >
                        <div className="w-0 flex-1 flex items-center">
                          <svg
                            className="flex-shrink-0 h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="ml-2 flex-1 w-0 truncate">
                            MattPetittResume.pdf
                          </span>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <span className="font-medium text-blue-600 hover:text-blue-500">
                            Download
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
