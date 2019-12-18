import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Background from '../img/background01.jpg';
import HomePageHeader from './HomePageFooter';

const MainDiv = styled.div`
background-color: url(${Background});
`

function HomePageMain (){
    return (
        <div>
           <HomePageHeader></HomePageHeader>

        </div>
    )

}

export default HomePageMain;
