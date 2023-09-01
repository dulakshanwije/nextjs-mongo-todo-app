"use client"
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function DeleteButton(props) {
    const router = useRouter();
    
    const deleteTopic = async () => {
        const confirmed = confirm("Are you sure?");

        if(confirmed){
            const res = await axios.delete(`http://localhost:3000/api/topics?id=${props.id}`);

            if(res.status == 200){
                router.refresh();
            }
        }
    }
    return (
        <button
            onClick={deleteTopic}
        >
            <Image
                src="/trash-100.png"
                width={20}
                height={20}
                alt="trash icon" />
        </button>
    );
}