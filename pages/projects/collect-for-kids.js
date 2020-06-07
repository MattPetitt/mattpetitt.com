import Project from 'components/Project'

function CollectForKids({ ...rest }) {
    return (
        <Project
            title="Collect For Kids"
            image="/images/collect-for-kids.jpg"
            page="/projects/collect-for-kids"
            description="Organizing school supply and backpack donations."
            {...rest}
        >
            <h2>Case-Study-ish</h2>
            <p>
                This was a volunteer project we did for Collect for Kids, a
                local program organizing backpack and school
                supplies drives. WordPress site with custom theme.
            </p>
        </Project>
    )
}

export default CollectForKids
