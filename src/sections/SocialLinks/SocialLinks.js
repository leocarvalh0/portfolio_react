import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Links, Icon } from "./SocialLinks.styles"

const SocialLinks = () => {
    return (
        <Links>
            <a href="https://github.com/leocarvalh0" target="_blank">
                <Icon as={FaGithub}/> 
            </a>
            <a href="https://www.linkedin.com/in/leonardo-carvalho-ramos/" target="_blank">
                <Icon as={FaLinkedin} />
            </a>
            <a href="https://github.com/leocarvalh0https://www.instagram.com/leonard0_carvalho/" target="_blank">
                <Icon as={FaInstagram} />
            </a>
        </Links>
    )
}

export default SocialLinks