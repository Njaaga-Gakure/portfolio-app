import { RxCross1 } from 'react-icons/all'
import {Link} from 'react-router-dom'
import { pageLinks} from '../utils/data'
import {useGlobalContext} from '../contexts/AppContext'
const SideBar = () => {
    const {closeSidebar, isSidebarOpen} = useGlobalContext()
    return (
        <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
            <div className="sidebar-header">
                <Link onClick={closeSidebar} className="nav-logo" to='/'>
                        gakure
                </Link>
                <button onClick={closeSidebar} className='close-sidebar-btn'>
                    <RxCross1/>
                </button>
            </div>
            <ul className='sidebar-links'>
            {pageLinks.map(({id, name, path, icon}) => {
            return (
                <li key={id}>
                    <Link onClick={closeSidebar} to={path}>
                       {icon} {name}
                    </Link>
                </li>
            )
         })}
            </ul>
        </aside>
    )
}

export default SideBar
