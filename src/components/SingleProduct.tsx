import Card from "./Card.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ICard} from "./Home.tsx";

function SingleProduct(){
    const navigate = useNavigate()
    const {id} = useParams();
    const [data, setData] = useState<ICard>()
    const [loading, setLoading] = useState(true)
    const  getData = async ()=>{
        const resp = await fetch("https://auth-rg69.onrender.com/api/products/"+id)
        const  data = await resp.json()
        if (data.id) {
            setData(data)
        }else{
            navigate("/")
        }
        setLoading(false)
    }
    useEffect(() => {
        getData()
    }, []);
    const navigateTo = ()=> {
        navigate("/")
        return <span className={"text-red-500 text-2xl"}>Error this product is not defined!</span>
    }
    return <main className={"h-full flex items-center justify-center"}>
        {loading ? <span className={"text-2xl text-blue-500"}>Loading...</span> : data ? <Card deleted={false} {...data}/> : navigateTo()}
    </main>
}
export default SingleProduct;