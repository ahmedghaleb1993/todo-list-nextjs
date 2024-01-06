type InputProps = {
    name: string,
    type: string,
    placeholder?: string,
    value?: string
}

const Input = ({ name, type, placeholder, value }: InputProps) => {
    return (<>

        <input 
        className="w-full p-2 border border-gray-200"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value} />

    </>);
}

export default Input;