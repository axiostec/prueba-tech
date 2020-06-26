import React from 'react';
import {Provider} from 'react-redux'
import {createStore} from 'redux'

// components
import Header from './Header';
import ContData from './ContData';

// css cont app
import ContApp from '../css/App';

const initialState = {
    AnimeList: []
}

function reducer(state, action){
    console.log(action);
    switch (action.type) {
        case 'SET_ANIME_LIST':
            console.log('se actualiza la lista de anime');
            return {...state, AnimeList: action.payload};
        default:
            return state;
    }
}

const store = createStore(reducer, initialState);

function App(){
    return(
        <Provider store={store}>
            <ContApp>
                <Header/>
                <ContData/>
            </ContApp>
        </Provider>
    )
}

export default App;