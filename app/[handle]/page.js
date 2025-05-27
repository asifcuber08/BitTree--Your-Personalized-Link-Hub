import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation";

export default async function Page({ params }) {
    const handle = (await params).handle

    const client = await clientPromise;
    const db = client.db("bittree")
    const collection = db.collection("links")

    // If the handle is already claimed, you cannot create the bittree
    const item = await collection.findOne({handle: handle})
    if(!item){
        return notFound()
    }

    const item2 = {
        "_id": {
            "$oid": "6835916e47875c76ff88bd36"
        },
        "links": [
            {
                "link": "https://www.facebook.com/asif.shamim.216652",
                "linktext": "facebook"
            },
            {
                "link": "https://www.instagram.com/asif_cuber_08/",
                "linktext": "instagram"
            },
            {
                "link": "https://www.github.com/asifcuber08",
                "linktext": "github"
            }
        ],
        "handle": "asif_cuber",
        "pic": "https://avatars.githubusercontent.com/u/171585822?v=4"
    }

    return <div className="bg-[#edbb6b] min-h-[100vh] grid grid-cols-2 py-10">
        {item && <div className="photo flex justify-center flex-col items-center gap-4">
            <img className="rounded-full h-32" src={item.pic} alt="" />
            <span className="font-bold text-xl">@{item.handle}</span>
            <span className="desc w-80 text-center font-semibold">{item.desc}</span>
            <div className="links font-medium cursor-pointer">
                {item.links.map((item, index)=>{
                    return  <Link key={index} href={item.link}> <div className="bg-purple-200 py-4 shadow-lg px-2 rounded-md my-3 min-w-96 flex justify-center" >
                       {item.linktext}
                    </div></Link>
                })}
            </div>
        </div>}
          <div className=" w-full h-screen">
                <img className='h-full object-contain ' src="/handlepage.png" alt="" />
            </div>

    </div>
}