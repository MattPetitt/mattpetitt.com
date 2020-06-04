import Project from "components/Project";

function CuriositystreamApp({ ...rest }) {
  return (
    <Project
      title="CuriosityStream Marketing Site"
      image="/images/curiositystream-marketing.jpg"
      page="/projects/curiositystream-marketing"
      link="https://curiositystream.com/"
      description="Marketing Site"
      {...rest}
    >
      <h2>Case-Study-ish</h2>
      <p>
        An Angular app that serves as the main marketing site and onboarding
        flow. Heavily optimized for speed and performance to decrease bounce
        rates. Integrated with Google Analytics and Tag Manager for marketing
        analytics, and Optimizely for A/B testing.
      </p>
    </Project>
  );
}

export default CuriositystreamApp;
