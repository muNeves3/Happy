import React, { useState } from 'react';

import { Feather } from '@expo/vector-icons';
import { StyleSheet,View, Switch, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { useNavigation, useRoute } from '@react-navigation/native';
import { ContainerScrollView, Title, Label } from './style';
import * as ImagePicker from 'expo-image-picker';
import api from '../../../services/api';

interface OrphanageDataRouteParams {
  position: {
    latitude: number;
    longitude: number;
  }
}

export default function OrphanageData() {
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<string[]>([])

  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as OrphanageDataRouteParams;

  async function handleSelectImages() {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

    if(status !== 'granted') {
      alert('Eita, precisamos de acesso às suas fotos...');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if(result.cancelled){
      return;
    }

    const { uri: image } = result;

    setImages([...images, image]);
  }

  async function handleCreateOrphanage() {
    const { latitude, longitude } = params.position;

    const data = new FormData();

    data.append('name', name);
    data.append('about', about);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('instructions', instructions);
    data.append('opening_hours', opening_hours);
    data.append('whatsapp', whatsapp);
    data.append('open_on_weekends', String(open_on_weekends));

    images.forEach((image, index) => {
      data.append('images', {
        name: `image_${index}.jpg`,
        type: 'image/jpg',
        uri: image,
      } as any)
    })

    await api.post('/orphanages', data);

    navigation.navigate('OrphanagesMap');
}

  return (
    <ContainerScrollView
      contentContainerStyle={{ padding: 24 }}
    >
      <Title>Dados</Title>

      <Label>Nome</Label>
      <TextInput style={styles.input} value={name} onChangeText={setName}/>

      <Label>Sobre</Label>
      <TextInput style={[styles.input, { height: 110 }]} multiline value={about} onChangeText={setAbout}/>

      <Label>Whatsapp</Label>
      <TextInput style={styles.input} value={whatsapp} onChangeText={setWhatsapp}/>

      <Label>Fotos</Label> 

      <View style={styles.uploadedImagesContainer}>
        {images.map(image => {
          return(
            <Image 
              key={image}
              source={{uri: image}}
              style={styles.uploadedImage}
            />
          )
        })}
      </View>

      <TouchableOpacity style={styles.imagesInput} onPress={handleSelectImages}>
        <Feather name="plus" size={24} color="#15B6D6" />
      </TouchableOpacity>

      <Title>Visitação</Title>

      <Label>Instruções</Label>
      <TextInput style={[styles.input, { height: 110 }]} multiline value={instructions} onChangeText={setInstructions}/>

      <Label>Horario de visitas</Label>
      <TextInput style={styles.input} value={opening_hours} onChangeText={setOpeningHours}/>

      <View style={styles.switchContainer}>
        <Label>Atende final de semana?</Label>
        <Switch
          thumbColor="#fff"
          trackColor={{ false: '#ccc', true: '#39CC83' }}
          value={open_on_weekends}
          onValueChange={setOpenOnWeekends}
        />
      </View>

      <RectButton style={styles.nextButton} onPress={handleCreateOrphanage}>
        <Text style={styles.nextButtonText}>Cadastrar</Text>
      </RectButton>
    </ContainerScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
    title: {
      color: '#5c8599',
      fontSize: 24,
      fontFamily: 'Nunito_700Bold',
      marginBottom: 32,
      paddingBottom: 24,
      borderBottomWidth: 0.8,
      borderBottomColor: '#D3E2E6'
    },
  
    label: {
      color: '#8fa7b3',
      fontFamily: 'Nunito_600SemiBold',
      marginBottom: 8,
    },
  
    comment: {
      fontSize: 11,
      color: '#8fa7b3',
    },
  
    input: {
      backgroundColor: '#fff',
      borderWidth: 1.4,
      borderColor: '#d3e2e6',
      borderRadius: 20,
      height: 56,
      paddingVertical: 18,
      paddingHorizontal: 24,
      marginBottom: 16,
      textAlignVertical: 'top',
    },
  
    uploadedImagesContainer: {
      flexDirection: 'row',
    },

    uploadedImage: {
      width: 64,
      height: 64,
      borderRadius: 20,
      marginBottom: 32,
      marginRight: 8,
    },

    imagesInput: {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      borderStyle: 'dashed',
      borderColor: '#96D2F0',
      borderWidth: 1.4,
      borderRadius: 20,
      height: 56,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 32,
    },
  
    switchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 16,
    },
  
    nextButton: {
      backgroundColor: '#15c3d6',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      height: 56,
      marginTop: 32,
    },
  
    nextButtonText: {
      fontFamily: 'Nunito_800ExtraBold',
      fontSize: 16,
      color: '#FFF',
    }
  })
