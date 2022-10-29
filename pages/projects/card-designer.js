import Project from "components/Project";
import preview from "../../public/images/card-designer.jpg";

function CardDesigner({ ...rest }) {
  return (
    <Project
      title="HID Card Designer"
      image={preview}
      page="/projects/card-designer"
      link="https://www.youtube.com/watch?v=nLlHYBISog8"
      description="WYSIWYG ID Card Designer."
      {...rest}
    >
      <p>
        A web based interactive ID card designer written in Typescript, Angular,
        and Bootstrap 3.
      </p>
    </Project>
  );
}

export default CardDesigner;
