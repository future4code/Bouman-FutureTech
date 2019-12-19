import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';


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
  width:50vw;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 200px;
`

const InputDescricao = styled.textarea`
  border:none;
  border-radius:5px;
  width:200px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 200px;
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
  font-weight: bolder;
  outline: 0;
  :hover {
    cursor: pointer;
    color: white;
    background-color: gray;
  }
`

class FormularioContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {

          titulo:"",
          imagem:"",
          descricao:"",
          valor:"",
          pagamento:"",
          entrega:""

    }
  }

  onChangeTitulo = (e) =>{
    this.setState({titulo: e.target.value})
  }

  onChangeImagem = (e) =>{
    this.setState({imagem: e.target.value})
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

  render(){

    return(

      <div>
          <Titulo>Cadastro de Produtos</Titulo>
          <ContainerForm>
            <ContainerLabels>
              <h4>Título</h4>
              <Input type="text" value={this.state.titulo} onChange={this.onChangeTitulo} placeholder = " Digite o Nome do produto"/>
            </ContainerLabels>

            <ContainerLabels>
              <h4>Descrição Produto:</h4>
              <InputDescricao type="textarea" value={this.state.descricao} onChange={this.onChangeDescricao} placeholder = " Descreva o produto"/>
            </ContainerLabels>
           
            <ContainerLabels>
              <h4>Valor Produto:</h4>
              <Input type="number" value={this.state.valor} onChange={this.onChangeValor} placeholder = " Digite o produto"/>
            </ContainerLabels>

            <ContainerLabels>
              <h4>Método de Pagamento:</h4>
              <select>
                <option>Método de Pagamento</option>
                <option>Cartão</option>
                <option>Boleto</option>
              </select>
            </ContainerLabels>
            
            <ContainerLabels>
              <h4>Prazo de Entrega:</h4>
              <Input type="text" value={this.state.entrega} onChange={this.onChangeEntrega} placeholder = " Digite o prazo de entrega"/>
            </ContainerLabels>
            <Botao>Cadastrar Produto</Botao>  
          </ContainerForm>
      </div>
    )
  }


}

export default FormularioContainer;