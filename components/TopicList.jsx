import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import DeleteButton from "./DeleteButton";
import CompleteButton from "./CompleteButton";

const getTopics = async () => {
    try {
        const res = await axios.get("http://localhost:3000/api/topics", {
            // query URL without using browser cache
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': '0',
            },
        });
        return res.data;
    } catch (error) {

    }
}

export default async function TopicList() {
    const topics = await getTopics();
    return (
        <div>
            {topics.map((topic) => (
                <div className= {`border-2 border-solid border-black p-2 my-2 ${topic.isCompleted?"bg-green-200":""}`}>
                    <div className="flex flex-row justify-between items-center">
                        <h2 className="text-xl font-bold">{topic.title}</h2>
                        <div className="flex flex-row px-3 py-3 space-x-3">

                            <CompleteButton id={topic._id} />
                            <DeleteButton id={topic._id} />

                            <Link href={`/edittopic/${topic._id}`}>
                                <Image
                                    src="/edit-100.png"
                                    width={20}
                                    height={20}
                                    alt="edit icon" />

                            </Link>

                        </div>
                    </div>
                    <div>
                        <p>
                            {topic.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}