import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import ProdutosContainer from './components/ProdutosContainer/ProdutoContainer';
// import CardDeProduto from './components/CardDeProduto/CardDeProduto';
import CarrinhoContainer from './components/CarrinhoContainer/CarrinhoContainer';
import FormularioContainer from './components/FormularioContainer/FormularioContainer';
import HomePage from './components/HomePage/HomePage';




class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div>
          <HomePage />
      </div>
    )
  }


}

export default App;
