import Project from "components/Project";

function CuriositystreamApp({ ...rest }) {
  return (
    <Project
      title="CuriosityStream CMS"
      image="/images/curiositystream-admin.jpg"
      page="/projects/curiositystream-admin"
      description="Admin Dashboard"
      {...rest}
    >
      <p>
        An custom Angular CMS for managing the content library. Not much secret
        sauce here, just a lot of CRUD's.
      </p>
    </Project>
  );
}

export default CuriositystreamApp;
