import Head from 'next/head';

interface MetaProps {
    keywords?: string;
    description?: string;
    title: string;
}

const Meta = ({ keywords, description, title }: MetaProps) => (
    <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="favicon.ico" />
        <title>projects | {title}</title>
    </Head>
);

Meta.defaultProps = {
    description: 'Get the latest news in web dev',
    keywords: 'web development, programming',
};

export default Meta;
