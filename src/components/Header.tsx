import {Link} from "react-router-dom";
import Button from "./Button.tsx";

function Header({type,handleClick}:{type:"delete"|"add", handleClick:(a:any)=>void}){
    return <header className={"container mx-auto flex pt-5 px-4 md:px-0 justify-between mb-5"}>
        <Link to="/" className={"text-3xl text-blue-500"}>Logo.</Link>
        {type === "add" ? <Button onClick={handleClick} className={"text-blue-500"}>
            <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24" fill="currentColor">
                <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
            </svg>
        </Button> : <Button onClick={(e)=>{
            e.stopPropagation()
            handleClick(e)
        }} className={"text-red-500 shadow"}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} fill="currentColor">
                <path
                    d="M17 4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7V2H17V4ZM9 9V17H11V9H9ZM13 9V17H15V9H13Z"></path>
            </svg>
        </Button>}
    </header>
}

export default Header;