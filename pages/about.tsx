import { useEffect } from 'react';
import { Meta } from '../components/atoms';
import { ImageComp } from '../components/organisms';

interface AboutProps {
    setActive: (params: string) => void;
}

const About = ({ setActive }: AboutProps) => {
    useEffect(() => {
        setActive('about');
        return () => setActive('none');
    }, [setActive]);

    return (
        <>
            <Meta title="About" />
            <main className="flex flex-col md:flex-row items-center px-5 md:px-8 pt-24 pb-10">
                <div className="md:w-2/3">
                    <section>
                        <h2 className="font-bold dark:text-teal-400 text-teal-600 text-xl lg:text-2xl border-l-4 pl-2 border-teal-700 dark:border-teal-500 inline antialiased transition">About me.</h2>
                        <h4 className="mt-6 font-bold dark:text-gray-200 text-gray-800 text-3xl lg:text-5xl antialiased transition">Platform Coding for Local Developer</h4>
                        <p className="mt-6 lg:mt-8 dark:text-gray-300 text-base lg:text-lg text-justify antialiased transition">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis minima odit debitis, doloremque sint voluptatum suscipit vero rem sapiente voluptas ipsam autem sed, eligendi dignissimos! Voluptatem nesciunt cum illo consectetur.</p>
                    </section>
                    <section className="mt-6 space-y-3">
                        {[
                            { text: 'Kualitas Code yang bagus', path: 'M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z' },
                            { text: 'Aktif dan selalu Commit', path: 'M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z' },
                            { text: 'ago Ngoding', path: 'M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z' },
                        ].map(({ text, path }) => (
                            <div className="flex items-center" key={text}>
                                <div className="w-10 h-10 dark:bg-teal-600 bg-teal-200 rounded-full flex transition">
                                    <svg className="m-auto h-5 w-5 dark:text-white text-teal-800 transition" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 14 16" height="1em" width="1em">
                                        <path fillRule="evenodd" d={path} />
                                    </svg>
                                </div>
                                <span className="ml-3 dark:text-gray-300 transition">{text}</span>
                            </div>
                        ))}
                    </section>
                </div>
                <ImageComp src="/logo.svg" alt="logo" className="w-4/5 sm:w-3/5 md:full h-72 md:h-96" />
            </main>
        </>
    );
};

export default About;
