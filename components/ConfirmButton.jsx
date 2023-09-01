export default function ConfirmButton(props){
    return (
        <button onClick = {props.onClick}
            className="bg-green-400 w-full py-2 uppercase "
        >{props.value}</button>
    );
}