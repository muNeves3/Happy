import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const LandingPageWrap = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${props => props.theme.colors.background};
    /* background: #F3C705; */
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContentWrapper = styled.div`
    position: relative;
    
    width: 100%;
    max-width: 1100px;

    height: 100%;
    max-height: 680px;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;

    background: url(${props => props.theme.landing}) no-repeat 76% center;
 

    main {
        max-width: 350px;
    }

    main h1 {
        font-size: 76px;
        font-weight: 900;
        line-height: 70px;
        color: ${props => props.theme.colors.text}
    }

    main p {
        margin-top: 40px;
        font-size: 24px;
        line-height: 34px;
        color: ${props => props.theme.colors.text};
    }
`

export const Location = styled.div`
    position: absolute;
    right: 0;
    top: 0;

    font-size: 20px;
    line-height: 34px;

    display: flex;
    flex-direction: column;

    text-align: right;

    strong {
        font-weight: 800;
        color: ${props => props.theme.colors.text}
    }

    span {
        color: ${props => props.theme.colors.text}
    }
`

export const EnterApp = styled(Link)`
    position: absolute;
    right: 0;
    bottom: 0;

    width: 80px;
    height: 80px;
    background: ${props => props.theme.colors.text};
    border-radius: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: .2s all;

    &:hover {
        background:#0ABD92;
        margin-bottom: 10px;
    }
`