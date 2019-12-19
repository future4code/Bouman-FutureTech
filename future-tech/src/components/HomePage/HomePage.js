import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Background from '../img/Background.jpg'

const MainContainer = styled.div `
    height: 600px;
    width: 100%;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
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
    width: 400px;
    height: 100%;
    opacity: initial;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Titulo = styled.h1 `
font-size: 35px;
    color: #C76103;
`

const P1 = styled.p `
    font-size: 28px;
`
const P2= styled.p `
    font-size: 20px;
`

class HomePage extends React.Component {
    constructor (props) {
        super(props);

        this.state = {

        };
    };

    render () {
        return (
            <MainContainer>
                <ImageBackground>
                    <DescriptionBackground>
                        <Titulo>FUTURE TECH </Titulo>
                        <P1>
                            Bem vindo a future Tech!
                        </P1>
                        <P2>
                            Somos uma empresa de Tecnologia que trabalha com compra e venda de produtos.
                            Estamos nesse mercado de venda a mais de 20 anos buscando trazer o melhor preço e experiência para nossos clientes.
                        </P2>
                    </DescriptionBackground>
                </ImageBackground>
            </MainContainer>
        )
    }
}

export default HomePage;