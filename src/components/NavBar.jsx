import {NavLinks, SocialLinks} from '../components'
import { Link } from 'react-router-dom'
import { HiOutlineBars3 } from "react-icons/all"
import {useGlobalContext} from '../contexts/AppContext'
const NavBar = () => {
    const {openSidebar} = useGlobalContext()
    return (
        <nav className='navbar'>
            <div className="nav-center">
                <Link className="nav-logo" to='/'>
                    gakure
                </Link>
                <button className="nav-toggle" onClick={openSidebar}>
                    <HiOutlineBars3 />
                </button>
                <NavLinks />
                <SocialLinks />
            </div>
        </nav>
    )
}

export default NavBar