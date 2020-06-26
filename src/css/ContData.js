import styled from 'styled-components';

const ContAnime = styled.div`
    .CardAnime{
        width: 13rem;
        border-radius: 10px;
        overflow: hidden;
        margin-right: 5px;
        margin-bottom: 5px;
    }
    .textSinopsis{
        font-size: .7em;
    }
    small{
        font-weight: 300;
    }
    img{
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
`;

export default ContAnime;