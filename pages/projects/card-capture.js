import Project from "components/Project";

function CardCapture({ ...rest }) {
  return (
    <Project
      title="ID Card Capture"
      image="/images/capture-app.jpg"
      page="/projects/card-capture"
      link="https://www.youtube.com/watch?v=nLlHYBISog8"
      description="A React and Node application for capturing photos with an iPhone or iPad camera to remotely print on demand ID cards."
      {...rest}
    >
      <h2>Case-Study-ish</h2>
      <p>
        A web based interactive ID card designer written in Typescript, using
        Angular for the data binding, and a customized Bootstrap 3 build using
        scss. Built using Webpack and Docker.
      </p>
    </Project>
  );
}

export default CardCapture;
