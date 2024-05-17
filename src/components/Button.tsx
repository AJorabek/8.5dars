import {ReactNode} from "react";

function Button ({children,className, onClick}:{children:ReactNode, className?:string, onClick?:(a?:any)=>void}) {
    return <button
        onClick={onClick}
        className={"w-10 h-10 flex items-center justify-center rounded-lg bg-slate-50 active:scale-90 hover:opacity-85 transition-all "+className}>
        {children}
    </button>
}
export default Button;