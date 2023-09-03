export default function InputField(props) {
    return (
        <input 
        type="text" 
        value={props.value ? props.value : ""} 
        placeholder={props.placeholder} className="my-2
        bg-gray-50 border text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" 
        onChange={props.onChange?props.onChange:""}
        />
    );
}