import Image from 'next/image';

interface ImageCompProps {
    src: string;
    className: string;
    alt: string;
}

const ImageComp = ({ src, className, alt }: ImageCompProps) => (
    <div className={`${className} relative`}>
        <Image
            src={src.includes('N/A') ? 'https://semantic-ui.com/images/wireframe/image.png' : src}
            objectPosition="center"
            layout="fill"
            alt={alt}
        />
    </div>
);

export default ImageComp;
