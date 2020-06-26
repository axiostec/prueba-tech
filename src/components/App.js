import React, {Component} from 'react';

// components
import Header from './Header';
import ContData from './ContData';

// css cont app
import ContApp from '../css/App';

export default class App extends Component{
    render(){
        return(
            <ContApp>
                <Header/>
                <ContData/>
            </ContApp>
        )
    }
}