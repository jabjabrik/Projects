import { ImageComp } from '../organisms';

interface ModalProps {
    poster: string;
    title: string;
    year: string;
    open: boolean;
    setOpen: (param: boolean) => void;
}

const Modal = ({ open, setOpen, title, year, poster }: ModalProps) => (
    <div className={`${open ? '' : 'pointer-events-none opacity-0'} transition-opacity duration-200 fixed w-full h-full top-0 left-0 flex items-center justify-center`}>
        <div onClick={() => setOpen(false)} className="flex absolute w-full h-full bg-black opacity-40 transition" />
        <div className="p-5 m-auto max-h-5/6 sm:max-h-4/6 w-5/6 sm:w-auto sm:max-w-xl lg:max-w-2xl dark:bg-gray-700 bg-gray-100 rounded shadow-lg transition overflow-y-auto z-50">
            <div className="transition dark:border-teal-500 border-l-8 border-teal-300 inline-block">
                <h3 className="transition dark:text-gray-200 text-2xl ml-2">{title} - {year}</h3>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start p-5">
                <ImageComp src={poster} className="w-4/6 sm:w-1/3 h-64 rounded-sm" alt={title} />
                <div className="py-3 sm:py-0 sm:px-4 w-2/3">
                    <p className="text-justify transition dark:text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis nulla sed cumque repellendus quam velit impedit minima quibusdam tenetur tempora, excepturi laborum libero suscipit laudantium cupiditate ducimus. Temporibus, repudiandae. A?</p>
                </div>
            </div>
        </div>
    </div>
);

export default Modal;
