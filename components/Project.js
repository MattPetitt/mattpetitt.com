import Link from 'next/link'
import Menu from 'components/Menu'

function Project({
    isPreview = false,
    title,
    children,
    image,
    page,
    link,
    description,
}) {
    if (isPreview) {
        return (
            <section className="project">
                <img src={image} />
                <article>
                    <Link href={page}>
                        <a>{title}</a>
                    </Link>
                    <p>{description}</p>
                </article>
            </section>
        )
    }
    return (
        <>
            <Menu />
            <main>
                <header>
                    <h1>{title}</h1>
                </header>
                <article>
                    <img src={image} />
                    <h2>Project</h2>
                    <p>{description}</p>
                    <>
                        {children}
                        {!!link ?? (
                            <h2>
                                <a href={link} target="_blank">
                                    Is there anything else I can see?
                                </a>
                            </h2>
                        )}
                    </>
                </article>
            </main>
        </>
    )
}

export default Project
