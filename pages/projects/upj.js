import Project from 'components/Project'

function Upj({ ...rest }) {
    return (
        <Project
            title="University of Pittsburgh at Johnstown"
            image="/images/university-of-pittsburgh-at-johnstown.jpg"
            page="/projects/upj"
            link="http://www.upj.pitt.edu/"
            description="Website for the University of Pittsburgh at Johnstown."
            {...rest}
        >
            <h2>Case-Study-ish</h2>
            <p>
                An Episerver website using a custom Bootstrap 3
                theme. This had to be responsive and cross-browser compatible
                back when that was still hard.
            </p>
        </Project>
    )
}

export default Upj
