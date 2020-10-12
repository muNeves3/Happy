import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const PageMap = styled.div`
    width: 100vw;
    height: 100vh;

    position: relative;
    display: flex;

    aside {
        width: 440px;
        background: ${props => props.theme.colors.background}; 
        padding: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    aside h2 {
        font-size: 40px;
        font-weight: 800;
        line-height: 42px;
        margin-top: 64px;
        ${props => props.theme.colors.text}
    }

    aside p {
        line-height: 28px;
        margin-top: 24px;
        ${props => props.theme.colors.text}
    }

    aside footer {
        display: flex;
        flex-direction: column;

        line-height: 24px;
    }

    aside footer strong {
        font-weight: 800;
        ${props => props.theme.colors.text}
    }

    .leaflet-container {
        z-index: 5;
    }
`

export const BackToHome = styled(Link)`
    
    width: 64px;
    height: 64px;

    margin-bottom: -25px;

    background: ${props => props.theme.colors.text};
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: .2s all;

    &:hover {
        background: #0ABD92;
        transform: scale(1.05, 1.05);
    }
`

export const CreateOrphanage = styled(Link)`
    position: absolute;

    right: 40px;
    bottom: 40px;

    z-index: 10;

    width: 64px;
    height: 64px;

    background: ${props => props.theme.colors.text};
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: .2s all;
    &:hover {
        background: #0ABD92;
        transform: scale(1.05, 1.05);
    }
`