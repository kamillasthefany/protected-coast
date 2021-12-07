import styled from 'styled-components';
import imagem from '../../assets/img/bg.jpg'

export const Container = styled.div`
    height: 100vh;
    background:url(${imagem});
    background-size:cover;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgba(250, 250, 250, 0.59); 

    h2{
        line-height: 0!important;
    }
`;


