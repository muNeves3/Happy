import styled from 'styled-components/native';


export const Container = styled.View`
    flex: 1;
`;

export const CalloutContainer = styled.View`
    width: 160px;
    height: 56px;
    padding : 16px;
    background-color: rgba(255,255,255, 0.8);
    border-radius: 16px;
    justify-content: center;
`;

export const CalloutText = styled.Text`
    color: #0089A5;
    font-size: 14px;
    font-family: Nunito_700bold;
`;

export const Footer = styled.View`
    position: absolute;
    left: 24px;
    right: 24px;
    bottom: 32px;

    background-color:   #fff;
    border-radius: 20px;
    height: 56px;
    padding-left: 24px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    box-shadow: 3px 3px black;
`;

export const FooterText = styled.Text`
    font-family: Nunito_700bold;
    color: #8fa7b3;
`;

export const CreateOrphanageButton = styled.TouchableOpacity`
    width: 56px;
    height: 56px;
    background-color: #0EE3DC;
    border-radius: 20px;

    justify-content: center;
    align-items: center;
`;