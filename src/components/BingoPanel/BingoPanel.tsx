import React from 'react';
import {
    IonGrid,
    IonRow,
    IonCol
} from '@ionic/react';
import {useStoreState} from '../../store/hooks';
import BingoCard from '../BingoCard/BingoCard';

const BingoPanel:React.FC = () => {

    const bingoCards = useStoreState((state) => state.bingoCards);
    return(
        <IonGrid>
            <IonRow>
            {
                bingoCards.map((card) => (
                    <IonCol size="6" >
                        <BingoCard bingoCard={card} />
                    </IonCol>
                ))
            }
            </IonRow>
        </IonGrid>
    )
}

export default BingoPanel;