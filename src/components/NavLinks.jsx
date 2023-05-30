import { pageLinks, socialLinks} from "../utils/data"
import { Link } from "react-router-dom"
const NavLinks = () => {
    return (
        <ul className="nav-links">
        {pageLinks.map(({id, name, path}) => {
            return (
                <li key={id}>
                    <Link to={path}>
                        {name}
                    </Link>
                </li>
            )
         })}
        </ul>
    )
}
export default NavLinks