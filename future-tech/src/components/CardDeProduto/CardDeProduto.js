import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';

// Estilização

const CardDeProdutosContainer = styled.div `
    width: 20vw;
    height: 55vh;
    max-width: 400px;
    background-color: white;
    border: 1px solid black;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
`

const DescricaoContainer = styled.div `
    min-width: 100%;
    min-height: 40px;
    padding: 0;
    display: flex;
    justify-content: flex-start;
    align-items:center;
`

const Img = styled.img `
    width: 50%;
    height: 100px;
`

const Span = styled.span `
    margin-left: 10px;
    font-size: 15px;
    margin-top: 10px;
`
const Hr = styled.hr `
  width: 90%;
  opacity: 60%;
`

const NomeProduto = styled.h3 `
    margin: 0;
    padding: 0;
    margin-bottom: 5px;
`

const ValorContainer = styled.div `
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const PagamentoContainer = styled.div `
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const PrazoContainer = styled.div `
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const Select = styled.select `
    margin-left: 10px;
    margin-top: 10px;
    outline: 0px;
    :hover {
        cursor: pointer;
    }
`

const ButtonContainer = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Button = styled.button `
    width: 70%;
    height: 70%;
    background-color: #C76103;
    color: white;
    outline: 0;
    border: none;
    border-radius: 5px;
    :hover {
        cursor: pointer;
        background-color: #C75103;
    }
`

// Código

class CardDeProduto extends React.Component {
    constructor (props) {
        super (props);

        this.state = {

        }
    }

    render () {
        console.log(this.props.produto)
        return (
            <CardDeProdutosContainer> 
                <Img src = {"https://images.tcdn.com.br/img/img_prod/15959/computador_office_standard_pentium_g5400_8a_geracao_8gb_memoria_hd_500gb_hdmi_gabinete_atx_monitor_1_15061_1_20190206161629.jpg"}/>
                <Hr/>
                <NomeProduto>{this.props.produto.name}</NomeProduto>
                <DescricaoContainer>
                    <Span>Descrição: </Span>
                    <Span>{this.props.produto.description}</Span>
                </DescricaoContainer>
                <ValorContainer>
                    <Span>Valor:</Span>
                    <Span>{this.props.produto.price}</Span> 
                </ValorContainer>
                <PagamentoContainer>
                    <Span>Método de Pagamento:</Span>
                    <Select>
                        <option>Cartão</option>
                        <option>Boleto</option>
                    </Select>
                </PagamentoContainer>
                <PrazoContainer>
                    <Span>Prazo de Entrega:</Span>
                    <Span>{this.props.produto.shipping}</Span>
                </PrazoContainer>
                <ButtonContainer>
                    <Button>Adicionar ao Carrinho</Button>
                </ButtonContainer>
            </CardDeProdutosContainer>
        )
    }
}

export default CardDeProduto;