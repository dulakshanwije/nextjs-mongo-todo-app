"use client"
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CompleteButton(props) {
    const router = useRouter();
    
    const completeTask = async () => {
            try {
                const res = await axios.put(`http://localhost:3000/api/complete/${props.id}`, {
                    "isCompleted":true
                });

                if(res.status == 200){
                    router.refresh();
                }
            } catch (error) {
                console.error(error);
            }
    }
    return (
        <button
            onClick={completeTask}
        >
            <Image
                src="/tick-100.png"
                width={20}
                height={20}
                alt="trash icon" />
        </button>
    );
}