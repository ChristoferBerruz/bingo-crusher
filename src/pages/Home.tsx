import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Home.css';
import BingoCard from '../components/BingoCard/BingoCard';
import {BingoCard as BCard} from '../models/bingo-models';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <BingoCard bingoCard={BCard.defaultCard()} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
