import React from 'react';
import {useState} from 'react';
import {
    IonGrid,
    IonCol,
    IonRow
} from '@ionic/react';
import './GameControls.css';

const PatternInput:React.FC = () => {

    const [isSelected, setSelected] = useState(false);

    return(
        <td>
            <button className={isSelected? "selected":"not-selected"}
            onClick={() => setSelected(!isSelected)}>

            </button>
        </td>
    )
}
const GamePattern:React.FC = () => {
    return(
        <div className="pattern-card">
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
                    <tr>
                        <PatternInput />
                        <PatternInput />
                        <PatternInput />
                        <PatternInput />
                        <PatternInput />
                    </tr>
                    <tr>
                        <PatternInput />
                        <PatternInput />
                        <PatternInput />
                        <PatternInput />
                        <PatternInput />
                    </tr>
                    <tr>
                        <PatternInput />
                        <PatternInput />
                        <td></td>
                        <PatternInput />
                        <PatternInput />
                    </tr>
                    <tr>
                        <PatternInput />
                        <PatternInput />
                        <PatternInput />
                        <PatternInput />
                        <PatternInput />
                    </tr>
                    <tr>
                        <PatternInput />
                        <PatternInput />
                        <PatternInput />
                        <PatternInput />
                        <PatternInput />
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
const GameControls:React.FC = () => {
    return(
        <IonGrid>
            <IonRow>
                <IonCol size="12">
                    <GamePattern />
                </IonCol>
            </IonRow>
        </IonGrid>
    )    
}

export default GameControls;