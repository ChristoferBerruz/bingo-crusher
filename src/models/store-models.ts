import {Card} from './bingo-models';
import {Action} from 'easy-peasy';

export interface StoreModel{
    bingoCards: Card[];
    addCard: Action<StoreModel, Card>;
}