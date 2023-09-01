import Link from "next/link";

export default function Header(){
    return(
        <div className="flex flex-row justify-between bg-black text-white items-center px-6 my-3">
        <Link href={"/"}><p>TODO List.</p></Link>
        <Link href={"./addtopic"} className="py-2 px-3 bg-slate-200 my-2 text-black">ADD TOPIC</Link>
      </div>
    );
}