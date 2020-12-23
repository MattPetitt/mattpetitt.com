import Project from "components/Project";

function Bio({ ...rest }) {
  return (
    <Project
      title="BIO International"
      image="/images/bio-international-convention.jpg"
      page="/projects/bio"
      description="The website for BIO International's yearly convention."
      {...rest}
    >
      <p>An Ektron CMS website styled using a custom Bootstrap 3 theme.</p>
    </Project>
  );
}

export default Bio;
