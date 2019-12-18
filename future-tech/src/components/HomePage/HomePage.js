import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import HomePageFooter from './HomePageFooter';
import HomePageHeader from './HomePageHeader';
import HomePageMain from './HomePageMain';

function HomePage (){
    return (
        <div>
            <HomePageHeader/>
            <HomePageMain/>
            <HomePageFooter/>

        </div>
    )

}

export default HomePage;