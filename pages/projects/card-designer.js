import Project from 'components/Project'

function CardDesigner({ ...rest }) {
    return (
        <Project
            title="HID Card Designer"
            image="/images/card-designer.jpg"
            page="/projects/card-designer"
            link="https://www.youtube.com/watch?v=nLlHYBISog8"
            description="WYSIWYG ID Card Designer."
            {...rest}
        >
            <h2>Case-Study-ish</h2>
            <p>
                A web based interactive ID card designer written in Typescript,
                Angular, and Bootstrap 3.
            </p>
        </Project>
    )
}

export default CardDesigner
