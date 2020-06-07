import Project from 'components/Project'

function CuriositystreamApp({ ...rest }) {
    return (
        <Project
            title="CuriosityStream Web Streaming App"
            image="/images/curiositystream-app.jpg"
            page="/projects/curiositystream-app"
            link="https://app.curiositystream.com/"
            description="A SVOD Web Application."
            {...rest}
        >
            <h2>Case-Study-ish</h2>
            <p>
                A React/Redux application for browsing and streaming video. I built the
                initial app from scratch in 6 months using Angular, Bootstrap,
                and Grunt. We eventually rebuilt it with React, Redux, and
                Webpack. The rewrite allowed us to share code with our React Native app.
            </p>
        </Project>
    )
}

export default CuriositystreamApp
