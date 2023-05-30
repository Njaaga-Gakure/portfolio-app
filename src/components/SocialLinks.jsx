import { socialLinks} from "../utils/data"
const SocialLinks = () => {
    return (
        <ul className="nav-social">
                    {socialLinks.map(({id, icon, url}) => {
                        return (
                            <li key={id}>
                                <a href={url} target="_blank" rel="noreferrer">
                                    {icon}
                                </a>
                            </li>
                        )
                    })}
        </ul>
    )
} 
export default SocialLinks