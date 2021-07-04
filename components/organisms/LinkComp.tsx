import Link from 'next/link';

interface LinkCompProps {
    text: string;
    route: string;
    className?: string;
}

const LinkComp = ({ text, route, className }: LinkCompProps) => (
    <Link href={route}>
        <a className={`${className} transition`}>{text}</a>
    </Link>
);

export default LinkComp;
