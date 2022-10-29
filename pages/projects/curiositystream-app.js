import Project from "components/Project";
import preview from "../../public/images/curiositystream-app.jpg";

function CuriositystreamApp({ ...rest }) {
  return (
    <Project
      title="CuriosityStream Web Streaming App"
      image={preview}
      page="/projects/curiositystream-app"
      link="https://app.curiositystream.com/"
      description="A SVOD Web Application."
      {...rest}
    >
      <p>
        A React/Redux application for browsing and streaming video. I built the
        initial app from scratch in 6 months using Angular, Bootstrap, and
        Grunt. We eventually rebuilt it with React, Redux, and Webpack. The
        rewrite allowed us to share code with our React Native app.
      </p>
    </Project>
  );
}

export default CuriositystreamApp;
