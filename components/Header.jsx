import Link from "next/link";

export default function Header(){
    return(
        <div className="flex flex-row justify-between bg-dark-color-1 items-center px-6 my-3 rounded-lg text-white">
        <Link href={"/"}><p>NOTES List.</p></Link>
        <Link href={"./addtopic"} className="py-2 px-3 bg-blue-400 hover:bg-blue-300 rounded-md my-2 text-black">CREATE NEW NOTE</Link>
      </div>
    );
}