import Project from "components/Project";
import preview from "../../public/images/collect-for-kids.jpg";

function CollectForKids({ ...rest }) {
  return (
    <Project
      title="Collect For Kids"
      image={preview}
      page="/projects/collect-for-kids"
      description="Organizing school supply and backpack donations."
      {...rest}
    >
      <p>
        This was a volunteer project we did for Collect for Kids, a local
        program organizing backpack and school supplies drives. WordPress site
        with custom theme.
      </p>
    </Project>
  );
}

export default CollectForKids;
