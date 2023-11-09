import styled from '@emotion/styled';
import React, { useRef, useState } from 'react'
import { Colors } from '../../Theme';
import { FlexSpaceBetween } from '../FlexSpaceBetween';
import { Flex } from '../Flex';
import { FlexCenter } from '../FlexCenter';
import Logo from "../../assets/Logo.svg"
import discord from "../../assets/discord.svg"
import x from "../../assets/x.svg"
import volumeHigh from "../../assets/volume-high.svg"
import mute from "../../assets/mute.svg"
import { Divider } from '../Divider';
import sound from "../../assets/sound.mp3"

const Parent = styled("div")(({ theme }) => ({
    display : "flex" , 
    alignItems : "center" ,
    backgroundColor: Colors.gold , 
    minHeight : "85px" ,
    maxHeight : "fit-content" ,
    padding : "0 80px" ,
    borderBottom : `2px solid #000` ,
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
const Tab = styled("a")(({ theme }) => ({
    display : "flex" ,
    alignItems : "center" ,
    justifyContent : "center" ,
    textDecoration : "none" ,
    color : "#000" ,
    fontSize : "26px" ,
    cursor : "pointer" ,
    "&:hover" : {
        color : "#000" ,
    } , 
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
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
  
    const playSound = () => {
      if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause(); 
        } else {
          audioRef.current.play(); 
        }
        setIsPlaying(!isPlaying); 
      }
    };
  return (
    <>
        <audio ref={audioRef} src={sound} />
        <Parent style = {{position : "sticky" , top : "0" , zIndex :"5"}} >
            <Container>
                <LogoContainer>
                    <Img src = {Logo} draggable="false" />
                    <LogoName>pharaohx</LogoName>
                </LogoContainer>
                <List>
                    <Tab href="#mission" > our mission </Tab>
                    <Tab href="#utility" >utility</Tab>
                    <Tab href="#roadmap">roadMap</Tab>
                    <Tab href="#Faqs" >Faqs</Tab>
                </List>
                <Buttons>
                    <ImageContainer onClick={playSound} >
                        <ImgButton  src={!isPlaying ? mute : volumeHigh }/>
                    </ImageContainer>
                    <ImageContainer onClick={()=>{window.location.href= "https://twitter.com/pharaohxnft"}}>
                        <ImgButton  src = {x}/>
                    </ImageContainer>
                    <ImageContainer onClick={()=>{window.location.href= "https://discord.com/invite/ZqUZKf9vmW"}}>
                        <ImgButton src = {discord}/>
                    </ImageContainer>
                </Buttons>
            </Container>
        </Parent>
    </>
  )
}

export default Navbar