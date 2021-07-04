interface ToggleProps {
    onToggleChange: () => void;
    isChecked: boolean;
    className?: string
}

const Toggle = ({ onToggleChange, isChecked, className }: ToggleProps) => (
    <label htmlFor="toggleB" className={`${className} flex items-center cursor-pointer`}>
        <div className="relative">
            <input onChange={onToggleChange} type="checkbox" id="toggleB" className="sr-only" />
            <div className="block bg-gray-600 w-14 h-8 rounded-full" />
            <div className={`${isChecked ? ' translate-x-full bg-teal-500' : 'translate-x-0 bg-white'}  transform absolute left-1 top-1  w-6 h-6 rounded-full transition`} />
        </div>
    </label>
);

export default Toggle;
