import Project from "components/Project";
import preview from "../../public/images/curiositystream-admin.jpg";

function CuriositystreamApp({ ...rest }) {
  return (
    <Project
      title="CuriosityStream CMS"
      image={preview}
      page="/projects/curiositystream-admin"
      description="Admin Dashboard"
      {...rest}
    >
      <p>
        An custom Angular CMS for managing the content library. Not much secret
        sauce here, just a lot of CRUD&apos;s.
      </p>
    </Project>
  );
}

export default CuriositystreamApp;
