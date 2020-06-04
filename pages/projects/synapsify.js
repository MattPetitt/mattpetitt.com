import Project from "components/Project";

function Synapsify({ ...rest }) {
  return (
    <Project
      title="Synapsify"
      image="/images/synapsify.jpg"
      page="/projects/synapsify"
      link="https://www.youtube.com/watch?v=E8R8IVj5v-Y"
      description="Natural language processing dashboard."
      {...rest}
    >
      <h2>Case-Study-ish</h2>
      <p>
        A Ruby on Rails dashboard for visualizing and filtering data using D3
        and jQuery. A separate application collects comments from organizations
        social media, websites, support emails, and other feedback sources and
        uses NLP to extract patterns and trends. This application organized and
        displayed the results allowing users to understand and interact with the
        data.
      </p>
    </Project>
  );
}

export default Synapsify;
