import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import CarrinhoContainer from '../CarrinhoContainer/CarrinhoContainer'

// Estilização

const MainContainer = styled.div `
  width: 100%;
  height: 100%;
  display: flex;

`

const ContainerDeProdutos = styled.div`
  width: 100%;
  height: 100vh;
`


// Código

class ProdutoContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <MainContainer>
        <ContainerDeProdutos>

        </ContainerDeProdutos>
        <CarrinhoContainer/>
      </MainContainer>
    )
  }


}

export default ProdutoContainer;