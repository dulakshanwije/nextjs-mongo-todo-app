import Form from "@/components/Form";
import axios from "axios";

const getTopicById = async (id) => {
    try {
        const res = await axios.get(`http://localhost:3000/api/topics/${id}`, {
            // query URL without using browser cache
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': '0',
            },
        });
        return res.data.topic;
    } catch (error) {
        console.log(error);
    }
}

export default async function EditTopic({params}) {

    const topic = await getTopicById(params.id);
    const {title, description} = topic;

    return (
        <Form id = {params.id} title = {title} description = {description}/>
    );
}