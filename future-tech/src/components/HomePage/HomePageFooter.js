import React from 'react';
import Styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';


const ContainerFooter = Styled.div`
width:100%;
height: 130px;
background-color:black;
color: white;
padding-top:0.5px;
margin:auto;
text-align:center;
`

const Contatos = Styled.h2`
color:white;
padding-top:10px;
`

const TituloRedeSociais = Styled.h4`
color:white;
margin-block-start: 0px;
margin-block-end: 0px;
margin-right:40px;
`


const RedeSociais = Styled.div`
display:flex;
justify-content:center;
margin-left:40px;
`

const ImgRedesSociais = Styled.img`
width:20px;
height:20px;
margin-right:9px;
margin-left:10px;
`

const Copy = Styled.p`
font-size:10px;
margin-top:20px;
`

function HomePageFooter (){
    return (
        <div>
        <ContainerFooter>
            <h3>Contatos</h3>
            <RedeSociais>
                <ImgRedesSociais src={"https://www.iconsdb.com/icons/preview/white/facebook-xxl.png"}></ImgRedesSociais>
                <TituloRedeSociais>@FutureTech</TituloRedeSociais>
                <ImgRedesSociais  src={"https://www.iconsdb.com/icons/preview/white/whatsapp-xxl.png"}></ImgRedesSociais>
                <TituloRedeSociais>(11)97455-8878</TituloRedeSociais>
            </RedeSociais>
            <Copy>©copyright FutureTech 2019-today</Copy>
        </ContainerFooter>

        </div>
    )

}

export default HomePageFooter;