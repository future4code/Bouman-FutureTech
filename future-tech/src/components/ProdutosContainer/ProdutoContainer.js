import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import CarrinhoContainer from '../CarrinhoContainer/CarrinhoContainer'
import CardDeProduto from '../CardDeProduto/CardDeProduto';
import Filtros from '../Filtros';
import axios from 'axios';

const baseURL = "https://us-central1-future-apis.cloudfunctions.net/futureTech/products";

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
      arrayProdutos: [],
    }
  }



  componentDidMount(){
    this.pegarProduto();
  }

  pegarProduto = () =>{
    const request = axios.get(
      `${baseURL}`
    )

    request.then(response =>{
      this.setState({arrayProdutos: response.data.products})
    })

    
  }

  
  render(){
    
    return(
      <MainContainer>
        <Filtros/>
        <LojaContainer>
          <ContainerDeProdutos>
            {this.state.arrayProdutos.map(produto =>(
              <CardDeProduto produto={produto}/>
            ))}
          </ContainerDeProdutos>
          <CarrinhoContainer/>
        </LojaContainer>
      </MainContainer>
    )
  }


}

export default ProdutoContainer;