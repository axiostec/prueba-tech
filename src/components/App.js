import React from 'react';
import { Provider } from 'react-redux'
import { createStore} from 'redux'

// components
import Header from './Header';
import ContData from './ContData';

// css cont app
import ContApp from '../css/App';

const initialState = {
    TermBusqueda: 'dragon',
    AnimeList: []
}


function reducer(state, action){
    console.log('Estado Total');
    console.log(state);
    switch (action.type) {
        case 'SET_SEARCH_TERM':
            console.log('se actualiza el termino de busqueda');
            return {...state, TermBusqueda: action.payload};
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
                <Header />
                <ContData />
            </ContApp>
        </Provider>
    )
}

export default App;