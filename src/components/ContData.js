import React, {useEffect, useState} from 'react';
import {Container} from 'react-bootstrap'
import CardAnime from '../components/CardAnime';

// css
import ContAnime from '../css/ContData';

function ContData(){
    const [AnimeList, setAnimeList] = useState([]);

    useEffect(()=>{
        fetch('https://api.jikan.moe/v3/search/anime?q=dragon')
        .then(
            result => {
                return result.json()
            }
        )
        .then(
            data => {
                console.log(data.results);
                setAnimeList(data.results);
            }
        )
        .catch(
            err => {
                alert(err);
            }
        )
        .catch(
            err => {
                alert(err);
            }
        )
    }, []);

    return(
        <ContAnime>
            <Container className="mt-5">
                <h1>Series de anime|<small>All</small> </h1>
                <hr/>
                <div className="w-100 d-flex flex-wrap justify-content-center">
                    {
                        AnimeList.map( anime => {
                            return(
                                <CardAnime 
                                    mal_id={anime.mal_id} 
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