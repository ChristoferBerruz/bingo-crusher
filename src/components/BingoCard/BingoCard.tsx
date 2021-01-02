import React from 'react';
import {useState} from 'react';
import {Card} from '../../models/bingo-models';
import './BingoCard.css';

const BingoButton:React.FC<{num:number}> = ({num}) => {
    
    const [isSelected, setSelected] = useState(false);
    return(
        <td>
            <button className={isSelected? "selected":"not-selected"}
                onClick={() => setSelected(!isSelected)}
            >
                {num}
            </button>
        </td>
    )
}
const BingoCard:React.FC<{bingoCard:Card}> = ({bingoCard}) => {

    let cardGame = bingoCard.getCardGame();
    let cardNumber = bingoCard.getCardNumber();

    return(
        <div className="bingo-card">
            <h2>{cardNumber}</h2>
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
                        <BingoButton num={cardGame[0][0]} />
                        <BingoButton num={cardGame[0][1]} />
                        <BingoButton num={cardGame[0][2]} />
                        <BingoButton num={cardGame[0][3]} />
                        <BingoButton num={cardGame[0][4]} />
                    </tr>
                    <tr>
                        <BingoButton num={cardGame[1][0]} />
                        <BingoButton num={cardGame[1][1]} />
                        <BingoButton num={cardGame[1][2]} />
                        <BingoButton num={cardGame[1][3]} />
                        <BingoButton num={cardGame[1][4]} />
                    </tr>
                    <tr>
                        <BingoButton num={cardGame[2][0]} />
                        <BingoButton num={cardGame[2][1]} />
                        <td className="selected">Free</td>
                        <BingoButton num={cardGame[2][3]} />
                        <BingoButton num={cardGame[2][4]} />
                    </tr>
                    <tr>
                        <BingoButton num={cardGame[3][0]} />
                        <BingoButton num={cardGame[3][1]} />
                        <BingoButton num={cardGame[3][2]} />
                        <BingoButton num={cardGame[3][3]} />
                        <BingoButton num={cardGame[3][4]} />
                    </tr>
                    <tr>
                        <BingoButton num={cardGame[4][0]} />
                        <BingoButton num={cardGame[4][1]} />
                        <BingoButton num={cardGame[4][2]} />
                        <BingoButton num={cardGame[4][3]} />
                        <BingoButton num={cardGame[4][4]} />
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default BingoCard;