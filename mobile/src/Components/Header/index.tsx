import React from 'react';
import { View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { Container, Titile } from './style';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
    title: string;
    showCancel?: boolean;
}


export default function Header({ title, showCancel = true }: HeaderProps) {
    const navigation = useNavigation();

    
    function handleGoBackToAppHomePage() {
        navigation.navigate('OrphanagesMap');
    }

    return(
        <Container>
            <BorderlessButton onPress={navigation.goBack}>
                <Feather name="arrow-left" size={24} color="#15b6d6"/>
            </BorderlessButton>
            <Titile>
                {title}
            </Titile>

            { showCancel ? (
                <BorderlessButton onPress={handleGoBackToAppHomePage}>
                    <Feather name="x" size={24} color="#ff669D"/>
                </BorderlessButton>
            ) : (
                <View />
            ) }
        </Container>
    );
}