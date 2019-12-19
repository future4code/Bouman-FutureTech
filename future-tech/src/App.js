import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import HomePage from './components/HomePage/HomePage';

// Estilização

const Header = styled.div `
  width: 100%;
  height: 80px;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
`
const LogoContainer = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const LogoImage = styled.img `
  height: 100%;
`

const ButtonsContainer = styled.div`
    display: flex;
    justify-content:space-evenly;
    align-items: center;
    width: 400px;
`

const ButtonLoja = styled.button `
    height: 50px;
    width: 20vw;
    background-color: #C76103;
    color: white;
    outline: 0;
    border: 0;
    border-radius: 4px;
    max-width: 100px;
    :hover{
        cursor: pointer;
        background-color: #C75103;
    }
`

const ButtonFormulario = styled.button `
    height: 50px;
    width: 20vw;
    background-color: #C76103;
    color: white;
    outline: 0;
    border: 0;
    border-radius: 4px;
    max-width: 100px;
    :hover{
        cursor: pointer;
        background-color: #C75103;
    }
`
// Código

class App extends React.Component{
  constructor (props) {
    super(props);

    this.state = {
        window: "Loja"
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

  render() {
    const buttonTextCadastro = this.state.window === "Home" ? "Ir para Cadastro" : "Ir para Home";
    const buttonTextLoja = this.state.window === "Home" ? "Ir para Loja" : "Ir para Home";

    const isLojaSelected = this.state.window === "Home" || "Loja";
    const isCadastroSelected = this.state.window === "Home" || "Cadastro" && this.state.window ==! "Loja";

    let window;
    
    return(
      <div>     
        <Header>
          <LogoContainer>
            <LogoImage src = {LogoMarca}/>
          </LogoContainer>
          <ButtonsContainer>
            {isLojaSelected && <ButtonLoja onClick = {this.onClickSwitchWindowLoja}>{buttonTextLoja}</ButtonLoja>}
            {isCadastroSelected && <ButtonFormulario onClick = {this.onClickSwitchWindowCadastro}>{buttonTextCadastro}</ButtonFormulario>}
          </ButtonsContainer>
        </Header>
        {window}
        <Footer/>
      </div>
    )
  }
}

export default App;