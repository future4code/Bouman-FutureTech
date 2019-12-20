import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';

// Estilização

const Container = styled.div`
    width:100%;
    height: 40px;
    background-color:#C76103;
    padding-top:10px;
    color:white;
`
const Selecao = styled.select`
    border:none;
    margin-right:30px;
    border:solid 1px black;
    width: 120px;
`
const Span = styled.span`
    font-weight:bold;
    margin-left:20px;
`
const SpanBuscar = styled.span`
    margin-left:400px;
    font-weight:bold;
`


const InputBuscar = styled.input `
    border:none;
    background-color:#C76103;
    border-bottom:solid 0.25px white;
    outline: 0;
    color: white;
    margin-right: 20px;
`

const Botao = styled.button `
    border: none;
    background-color: white;
    color: black;
    margin-left: 5px;
    font-weight: bold;
    :hover{
        cursor: pointer;
        background-color: black;
        color: white;
    }
`

// Código

class Filtros extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    

    render(){
      
        return(
            <Container>
                <Span>Ordenar: </Span>
                <Selecao>
                    <option></option>
                    <option>Título</option>
                    <option>Valor da Venda</option>
                    <option>Prazo</option>
                </Selecao>
                <Span>Filtar: </Span>
                <Selecao>
                    <option></option>
                    <option>Valor máximo</option>
                    <option>Valor minimo</option>
                </Selecao>

                <SpanBuscar>Buscar: </SpanBuscar>
                <InputBuscar type="text"></InputBuscar>
                <Botao>Buscar</Botao>
            </Container>
        )
    }
}

export default Filtros