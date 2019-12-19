import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';


const Titulo = styled.h1`
text-align:center;
`

const ContainerForm = styled.div `
width: 500px;
height: 480px;
border-radius:10px;
background-color:#C76103;
margin:auto;
display:flex;
flex-direction:column;
margin-bottom:30px;

`
const Label = styled.label`
color:black;
padding-left:80px;
padding-top:30px;
font-weight:bold;
margin-right:10px;

`
const ContainerLabels = styled.div`
margin-top:20px;
margin-bottom:5px;
`

const Input = styled.input`
border:none;
border-radius:5px;
width:200px;
height: 18px;
`

const InputDescricao = styled.input`
border:none;
border-radius:5px;
width:200px;
height: 60px;
`

const Botao = styled.button`
border:none;
background-color:white;
color:#C76103;
cursor:pointer;
width:auto;
border: solid 2px black;
margin:auto;
border-radius: 10px;
font-weight:bold;
padding:10px;
font-weight:bold;
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
              <Label>Título Produto:</Label>
              <Input type="text" value={this.state.titulo} onChange={this.onChangeTitulo}></Input>
            </ContainerLabels>

            <ContainerLabels>
              <Label>Imagem Produto:</Label>
              <Input type="text" value={this.state.imagem} onChange={this.onChangeImagem}></Input>
            </ContainerLabels>

            <ContainerLabels>
              <Label>Descrição Produto:</Label>
              <InputDescricao type="textarea" value={this.state.descricao} onChange={this.onChangeDescricao}></InputDescricao>
            </ContainerLabels>
           
            <ContainerLabels>
              <Label>Valor Produto:</Label>
              <Input type="number" value={this.state.valor} onChange={this.onChangeValor}></Input>
            </ContainerLabels>

            <ContainerLabels>
              <Label>Método de Pagamento:</Label>
              <Input type="text" value={this.state.pagamento} onChange={this.onChangePagamento}></Input>
            </ContainerLabels>
            
            <ContainerLabels>
              <Label>Prazo de Entrega:</Label>
              <Input type="text" value={this.state.entrega} onChange={this.onChangeEntrega}></Input>
            </ContainerLabels>
            <Botao>Cadastrar Produto</Botao>
            
          </ContainerForm>
      </div>
    )
  }


}

export default FormularioContainer;