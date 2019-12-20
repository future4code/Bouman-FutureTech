import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import CarrinhoContainer from '../CarrinhoContainer/CarrinhoContainer'
import CardDeProduto from '../CardDeProduto/CardDeProduto';
import Filtros from '../Filtros';

// Estilização

const LojaContainer = styled.div `
  width: 100%;
  min-height: 100vh;
  display: flex;
`

const MainContainer = styled.div `
  width: 100%;
  height: 100%;
`

const ContainerDeProdutos = styled.div`
  width: 100%;
  min-height: 110vh;
  display: flex;
  flex-wrap: wrap;
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
        <Filtros/>
        <LojaContainer>
          <ContainerDeProdutos>
            <CardDeProduto/>
            <CardDeProduto/>
            <CardDeProduto/>
            <CardDeProduto/>
            <CardDeProduto/>
            <CardDeProduto/>
            <CardDeProduto/>
            <CardDeProduto/>
            <CardDeProduto/>
            <CardDeProduto/>
            <CardDeProduto/>
            <CardDeProduto/>
            <CardDeProduto/>
            <CardDeProduto/>
            <CardDeProduto/>
            <CardDeProduto/>
          </ContainerDeProdutos>
          <CarrinhoContainer/>
        </LojaContainer>
      </MainContainer>
    )
  }


}

export default ProdutoContainer;