import Header from "./Header.tsx";
import Card from "./Card.tsx";
import {useEffect, useState} from "react";
import {createPortal} from "react-dom";
import Modal from "./Modal.tsx";

export interface ICard {
    id:string,
    name:string,
    description:string,
    status:string,
    price:number,
    category_id:string,
    createdAt:string,
    updatedAt:string,
}

function Home (){
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<ICard[]>([]);
    const [open, setOpen] =useState(false)
    const handleClick = ()=>{
    setOpen(true)
    }
    const getData = async ()=>{
        const  resp = await fetch("https://auth-rg69.onrender.com/api/products/all")
        const  data = await resp.json()
        setLoading(false)
        setData(data.filter((e:ICard)=> e.name !== null))
    }
    useEffect(() => {
        getData().then(()=>{
            console.log("salom")
        })
    }, []);
    return <main className="h-full" id="mainSection" onClick={(e)=>{
        e.stopPropagation()
        setOpen((prev)=> {
            if (prev) return false
            return prev
        })
    }}>
        <Header type={"add"} handleClick={(e)=>{
            e.stopPropagation()
            handleClick()
        }}/>
        <main className={"flex justify-center gap-6 flex-wrap"}>
            {!loading?
             data.filter((e:ICard )=> {
                  return e.name!== null && e.status !==null && ((e.status.toLowerCase() !== "active") || (e.status.toLowerCase() !== "activ"))
             }).map((e)=> <Card deleted={true} {...e} setData={setData} key={e.id}/>):<span className={"text-xl text-blue-500 font-bold capitalize"}>loading...</span>
            }
        </main>
        {createPortal(<Modal setData={setData} open={open} setOpen={setOpen}/>, document.body)}
    </main>
}

export default Home;