import { Dialog } from '@material-ui/core';

type AlertDialogProps = {
    open: boolean,
    title: string,
    year: string,
    poster: string,
    setOpen: (open: boolean) => void,
}

const DialogControl = ({ open, setOpen, title, year, poster }: AlertDialogProps) => {
    return (
        <Dialog maxWidth="sm" fullWidth open={open} onClose={() => setOpen(false)}>
            <div className="p-6 dark:bg-gray-700 transition">
                <div className="transition dark:border-teal-500 border-l-8 border-teal-300 inline-block">
                <h3 className="transition dark:text-gray-200 text-2xl ml-2">
                    {title} {year}
                </h3>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start mt-6">
                    <img className="max-h-64 max-w-64 object-cover object-center rounded-sm" src={poster} alt={title} />
                    <div className="py-3 sm:py-0 sm:px-4">
                        <p className="text-justify transition dark:text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis nulla sed cumque repellendus quam velit impedit minima quibusdam tenetur tempora, excepturi laborum libero suscipit laudantium cupiditate ducimus. Temporibus, repudiandae. A?</p>
                    </div>
                </div>
            </div>
        </Dialog>
    );
};

export default DialogControl;
