import CardRow from "./CardRow.tsx";
import Button from "./Button.tsx";
import {useNavigate} from "react-router-dom";

import { ICard as OldCard } from "./Home.tsx";

import {SetStateAction} from "react";
interface ICard {
    id:string,
    name:string,
    description:string,
    status:string,
    price:number,
    category_id:string,
    createdAt:string,
    updatedAt:string,
    setData:(a:SetStateAction<OldCard[]>)=>void,
    deleted?:boolean
}

function Card ({id, description, name, price, status, createdAt, updatedAt, category_id, setData, deleted}:ICard) {
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate("/product/"+id)
    }
    const handleDelete = ()=>{
        fetch(`https://auth-rg69.onrender.com/api/products/${id}`, {
            method:"DELETE",
            cache:"no-store",
        }).then(()=>{
            setData((e)=> e.filter((e)=> e.id!== id ))
        }).catch((e)=>{
            throw e;
        })
    }
    return <div
        onClick={(e)=>{
            e.stopPropagation();
            handleClick()}
        }
        className={"p-5 rounded-xl max-w-[250px] w-full bg-slate-50 grid gap-2 shadow border border-slate-100 cursor-pointer hover:scale-105 transition-all"}>
        <CardRow type={"Nomi"} name={name}/>
        <CardRow type={"Narxi"} name={price}/>
        <CardRow type={"Izoh"} name={description}/>
        {deleted && <Button onClick={(e) => {
            e.stopPropagation();
            handleDelete();
        }} className={"text-red-500 bg-white shadow mx-auto"}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} fill="currentColor">
                <path
                    d="M17 4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7V2H17V4ZM9 9V17H11V9H9ZM13 9V17H15V9H13Z"></path>
            </svg>
        </Button>}
    </div>
}
export default Card