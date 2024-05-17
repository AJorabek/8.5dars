
import Home from "./components/Home.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import SingleProduct from "./components/SingleProduct.tsx";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Home></Home>,
    },
    {
        path:"/product/:id",
        element:<SingleProduct/>,
    }
])
function App (){
    return <RouterProvider router={router}></RouterProvider>
}
export default App;