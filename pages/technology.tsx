import { useEffect } from 'react';
import { Meta } from '../components/atoms';

interface TechnologyProps {
    setActive: (params: string) => void,
}

const Technology = ({ setActive }: TechnologyProps) => {
    useEffect(() => {
        setActive('technology');
        return () => setActive('none');
    }, [setActive]);

    return (
        <>
            <Meta title="Technology" />
            <div className="pt-28 w-full h-full">
                <div className="flex bg-teal-500 h-24 w-36 rounded-lg m-auto p-5">
                    <p className="text-white m-auto">coming soon</p>
                </div>
            </div>
        </>
    );
};

export default Technology;
