import React, { FormEvent, useState, ChangeEvent } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';

import { FiPlus, FiX } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import {
  PageCreateOrphanage,
  PageCreateOrphanageForm,
  InputBlock,
  NewImage,
  ButtonSelect,
  ConfirmButton,
  ImagesContainer,
  ImageWrapper,
} from './style';

import Sidebar from '../../components/SideBar';
import MapIcon from '../../utils/mapIcon';
import api from '../../services/api';

const CreateOrphanage: React.FC = () => {
  const history = useHistory();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [whatsapp, setWhatsApp] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;

    setPosition({
      latitude: lat,
      longitude: lng,
    });
  }

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }

    const selectedImages = images;

    selectedImages.push(...Array.from(event.target.files));

    setImages(selectedImages);
    console.log(images);

    const selectedImagesPreview = selectedImages.map(image => {
      console.log(image);
      return URL.createObjectURL(image);
    });

    setPreviewImages(selectedImagesPreview);
  }

  function handleDeleteImages(index: number) {
    const deletedImagesPreview = previewImages.filter(
      (image, compareIndex) => index !== compareIndex
    );

    setPreviewImages(deletedImagesPreview);

    const deletedImages = images.filter(
      (image, compareIndex) => index !== compareIndex,
    );

    setImages(deletedImages);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { latitude, longitude } = position;

    const data = new FormData();

    data.append('name', name);
    data.append('about', about);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('instructions', instructions);
    data.append('opening_hours', opening_hours);
    data.append('whatsapp', whatsapp);
    data.append('open_on_weekends', String(open_on_weekends));

    images.forEach(image => {
      data.append('images', image);
    });

    await api.post('orphanages', data);

    alert('Cadastro realizado com sucesso');

    history.push('/map');
  }

  return (
    <PageCreateOrphanage>
      <Sidebar />

      <main>
        <PageCreateOrphanageForm onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-23.2882176, -51.147571]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onclick={handleMapClick}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={MapIcon}
                  position={[position.latitude, position.longitude]}
                />
              )}
            </Map>

            <InputBlock>
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <textarea
                id="name"
                maxLength={300}
                value={about}
                onChange={event => setAbout(event.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="whatsapp">Número de Whatsapp</label>
              <input
                id="whatsapp"
                value={whatsapp}
                onChange={event => setWhatsApp(event.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="images">Fotos</label>

              <ImagesContainer>
                {previewImages.map((imageUrl, index) => {
                  return (
                    <div key={imageUrl}>
                      <img src={imageUrl} alt={name}/>

                      <button type="button" onClick={() => handleDeleteImages(index)}>
                        <FiX size={20} color="#F8659E"/>
                      </button>
                    </div>
                  );
                })}

                <NewImage htmlFor="image[]">
                  <FiPlus size={24} color="#15b6d6" />
                </NewImage>
              </ImagesContainer>

              <input
                multiple
                onChange={handleSelectImages}
                type="file"
                id="image[]"
              />
            </InputBlock>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <InputBlock>
              <label htmlFor="instructions">Instruções</label>
              <textarea
                id="instructions"
                value={instructions}
                onChange={event => setInstructions(event.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="opening_hours">Horário de funcionamento</label>
              <input
                id="opening_hours"
                value={opening_hours}
                onChange={event => setOpeningHours(event.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <ButtonSelect>
                <button
                  type="button"
                  className={open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(true)}
                >
                  Sim
                </button>
                <button
                  type="button"
                  className={!open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(false)}
                >
                  Não
                </button>
              </ButtonSelect>
            </InputBlock>
          </fieldset>

          <ConfirmButton>Confirmar</ConfirmButton>
        </PageCreateOrphanageForm>
      </main>
    </PageCreateOrphanage>
  );
};

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;

export default CreateOrphanage;
