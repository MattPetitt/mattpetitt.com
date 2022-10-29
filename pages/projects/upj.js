import Project from "components/Project";
import preview from "../../public/images/university-of-pittsburgh-at-johnstown.jpg";

function Upj({ ...rest }) {
  return (
    <Project
      title="University of Pittsburgh at Johnstown"
      image={preview}
      page="/projects/upj"
      link="http://www.upj.pitt.edu/"
      description="Website for the University of Pittsburgh at Johnstown."
      {...rest}
    >
      <p>
        An Episerver website using a custom Bootstrap 3 theme. This had to be
        responsive and cross-browser compatible back when that was still hard.
      </p>
    </Project>
  );
}

export default Upj;
