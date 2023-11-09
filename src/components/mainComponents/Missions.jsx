import styled from '@emotion/styled';
import React from 'react'
import { Colors } from '../../Theme';
import { FlexCenter } from '../FlexCenter';
import Devils from "../../assets/Devils.svg";
import { Title } from '../Title';
import { Parent } from '../Parent';


const Text = styled("div")(({ theme }) => ({
    marginBottom : "20px" ,
    fontSize : "22px" ,
    [theme.breakpoints.down("700")] : {
        fontSize : "16px" ,

    }, 
}));
const ImageDiv = styled("div")(({ theme }) => ({
    
}));
const Img = styled("img")(({ theme }) => ({
    width : "100%" ,
}));

const Missions = () => {
  return (
    <>
        <Parent id="mission" style = {{borderBottom : `1px solid ${Colors.gold}`}}>
            <Title>OUR MISSION</Title>
            <Text>We believe in the strength of delivering value to our community and building a long-lasting product. A product in the form of a guidance platform, tailored specifically to web3 topics and NFT audiences.</Text>
            <Text>A guidance platform that enables tourists to know the locations, prices, and evaluation of many tourist places and hotels, not only in Egypt but in many countries around the world.</Text>
            <ImageDiv>
                <Img src = {Devils}/>
            </ImageDiv>
        </Parent>
    </>
  )
}

export default Missions