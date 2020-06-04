import Project from "components/Project";

function CollectForKids({ ...rest }) {
  return (
    <Project
      title="Collect For Kids"
      image="/images/collect-for-kids.jpg"
      page="/projects/collect-for-kids"
      description="A Wordpress site with custom theming and plugins."
      {...rest}
    >
      <h2>Case-Study-ish</h2>
      <p>
        This was a really cool volunteer project Innolance did for a local
        program with FCPS called Collect for Kids. The website served as a CMS
        managed hub for information on backpack and supplies drives, as well as
        featuring the programs sponsors.
      </p>
    </Project>
  );
}

export default CollectForKids;
