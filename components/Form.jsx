"use client"
import { useState } from "react";
import ConfirmButton from "./ConfirmButton";
import InputField from "./InputField";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Form(params){
    const {id, title, description} = params;
    const [newTitle, setNewTitle] = useState(title);
    const [newDesc, setNewDesc] = useState(description);
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (id) => {
        try {
            setLoading(true);
            const res = await axios.put(`http://localhost:3000/api/topics/${id}`, {
                "newTitle":newTitle,
	            "newDescription":newDesc
            });
            router.push("/");
        } catch (error) {
            setLoading(false);
            console.error(error);
        }finally{
            setLoading(false);
        }
    }


    return(
        <div>
            <InputField
                placeholder="Title"
                value = {newTitle}
                onChange = {(e) => setNewTitle(e.target.value)}
                />
            <InputField
                placeholder="Description"
                value = {newDesc}
                onChange = {(e) => setNewDesc(e.target.value)}
                />
            <ConfirmButton value = {loading?"Loading...":"Update"} onClick = {() => handleSubmit(id)}/>
        </div>
    );
}