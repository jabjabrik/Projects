import Link from 'next/link';
import { useEffect } from 'react';
import { Meta } from '../components/atoms';

interface HomeProps {
    setActive: (params: string) => void
}

const Home = ({ setActive }: HomeProps) => {
    useEffect(() => {
        setActive('home');
        return () => {
            setActive('none');
        };
    }, [setActive]);
    return (
        <>
            <Meta title="Home" />
            <div className="flex flex-col lg:flex-row min-h-screen pt-20 px-5 pb-10 bg-gradient-to-br from-rose-900 to-violet-800">
                <div className="flex flex-col max-w-xl md:max-w-none mx-auto lg:mx-0 md:w-5/6 lg:w-4/6">
                    <section className="flex flex-col">
                        <h1 className="text-white text-5xl md:text-7xl font-bold">Power ful Web Hosting.</h1>
                        <h3 className="mt-6 text-yellow-400 text-3xl md:text-5xl font-bold">Landing Page 2069</h3>
                    </section>
                    <section className="flex flex-col">
                        <p className="mt-12 text-base md:text-xl text-justify antialiased text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elite, sed do eiusmod tempor incididunt ut labore et quis nostrud Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore optio possimus qui facilis placeat, atque quasi nemo fuga veritatis vitae itaque est harum in repellendus!</p>
                        <Link href="/projects">
                            <a className="mt-7 md:mt-16 shadow-md rounded-md font-bold uppercase tracking-wider text-blue-900 w-44 text-center inline-block py-2 bg-gradient-to-br from-emerald-300 to-cyan-500 hover:-translate-y-0.5 hover:shadow-lg transform transition duration-300">View Projects</a>
                        </Link>
                    </section>
                </div>
                <div className="md:m-auto">
                    <img src="illustration.png" alt="illustration" />
                </div>
            </div>
        </>
    );
};

export default Home;
