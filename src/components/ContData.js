import React, {useEffect} from 'react';
import {Container} from 'react-bootstrap'
import CardAnime from '../components/CardAnime';
import { useSelector, useDispatch } from 'react-redux';

// css
import ContAnime from '../css/ContData';

function ContData(){
    const dispatch = useDispatch();
    const state = useSelector((state)=>state);

    useEffect(()=>{
        fetch(`https://api.jikan.moe/v3/search/anime?q=${state.TermBusqueda}`)
        .then(
            result => {
                return result.json()
            }
        )
        .then(
            data => {
                const animes = data.results;
                dispatch({
                    type: 'SET_ANIME_LIST',
                    payload: animes
                });
            }
        )
        .catch(
            err => {
               console.log(err);
            }
        )
        .catch(
            err => {
               console.log(err);
            }
        )
    }, [state.TermBusqueda]);

    return(
        <ContAnime>
            <Container className="mt-5">
                <h1>Series de anime|<small>All</small> </h1>
                <hr/>
                <div className="w-100 d-flex flex-wrap justify-content-center">
                    {
                        state.AnimeList.map( anime => {
                            return(
                                <CardAnime 
                                    key={anime.mal_id}
                                    image_url={anime.image_url} 
                                    title={anime.title} 
                                    synopsis={anime.synopsis}
                                />
                            )
                        })
                    }
                </div>
            </Container>
        </ContAnime>
    )
}

export default ContData;