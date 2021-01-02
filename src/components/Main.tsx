import React from 'react';
import {useState} from 'react';
import {
    IonGrid,
    IonCol,
    IonRow,
    IonFab,
    IonFabButton,
    IonModal
} from '@ionic/react';
import {useStoreActions} from '../store/hooks';
import BingoPanel from './BingoPanel/BingoPanel';
import GameControls from './GameControls/GameControls';
import BingoCardInput from './BingoCardInput/BingoCardInput';
import {Card, Game} from '../models/bingo-models';

const BingoCrusher:React.FC = () => {
    const addBingoCard = useStoreActions((actions) => actions.addCard);
    const [isCardModalOpen, setCardModelOpen] = useState<boolean>(false);
    return(
        <React.Fragment>
            <IonGrid>
                <IonRow>
                    <IonCol sizeMd="3">
                        <GameControls />
                    </IonCol>
                    <IonCol sizeMd="9">
                        <BingoPanel />
                    </IonCol>
                </IonRow>
            </IonGrid>

            <IonModal isOpen={isCardModalOpen} onDidDismiss={() => setCardModelOpen(false)}>
                <BingoCardInput />
            </IonModal>
            <IonFab vertical="bottom" horizontal="start" slot="fixed">
                <IonFabButton onClick={() => setCardModelOpen(true)}>
                    Click me
                </IonFabButton>
            </IonFab>
        </React.Fragment>
    )
}

export default BingoCrusher;