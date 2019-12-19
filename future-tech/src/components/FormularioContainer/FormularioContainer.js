import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';


const Titulo = styled.h1`
text-align:center;
`

const ContainerForm = styled.div `
  width: 95vw;
  height: 100vh;
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
      titulo: "",
      imagem: "",
      descricao: "",
      valor: "",
      metodoPagamento: ""
    }
  }

  render(){

    return(

      <div>
          <Titulo>Cadastro de Produtos</Titulo>
          <ContainerForm>
            <ContainerLabels>
              <h4>Título</h4>
              <Input type="text"/>
            </ContainerLabels>

            <ContainerLabels>
              <h4>Imagem Produto:</h4>
              <Input type="text"/>
            </ContainerLabels>

            <ContainerLabels>
              <h4>Descrição Produto:</h4>
              <InputDescricao type="textarea"></InputDescricao>
            </ContainerLabels>
           
            <ContainerLabels>
              <h4>Valor Produto:</h4>
              <Input type="text"/>
            </ContainerLabels>

            <ContainerLabels>
              <h4>Método de Pagamento:</h4>
              <Input type="text"/>
            </ContainerLabels>
            
            <ContainerLabels>
              <h4>Método de Pagamento:</h4>
              <Input type="text"/>
            </ContainerLabels>
            
            <ContainerLabels>
              <h4>Prazo de Entrega:</h4>
              <Input type="text"/>
            </ContainerLabels>
            <Botao>Cadastrar Produto</Botao>
          </ContainerForm>
      </div>
    )
  }


}

export default FormularioContainer;