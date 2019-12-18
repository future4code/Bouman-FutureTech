import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Logo from '../img/logocutted.png';
import Card from '@material-ui/core/Card'

const MainHeaderDiv = styled.div`
background-color: black;
display:flex;
justify-content:center;
height:150px;

`
const ImgContainer = styled.img`


`

function HomePageHeader (){
    return (
        <div>
            <MainHeaderDiv>
                <ImgContainer src={Logo} alt="logo"></ImgContainer>
            </MainHeaderDiv>
           

        </div>
    )

}

export default HomePageHeader;