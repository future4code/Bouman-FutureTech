import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Background from '../img/Background.jpg'

const MainContainer = styled.div `
    height: 30em;
    width: 100%;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 600px;
`

const ImageBackground = styled.div `
    height: 100%;
    width: 100%;
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
`
const DescriptionBackground = styled.div `
    width: 60vw;
    height: 100%;
    opacity: initial;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 400px;
    min-width: 330px;
`

const Titulo = styled.h1 `
font-size: 35px;
    color: #C76103;
`

const P1 = styled.p `
    font-size: 28px;
`
const P2= styled.p `
    font-size: 1rem;
`

function HomePage () {
    return (
        <MainContainer>
            <ImageBackground>
                <DescriptionBackground>
                    <Titulo>FUTURE TECH</Titulo>
                    <P1>
                        Bem vindo a future Tech!
                    </P1>
                    <P2>
                        Somos uma empresa de Técnologia que trabalha com compra e venda de produtos.
                        Estamos nesse mercado de venda a mais de 20 anos buscando trazer o melhor preço e experiência para nossos clientes.
                    </P2>
                </DescriptionBackground>
            </ImageBackground>
        </MainContainer>
    )
}

export default HomePage;