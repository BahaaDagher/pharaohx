import styled from '@emotion/styled';
import React from 'react'
import { Colors } from '../../Theme';
import { FlexSpaceBetween } from '../FlexSpaceBetween';
import { Flex } from '../Flex';
import { FlexCenter } from '../FlexCenter';
import Logo from "../../assets/Logo.svg"
import discord from "../../assets/discord.svg"
import x from "../../assets/x.svg"
import volumehigh from "../../assets/volume-high.svg"
import { Divider } from '../Divider';

const Parent = styled("div")(({ theme }) => ({
    display : "flex" , 
    alignItems : "center" ,
    backgroundColor: Colors.gold , 
    minHeight : "85px" ,
    maxHeight : "fit-content" ,
    padding : "0 80px" ,
    [theme.breakpoints.down("600")] : {
        padding : "0 10px" ,
    },
}));

const Container = styled(FlexSpaceBetween)(({ theme }) => ({
    // border : "1px solid red" ,
    width : "100%" ,
    height : "100%" ,
    [theme.breakpoints.down("1200")] : {
        flexDirection : "column" ,
        alignItems : "center" ,
    },
}));
const LogoContainer = styled(FlexCenter)(({ theme }) => ({
    [theme.breakpoints.down("1200")] : {
        margin : "10px" ,
    },
}));
const Img = styled("img")(({ theme }) => ({
    width : "70px" , 
    [theme.breakpoints.down("1200")] : {
        width : "50px" ,
    },
    [theme.breakpoints.down("600")] : {
        width : "35px" , 
    },
}));
const LogoName = styled("div")(({ theme }) => ({
    fontSize : "30px" ,
    marginLeft : "10px" ,
    [theme.breakpoints.down("1200")] : {
        fontSize : "25px" ,
    },
    [theme.breakpoints.down("600")] : {
        fontSize : "18px" , 
    },
}));
const List = styled(FlexSpaceBetween)(({ theme }) => ({
    width : "460px" ,
    [theme.breakpoints.down("1200")] : {
        marginBottom : "10px" ,
    },
    [theme.breakpoints.down("600")] : {
        width : "100%" ,
        justifyContent : "space-around" ,
    },
}));
const Tab = styled(FlexCenter)(({ theme }) => ({
    fontSize : "26px" ,
    // border : " 1px solid blue" ,
    cursor : "pointer" ,
    [theme.breakpoints.down("1200")] : {
        fontSize : "20px" ,
    },
    [theme.breakpoints.down("600")] : {
        fontSize : "15px" ,
    },
}));
const Buttons = styled(FlexSpaceBetween)(({ theme }) => ({
    width : "200px" ,
    [theme.breakpoints.down("1200")] : {
        marginBottom : "10px" ,
    },
}));
const ImageContainer = styled(FlexCenter)(({ theme }) => ({
    cursor : "pointer" ,
    
}));
const ImgButton = styled("img")(({ theme }) => ({
    width : "40px" ,
    [theme.breakpoints.down("1200")] : {
        width : "30px" ,
    },
    [theme.breakpoints.down("600")] : {
        width : "25px" , 
    },
}));

const Navbar = () => {
  return (
    <>
        <Parent>
            <Container>
                <LogoContainer>
                    <Img src = {Logo}/>
                    <LogoName>pharaohx</LogoName>
                </LogoContainer>
                <List>
                    <Tab>our mission</Tab>
                    <Tab>utility</Tab>
                    <Tab>utility</Tab>
                    <Tab>Faqs</Tab>
                </List>
                <Buttons>
                    <ImageContainer>
                        <ImgButton src = {volumehigh}/>
                    </ImageContainer>
                    <ImageContainer>
                        <ImgButton src = {x}/>
                    </ImageContainer>
                    <ImageContainer>
                        <ImgButton src = {discord}/>
                    </ImageContainer>
                </Buttons>
            </Container>
        </Parent>
        <Divider/>
    </>
  )
}

export default Navbar