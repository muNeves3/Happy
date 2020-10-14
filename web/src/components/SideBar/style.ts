import styled from 'styled-components';

export const AsideBar = styled.aside`

    position: fixed;
    height: 100%;
    padding: 32px 24px;
    background: ${props => props.theme.colors.background};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    img {
        width: 48px;
    }

   footer a,
   footer button {
    width: 48px;
    height: 48px;

    border: 0;

    background: ${props => props.theme.colors.text};
    border-radius: 16px;

    cursor: pointer;

    transition: all 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;
  }

   footer a:hover,
   footer button:hover {
    background: #17d6eb;
    /* transform: scale(1.05, 1.05); */
    margin-bottom: 10px;
  }

`