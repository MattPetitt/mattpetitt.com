import Project from "components/Project";

function CuriositystreamApp({ ...rest }) {
  return (
    <Project
      title="CuriosityStream Web Streaming App"
      image="/images/curiositystream-app.jpg"
      page="/projects/curiositystream-app"
      link="https://app.curiositystream.com/"
      description="A SVOD Web Application."
      {...rest}
    >
      <h2>Case-Study-ish</h2>
      <p>
        A React/Redux application for browsing and streaming shows and movies to
        desktop and mobile browsers. Initially I built out the initial app from
        scratch in 6 months with Angular, Bootstrap, and Grunt, we eventually
        rebuilt it with React, Redux, and Webpack. The rewrite allowed us to
        modular styling and templates to share most of the code between our web
        and smart TV app.
      </p>
    </Project>
  );
}

export default CuriositystreamApp;
