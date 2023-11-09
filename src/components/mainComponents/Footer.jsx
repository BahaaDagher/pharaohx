import React from 'react'
import styled from 'styled-components';
import { Colors } from '../../Theme';
import { FlexCenter } from '../FlexCenter';

const FooterDiv = styled(FlexCenter)(({ theme }) => ({
  width : "100%" ,
  backgroundColor : Colors.gold  , 
  padding : "10px" , 
  fontSize : "20px" , 
}));

const Footer = () => {
  return (
    <FooterDiv id =  "example" >
      © pharaohx, 2023
    </FooterDiv>
  )
}

export default Footer