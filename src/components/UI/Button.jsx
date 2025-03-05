
const Button = ({type,className , onClick , children}) => {
    return (
        <button onClick={onClick} type={type} className={`px-4 py-2.5 rounded-full cursor-pointer ${className}`}>
            {children}
        </button>
    );
};

export default Button;