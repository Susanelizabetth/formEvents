import NavBar from './navBar'
import { LinkData } from './utils/linkData' 

export default function Layouts({ children }) {
    return (
        <div>
            <NavBar formData={LinkData}/>
            { children }  
        </div>     
    )
}
