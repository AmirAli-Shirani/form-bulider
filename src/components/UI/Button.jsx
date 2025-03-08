
const Button = ({type,className , onClick , children}) => {
    return (
        <button onClick={onClick} type={type} className={`px-4 py-2.5 bg-[#1462A8] hover:scale-105 duration-300
         rounded-full cursor-pointer ${className}`}>
            {children}
        </button>
    );
};

export default Button;