import React from 'react';
import {useState} from 'react';
import {IonInput} from '@ionic/react';

const CardInput:React.FC = () => {
    const [number, setNumber] = useState<number>();
    return(
        <td>
            <IonInput type="number" value={number} 
            onIonChange={e => setNumber(parseInt(e.detail.value!, 10))} />
        </td>
    )
}
const BingoCardInput:React.FC = () => {
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>B</th>
                        <th>I</th>
                        <th>N</th>
                        <th>G</th>
                        <th>O</th>
                    </tr>
                </thead>
                <tbody>
                    <CardInput />
                    <CardInput />
                    <CardInput />
                    <CardInput />
                    <CardInput />
                </tbody>
            </table>
        </div>
    )
}

export default BingoCardInput;