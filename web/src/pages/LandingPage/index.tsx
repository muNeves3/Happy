import React from 'react';
import { ContentWrapper, EnterApp, Location, LandingPageWrap } from './style';
import { FiArrowRight } from "react-icons/fi";
import logoImg from '../../Images/logo.svg';



const LandingPage: React.FC = () => {

  return (
    <LandingPageWrap>
     <ContentWrapper>

        <img src={logoImg} alt="Happy"/>

        <main>
            <h1>Leve felicidade para o mundo</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <Location>
            <strong>Londrina</strong>
            <span>Paraná</span>

        </Location>
            <EnterApp to="/map">
                <FiArrowRight size={26} color="#1E1C1C"/>
            </EnterApp>
     </ContentWrapper>
     </LandingPageWrap>
  );
}

export default LandingPage;
