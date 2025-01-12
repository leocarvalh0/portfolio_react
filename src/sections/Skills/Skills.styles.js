import styled from "styled-components"

export const Item = styled.div`
    background-color: #202142;
    width: 120px;
    height: 120px;
    border-bottom: 4px solid #06c58c; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all .3s ease;
    margin-bottom: 80px;

    @media screen and (max-width: 440px) {
        width: 100px;
        height: 100px;
    }

    &:hover {
        transform: scale(1.1);
        color: #06c58c;
    }

    p {
        color: #fff;
        font-size: 14px;
        font-weight: bold;
    }
`

export const Icon = styled.div`
    background-color: transparent;
    font-size: 40px;
    fill: #fff;
    margin-top: 16px;

    @media screen and (max-width: 970px) {
        font-size: 2.0rem;
    }
`

export const SkillsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 20px;

    @media screen and (max-width: 440px) {
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 10px;
    }
`