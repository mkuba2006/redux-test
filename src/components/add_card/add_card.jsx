import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Add_CART = () => {
    const dispatch = useSelector(state => state.auth.isLogged)

    useEffect(()=>{
        console.log(dispatch)
    }
    ,[dispatch])

    return(
        <div>
            <Link to="/items" >Create Folder</Link>
        </div>
    )
}

export default Add_CART;