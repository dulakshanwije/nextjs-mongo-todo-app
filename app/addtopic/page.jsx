"use client"
import ConfirmButton from "@/components/ConfirmButton";
import InputField from "@/components/InputField";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddTopic() {
    const [topic, setTopic] = useState("");
    const [description, setDesc] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async () => {

        try {
            setLoading(true);
            await axios.post("http://localhost:3000/api/topics", {
                "title": topic,
                "description": description
            });
            router.push("/");
        } catch (error) {
            setLoading(false);
            console.error(error);
        }
        finally {
            setLoading(false);
        }


    }

    return (
        <div>
            <InputField
                placeholder="Topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
            />
            <InputField
                placeholder="Description"
                value={description}
                onChange={(e) => setDesc(e.target.value)}
            />
            <ConfirmButton value= {loading?"Loading...":"Add"} onClick={handleSubmit} />
        </div>
    );
}