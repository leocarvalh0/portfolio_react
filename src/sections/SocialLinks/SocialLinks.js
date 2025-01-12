import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Links, IconCustom } from "./SocialLinks.styles"

const SocialLinks = () => {
    return (
        <Links>
            <a href="https://github.com/leocarvalh0" target="_blank">
                <IconCustom as={FaGithub} padrao /> 
            </a>
            <a href="https://www.linkedin.com/in/leonardo-carvalho-ramos/" target="_blank">
                <IconCustom as={FaLinkedin} padrao />
            </a>
            <a href="https://github.com/leocarvalh0https://www.instagram.com/leonard0_carvalho/" target="_blank">
                <IconCustom as={FaInstagram} padrao />
            </a>
        </Links>
    )
}

export default SocialLinks