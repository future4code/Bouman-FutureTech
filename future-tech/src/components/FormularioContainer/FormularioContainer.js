import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';


const Titulo = styled.h1`
text-align:center;
`

const ContainerForm = styled.div `
width: 500px;
height: 400px;
border-radius:10px;
background-color:#C76103;
margin:auto;
display:flex;
flex-direction:column;

`
const Label = styled.label`
color:black;
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