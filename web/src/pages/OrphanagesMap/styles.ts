import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Popup } from 'react-leaflet';

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
        color: ${props => props.theme.colors.text}
    }

    aside p {
        line-height: 28px;
        margin-top: 24px;
        color: ${props => props.theme.colors.text}
    }

    aside footer {
        display: flex;
        flex-direction: column;

        line-height: 24px;
    }

    aside footer strong {
        font-weight: 800;
        color: ${props => props.theme.colors.text}
    }

    .leaflet-container {
        z-index: 5;
    }
`;

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
        margin-bottom: 5px;
    }
`;

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
        margin-bottom: 10px;
    }
`;

export const StyledPop = styled(Popup)`
   
    .leaflet-popup-content-wrapper {
        background: rgba(255, 255, 255, 0.8);
        border-radius: 20px;
        background: ${props => props.theme.colors.textColor};
        box-shadow: none;
    }

    .leaflet-popup-content {
        color: ${props => props.theme.colors.text};
        font-size: 24px;
        font-weight: bold;
        margin: 8px 12px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .leaflet-popup-content a{
        width: 40px;
        height: 40px;
        background: ${props => props.theme.colors.text};
        box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
        border-radius: 12px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .leaflet-popup-tip-container {
        display: none;
    }
`;