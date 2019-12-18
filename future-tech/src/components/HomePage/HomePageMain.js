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

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const Button = styled.button `
    margin-top: 20px;
    height: 60px;
    width: 100px;
    background-color: #C76103;
    color: white;
    outline: 0;
    border: 0;
    border-radius: 4px;
    :hover{
        cursor: pointer;
        background-color: #C75103;
    }
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

class HomePageMain extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            window: "Home"
        };
    };

    onClickSwitchWindowCadastro = () => {
        if (this.state.window === "Home") {
            this.setState({window: "Cadastro"})
        } else {
            this.setState({window: "Home"})
        }
    }

    onClickSwitchWindowLoja = () => {
        if (this.state.window === "Home") {
            this.setState({window: "Loja"})
        } else {
            this.setState({window: "Home"})
        }
    }

    render () {
        const buttonTextCadastro = this.state.window === "Home" ? "Ir para Cadastro" : "Ir para Home"
        const buttonTextLoja = this.state.window === "Home" ? "Ir para Loja" : "Ir para Home"
        return (
            <MainContainer>
                <ImageBackground>
                    <DescriptionBackground>
                        <Titulo>FUTURE TECH </Titulo>
                        <P1>
                            Bem vindo a future Tech!
                        </P1>
                        <P2>
                            Somos uma empresa de Técnologia que trabalha com compra e venda de produtos.
                            Estamos nesse mercado de venda a mais de 20 anos buscando trazer o melhor preço e experiência para nossos clientes.
                        </P2>
                        <ButtonsContainer>
                            <Button onClick = {this.onClickSwitchWindowLoja}>{buttonTextLoja}</Button>
                            <Button onClick = {this.onClickSwitchWindowCadastro}>{buttonTextCadastro}</Button>
                        </ButtonsContainer>
                    </DescriptionBackground>
                </ImageBackground>
            </MainContainer>
        )
    }
}

export default HomePageMain;
