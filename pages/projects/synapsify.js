import Project from "components/Project";
import preview from "../../public/images/synapsify.jpg";

function Synapsify({ ...rest }) {
  return (
    <Project
      title="Synapsify"
      image={preview}
      page="/projects/synapsify"
      link="https://www.youtube.com/watch?v=E8R8IVj5v-Y"
      description="Natural language processing dashboard."
      {...rest}
    >
      <p>
        A Ruby on Rails dashboard for visualizing and filtering data built with
        D3 and jQuery. The backend NLP app collects comments from organizations
        social media, websites, support emails, and other sources of feedback
        and extracts patterns and trends. This dashboard organized and displayed
        the results allowing users to understand and interact with the data.
      </p>
    </Project>
  );
}

export default Synapsify;
