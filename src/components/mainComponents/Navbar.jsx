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
import menu from "../../assets/menu.png"
import { useTheme } from 'styled-components';
import { Dropdown } from 'bootstrap';

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
    
}));
const LogoContainer = styled(FlexCenter)(({ theme }) => ({
   
}));
const Img = styled("img")(({ theme }) => ({
    width : "70px" , 
    [theme.breakpoints.down("1200")] : {
        width : "50px" ,
    },
}));
const LogoName = styled("div")(({ theme }) => ({
    fontSize : "30px" ,
    margin : "0 15px" ,
    [theme.breakpoints.down("1200")] : {
        fontSize : "20px" ,
    },
}));
const List = styled(FlexSpaceBetween)(({ theme }) => ({
    width : "460px" ,
    [theme.breakpoints.down("1200")] : {
        marginBottom : "10px" ,
        display : "none" ,
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
    [theme.breakpoints.down("400")] : {
        width : "25px" , 
    },
}));
const MenuDiv = styled(FlexCenter)(({ theme }) => ({
    display : "none" ,
    cursor : "pointer" , 
    [theme.breakpoints.down("1200")] : {
        display : "flex" ,
    },
}));
const MenuIcon = styled("img")(({ theme }) => ({
    width : "30px" , 
    height : "30px" , 
}));
const DropdownContainer = styled(FlexCenter)(({ theme }) => ({
    backgroundColor : "#0000008f" ,
    width : "100%" ,
    position : "absolute" ,
    left : "0" , 
    top : "85px" , 
    zIndex : "100" ,

}));
const DropdownMenu = styled(FlexSpaceBetween)(({ theme }) => ({
    width : "60%" , 
    padding : "20px", 
    [theme.breakpoints.down("800")] : {
        width : "80%" , 
    },
    [theme.breakpoints.down("600")] : {
        flexDirection : "column" ,
        textAlign : "left" ,  
        width : "100%" , 
    },
}));
const DropdownItem = styled("a")(({ theme }) => ({
    textDecoration : "none" ,
    fontSize : "25px" ,
    color : "#fff" ,
    transition : "all 0.3s ease" , 
    [theme.breakpoints.down("600")] : {
        fontSize : "20px" ,
        padding : "5px 15px" ,
        borderBottom : `1px solid ${Colors.gold}` ,
    },
    cursor : "pointer" ,
    "&:hover" : {
        color : Colors.gold ,
    }
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
    const [extend , setExtend] = useState(false)
    const handleExtend = () => {
        setExtend(!extend)
    }
    
    const openLinkInNewTab = (url) => {
        window.open(url, '_blank');
    };
  return (
    <>
        <audio ref={audioRef} src={sound} />
        <Parent style = {{position : "relative"}} >
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
                <Buttons >
                    <ImageContainer onClick={playSound} >
                        <ImgButton  src={!isPlaying ? mute : volumeHigh }/>
                    </ImageContainer>
                    <ImageContainer onClick={() => openLinkInNewTab("https://twitter.com/pharaohxnft")}>
                        <ImgButton  src = {x}/>
                    </ImageContainer>
                    <ImageContainer onClick={() => openLinkInNewTab("https://discord.com/invite/ZqUZKf9vmW")}>
                        <ImgButton src = {discord}/>
                    </ImageContainer>
                    <MenuDiv onClick= {handleExtend}>
                        <MenuIcon src = {menu}/>
                    </MenuDiv>
                </Buttons>
                {extend&& 
                    <DropdownContainer>
                        <DropdownMenu>
                            <DropdownItem href="#mission" onClick= {handleExtend}> our mission </DropdownItem>
                            <DropdownItem href="#utility" onClick= {handleExtend}>utility</DropdownItem>
                            <DropdownItem href="#roadmap" onClick= {handleExtend}>roadMap</DropdownItem>
                            <DropdownItem href="#Faqs" onClick= {handleExtend}>Faqs</DropdownItem>
                        </DropdownMenu>
                    </DropdownContainer>
                }
            </Container>
        </Parent>
    </>
  )
}

export default Navbar