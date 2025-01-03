import styled from "styled-components";
import { FaGithub  } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Links = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30px;
    height: 350px;
    position: fixed;
    right: 70px;
    bottom: 0;
    
    @media screen and (max-width: 768px) {
        display: none;
    }

    @media screen and (max-width: 970px) {
        right: 30px;
    }

    &::after {
        content: "";
        width: 2px;
        height: 156px;
        fill: #ccd6f6;
        background-color: #ccd6f6;

        @media screen and (max-width: 970px) {
            height: 170px;
        }
    }
    
    :hover {
        cursor: pointer;
        fill: #06c58c;
        transition: .5s;
        transform: translateY(-5px);
    }
`

const Icon = styled.div`
    font-size: 24px;
    margin-bottom: 40px;
    fill: #ccd6f6;

    @media screen and (max-width: 970px) {
        font-size: 2.0rem;
    }
`;

const SocialLinks = () => {
    return (
        <Links>
            <Icon as={FaGithub} />
            <Icon as={FaLinkedin} />
            <Icon as={FaInstagram} />
        </Links>
    )
}

export default SocialLinks