import { NotFoundWrapper } from "./NotFoundStyles"
import { useNavigate } from "react-router-dom";
const NotFound =() =>{
    const navigate = useNavigate ();
    return(
        <NotFoundWrapper>
            <h1> ERROR 404 </h1>
            <h1>NOT FOUND</h1>
            <h2 onClick={() => navigate('/')}>Go Home</h2>
        </NotFoundWrapper>
    )
}

export default NotFound