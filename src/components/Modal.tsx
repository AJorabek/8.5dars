import {FormEvent, SetStateAction, useState} from "react";
import FormInput from "./FormInput.tsx"
import {ICard} from "./Home.tsx";
import {Toaster,toast} from "sonner"
import {createPortal} from "react-dom";

interface INewCard{
    description: string,
    name:string,
    price:number,
    category_id:string,
    status:string,
}

function Modal({open, setOpen, setData}:{open:boolean, setOpen:(a:SetStateAction<boolean>)=>void, setData:(a:SetStateAction<ICard[]>) => void}) {
    const [loading,setLoading] = useState<boolean>(false)
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const curForm = e
        const form:FormData = new FormData(e.currentTarget)
        const price = Number(form.get("price"))
        const name = (form.get("name") as string)
        const description = (form.get("description") as string)
        const newData:INewCard ={
            name,
            price,
            description,
            status:"activ",
            category_id:"2",
        }
        setLoading(true)
        fetch("https://auth-rg69.onrender.com/api/products/", {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newData),
        }).then((e:Response)=>{
            setOpen(false)
            toast.success("Successfully updated product!")
            setLoading(false)
            return e.json();
        }).then((e)=> {
            console.log(e)
            setData((prev:ICard[])=>[...prev, e])
            curForm.reset()
        }).catch((e)=>console.log(e))
    }
    return <dialog open={open} onClick={(e)=>e.stopPropagation()} className={"flex p-5 scale-0 open:scale-100 max-w-[400px] w-full top-1/2 -translate-y-1/2 fixed bg-slate-50 rounded-xl transition-all backdrop:bg-black/90 shadow"}>

        <form className={"min-w-full grid gap-3 h-full"} onSubmit={handleSubmit}>
            <FormInput name={"name"} type={"text"} />
            <FormInput name={"price"} type={"number"}/>
            <FormInput name={"description"} type={"text"}/>
            <button type={"submit"} className={"w-[200px] py-2 text-white rounded-lg disabled:opacity-65 disabled:hover:scale-100 transition-all active:scale-90 bg-blue-500 mx-auto"} disabled={loading}>{loading ? "Sending...":"Submit"}</button>
        </form>
        {createPortal(<Toaster richColors position={"top-right"}/>, document.body)}
    </dialog>
}

export default Modal;