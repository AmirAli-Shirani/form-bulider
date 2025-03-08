const FormBuilderInput = ({label , type , value ,onChange}) => {
    return (
        <>
            <label className="block mb-2">{label}</label>
            <input
                type={type}
                className="w-full p-2 border rounded-md mb-3"
                value={value}
                onChange={onChange}/>
        </>
    );
};

export default FormBuilderInput;