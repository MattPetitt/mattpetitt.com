import Project from "components/Project";

function CardPortal({ ...rest }) {
  return (
    <Project
      title="ID Card Portal"
      image="/images/card-management-app.jpg"
      page="/projects/card-portal"
      link="https://www.youtube.com/watch?v=nLlHYBISog8"
      description="Dashboard for managing remote ID card printers and print jobs."
      {...rest}
    >
      <h2>Case-Study-ish</h2>
      <p>
        A Tapestry application for managing ID card template designs. UI uses
        custom styled and modified Bootstrap 3 and Kendo UI components, as well
        as Angular for data binding and dynamic forms.
      </p>
    </Project>
  );
}

export default CardPortal;
