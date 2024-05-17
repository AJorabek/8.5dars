import {ReactNode} from "react";

function CardRow({name,type}:{type:ReactNode, name:ReactNode}) {
    return <h1 className={"text-xl"}>{type}: <span
        className={"text-blue-500 font-semibold capitalize"}>{name}</span></h1>
}

export default CardRow;