import {createStore, action} from 'easy-peasy';
import {StoreModel} from '../models/store-models';

export const store = createStore<StoreModel>({
    bingoCards: [],
    addCard: action((state, payload) => {
        state.bingoCards.push(payload);
    })
});