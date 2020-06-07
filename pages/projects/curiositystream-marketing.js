import Project from 'components/Project'

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
                Our marketing and onboarding site, written in Angular.
                Lots of performance optimizations and analytics integrations.
            </p>
        </Project>
    )
}

export default CuriositystreamApp
