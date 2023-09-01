export default function InputField(props) {
    return (
        <input 
        type="text" 
        value={props.value ? props.value : ""} 
        placeholder={props.placeholder} className="border-2 border-solid w-full p-2 border-gray-500 my-2" 
        onChange={props.onChange?props.onChange:""}
        />
    );
}