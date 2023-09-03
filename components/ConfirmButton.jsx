export default function ConfirmButton(props){
    return (
        <button onClick = {props.onClick}
            className="bg-emerald-700 rounded-lg text-white w-full py-2 uppercase"
        >{props.value}</button>
    );
}