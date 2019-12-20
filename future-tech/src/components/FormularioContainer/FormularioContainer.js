import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';


const Titulo = styled.h1`
  text-align:center;
`

const ContainerForm = styled.div `
  width: 95vw;
  height: 60vh;
  max-width: 500px;
  max-height: 540px;
  border-radius:10px;
  background-color:#C76103;
  margin:auto;
  display:flex;
  flex-direction:column;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom:30px; 

`

const ContainerLabels = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Input = styled.input`
  border:none;
  border-radius:5px;
  width:200px;
  height: 18px;
`

const InputDescricao = styled.textarea`
  border:none;
  border-radius:5px;
  width:200px;
  height: 60px;
`

const Botao = styled.button`
  background-color:white;
  color:#C76103;
  width:auto;
  height: 30px;
  margin:auto;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-weight: bold;
  outline: 0;
  :hover {
    cursor: pointer;
    color: white;
    background-color: gray;
  }
`

const baseURL = "https://us-central1-future-apis.cloudfunctions.net/futureTech";

class FormularioContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
          titulo:"",
          descricao:"",
          valor:"",
          pagamento:"",
          entrega:""
    }
  }

  onChangeTitulo = (e) =>{
    this.setState({titulo: e.target.value})
  }

  onChangeDescricao =(e) =>{
    this.setState({descricao: e.target.value})
  }

  onChangeValor = (e) =>{
    this.setState({valor: e.target.value})
  }

  onChangePagamento = (e) =>{
    this.setState({pagamento: e.target.value})
  }

  onChangeEntrega = (e) =>{
    this.setState({entrega: e.target.value})
  }

  adicionaProduto =()=>{
    const novoProduto = {
      name: this.state.titulo,
      description: this.state.descricao,
      price: this.state.valor,
      paymentMethod: this.state.pagamento,
      shipping: this.state.entrega
    }

    axios.post(`${baseURL}/products`, novoProduto)
    this.setState({
          titulo:"",
          descricao:"",
          valor:"",
          pagamento:"",
          entrega:""
    })
  }

  render(){
    return(
      <div>
        <Titulo>Cadastro de Produtos</Titulo>
        <ContainerForm>
          <ContainerLabels>
            <h4>Título Produto:</h4>
            <Input type="text" value={this.state.titulo} onChange={this.onChangeTitulo}  placeholder = " Digite o Nome Produto"></Input>
          </ContainerLabels>

          <ContainerLabels>
            <h4>Descrição Produto:</h4>
            <InputDescricao type="textarea" value={this.state.descricao} onChange={this.onChangeDescricao} placeholder = " Descreva o Produto"></InputDescricao>
          </ContainerLabels>
          
          <ContainerLabels>
            <h4>Valor Produto:</h4>
            <Input type="number" value={this.state.valor} onChange={this.onChangeValor} placeholder = " Digite o Valor Produto"></Input>
          </ContainerLabels>

          <ContainerLabels>
            <h4>Método de Pagamento:</h4>
            <select value={this.state.pagamento} onChange={this.onChangePagamento}>
              <option>Escolha o Método</option>
              <option>Cartão</option>
              <option>Boleto</option>
            </select>
          </ContainerLabels>
            
          <ContainerLabels>
            <h4>Prazo de Entrega:</h4>
            <Input type="text" value={this.state.entrega} onChange={this.onChangeEntrega} placeholder = " Digite o Prazo de entrega"></Input>
          </ContainerLabels>
          <Botao onClick={this.adicionaProduto}>Cadastrar Produto</Botao>
        </ContainerForm>
      </div>
    )
  }
}

export default FormularioContainer;