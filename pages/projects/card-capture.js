import Project from "components/Project";
import preview from "../../public/images/capture-app.jpg";

function CardCapture({ ...rest }) {
  return (
    <Project
      title="ID Card Capture"
      image={preview}
      page="/projects/card-capture"
      link="https://www.youtube.com/watch?v=nLlHYBISog8"
      description="A React and Node application for capturing photos with an iPhone or iPad camera to remotely print on demand ID cards."
      {...rest}
    >
      <p>
        A mobile web app for capturing images and names for instant ID card
        printing.
      </p>
    </Project>
  );
}

export default CardCapture;
