import Head from "next/head"

const Meta = ({ keywords, description, title }) => {
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <link rel="icon" href="favicon.ico" />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Projects',
    description: 'welcome to the my projects',
    keywords: 'web development, programming'
}

export default Meta
