import Project from 'components/Project'

function CardPortal({ ...rest }) {
    return (
        <Project
            title="ID Card Portal"
            image="/images/card-management-app.jpg"
            page="/projects/card-portal"
            link="https://www.youtube.com/watch?v=nLlHYBISog8"
            description="Dashboard for managing remote ID card printers and print jobs."
            {...rest}
        >
            <h2>Case-Study-ish</h2>
            <p>
                A Java/Tapestry application for managing ID card templates. The UI
                uses Angular, a custom Bootstrap 3 theme, and Kendo UI
                components.
            </p>
        </Project>
    )
}

export default CardPortal
