import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Meta } from '../../components/atoms';
import { ImageComp } from '../../components/organisms';

interface ProjectsProps {
    setActive: (params: string) => void,
}

const Projects = ({ setActive }: ProjectsProps) => {
    const router = useRouter();
    useEffect(() => {
        setActive('projects');
        return () => setActive('none');
    }, [setActive]);

    return (
        <>
            <Meta title="My Projects" />
            <div className="pt-28 px-5 md:px-20 max-w-md mx-auto md:mx-0 md:max-w-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div onClick={() => router.push('/projects/movies')} className="bg-gray-700 shadow-lg rounded-lg overflow-hidden cursor-pointer hover:-translate-y-0.5 hover:shadow-xl hover:opacity-90 transform transition duration-300">
                    <ImageComp src="/movie.jpg" alt="movie image" className="w-full h-56 md:h-64" />
                    <div className="bg-gray-50 dark:bg-gray-700 transition p-5 border-t-2 dark:border-gray-800">
                        <h3 className="uppercase text-center dark:text-gray-200 text-xl font-bold text-gray-800 transition">Movie Search</h3>
                        <p className="mt-3 text-gray-600 text-base text-justify dark:text-gray-300 transition">Integrate omdb API (movie), Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab asperiores doloremque nihil sunt maxime aperiam.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;
