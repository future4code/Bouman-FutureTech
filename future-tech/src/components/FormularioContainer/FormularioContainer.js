import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';


const Titulo = styled.h1`
text-align:center;
`

const ContainerForm = styled.div `
width: 500px;
height: 480px;
height: 400px;
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
padding: 10px;
width:auto;
border: solid 2px black;
margin:auto;
border-radius: 10px;
font-weight:bold;
padding-left:50px;
padding-top:30px;
font-weight:bold;
`

const Input = styled.input`

`

class FormularioContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div>
          <Titulo>Cadastro de Produtos</Titulo>
          <ContainerForm>
            <ContainerLabels>
              <Label>Título Produto:</Label>
              <Input type="text"></Input>
            </ContainerLabels>

            <ContainerLabels>
              <Label>Imagem Produto:</Label>
              <Input type="text"></Input>
            </ContainerLabels>

            <ContainerLabels>
              <Label>Descrição Produto:</Label>
              <InputDescricao type="textarea"></InputDescricao>
            </ContainerLabels>
           
            <ContainerLabels>
              <Label>Valor Produto:</Label>
              <Input type="number"></Input>
            </ContainerLabels>

            <ContainerLabels>
              <Label>Método de Pagamento:</Label>
              <Input type="text"></Input>
            </ContainerLabels>
            
            <ContainerLabels>
              <Label>Método de Pagamento:</Label>
              <Input type="text"></Input>
            </ContainerLabels>
            
            <ContainerLabels>
              <Label>Prazo de Entrega:</Label>
              <Input type="text"></Input>
            </ContainerLabels>
            <Botao>Cadastrar Produto</Botao>

            <div>
              <Label>Título Produto</Label>
              <Input type="text"></Input>
            </div>

            <div>
              <Label>Imagem Produto</Label>
              <Input type="text"></Input>
            </div>

            <div>
              <Label>Descrição Produto</Label>
              <Input type="text"></Input>
            </div>
           
            <div>
              <Label>Valor Produto</Label>
              <Input type="text"></Input>
            </div>

            <div>
              <Label>Método de Pagamento</Label>
              <Input type="text"></Input>
            </div>
            
            <div>
              <Label>Método de Pagamento</Label>
              <Input type="text"></Input>
            </div>
            
            <div>
              <Label>Prazo de Entrega</Label>
              <Input type="text"></Input>
            </div>


            
          </ContainerForm>
      </div>
    )
  }


}

export default FormularioContainer;