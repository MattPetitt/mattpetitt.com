import Menu from "components/Menu";

const Home = () => (
  <>
    <Menu />
    <main>
      <header>
        <h1>Matt Petitt - UX Dev</h1>
      </header>
      <h2>Me as a PowerPoint Slide</h2>
      <div className="slide">
        <img
          src="/images/gumwall.jpeg"
          alt="Me and the gum wall. Specifically the Seattle one."
        />
        <ul>
          <li>Currently a Lead Front-End Engineer @ Cvent R&D</li>
          <li>
            7+ years professional experience, 11+ if you count selling WordPress
            sites in high-school.
          </li>
          <li>
            I mainly work with people, JavaScript, React, Framer, Sketch, and
            Figma.
          </li>
          <li>
            I've built SPA's, component libraries, WYSIWYG's, prototypes,
            frameworks, and more.
          </li>
          <li>
            I've lead multiple products, projects, and teams through the full
            development life cycle.
          </li>
          <li>
            I'm interested in product development, AR/VR, content creation,
            education, public services, and journalism.
          </li>
        </ul>
      </div>
      <br />
      <h2>Me in Real Life</h2>
      <ul>
        <li>
          I like coffee, extremely long movies, history podcasts, wikipedia, and
          starting new hobbies.
        </li>
        <li>
          When I was a kid I wanted to move to a big city and bike everywhere.
          <br />
          Now I live in the suburbs and drive my station wagon a half-mile to
          Trader Joes.
        </li>
        <li>
          Plan A is to find work I love so much that I'd do it for free.
          <br />
          Plan B is to start a commune in the woods.
        </li>
      </ul>
    </main>
  </>
);

export default Home;
