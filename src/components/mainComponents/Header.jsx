import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react'
import { Colors } from '../../Theme';
import { Flex } from '../Flex';
import { FlexCenter } from '../FlexCenter';
import ship from "../../assets/ship.svg"
import pyramid from "../../assets/pyramid.svg"
import { Parent } from '../Parent';


const WelcomeDiv = styled(FlexCenter)(({ theme }) => ({
    flexDirection : "column" ,
    textAlign : "center" ,
    fontSize : "75px" ,
    [theme.breakpoints.down("600")] : {
        fontSize : "45px" ,
        
    } , 
    [theme.breakpoints.down("400")] : {
        fontSize : "40px" 
    } , 
}));
const Welcome = styled("div")(({ theme }) => ({
    color : Colors.lightGold , 
    WebkitTextStroke: `2px ${Colors.brown}`,
    [theme.breakpoints.down("400")] : {
        WebkitTextStroke: `1px ${Colors.brown}`,
    } , 
    
}));
const PharaohXTitle = styled("div")(({ theme }) => ({
    color : Colors.brown , 
    WebkitTextStroke: `2px ${Colors.lightGold}`,
    lineHeight: '91px',
    letterSpacing: '0.35em',
    [theme.breakpoints.down("400")] : {
        WebkitTextStroke: `1px ${Colors.lightGold}`,
    } , 
}));
const Caret = styled("span")(({ theme }) => ({
    color : "#000" ,
    WebkitTextStroke: `0px`,
    width : "10px" , 
    fontFamily: 'monospace',
    "&.move": {
        animation: 'blink 1s infinite',
      '@keyframes blink': {
        '0%, 100%': {
          opacity: 1,
        },
        '50%': {
          opacity: 0,
        },
      },
    }
}));
const Drop = styled(FlexCenter)(({ theme }) => ({
    width : "500px" , 
    backgroundColor : "#000" ,
    borderRadius : "50px" ,
    padding : "0px 30px" ,
    margin  : "0 auto" , 
    marginTop : "100px" , 
    [theme.breakpoints.down("600")] : {
        width : "100%" , 
        margin : "0 auto" , 
        marginTop : "50px" ,
    } , 
    
}));
const DropTitle = styled("div")(({ theme }) => ({
    fontSize : "30px" ,
    color : Colors.gold  , 
    [theme.breakpoints.down("600")] : {
        fontSize : "20px" ,
    } , 
    [theme.breakpoints.down("400")] : {
        fontSize : "15px" ,
    } , 
}));
const DropImg = styled("img")(({ theme }) => ({
    [theme.breakpoints.down("600")] : {
        width : "60px" ,
    } , 
    [theme.breakpoints.down("400")] : {
        width : "50px" ,
    } , 
}));
const PyramidDiv = styled(FlexCenter)(({ theme }) => ({
    marginTop : "100px" ,
    [theme.breakpoints.down("600")] : {
        marginTop : "50px" 
    } , 
}));
const PyramidImg = styled("img")(({ theme }) => ({
    width : "100%" , 
}));
const Header = () => {
    const [title, setTitle] = useState('p');
    const [reverse, setReverse] = useState(false);
    const [reverseFinished , setReverseFinished] = useState(false) 
    const [finished , setFinished] = useState(false)

    useEffect(() => {
        const text = 'pharaohx';
        if (finished) return setTitle(text)
        const interval = setInterval(() => {
        if (title === text) {
            setReverse(true);
        } else if (title === 'p') {
            setReverse(false);
        }

        if (!reverse) {
            setTitle(text.slice(0, title.length + 1));
            if (title === text && reverseFinished) {
                setFinished(true)
            }
        } else {
            if (title === 'p') {
                setReverseFinished(true)
                return setReverse(false)
            }
            setTitle(title.slice(0, title.length - 1));
        }
        }, 300);

    return () => clearInterval(interval);
  }, [title, reverse]);

  return (
    <>
        <Parent style = {{backgroundColor : Colors.gold }}>
            <WelcomeDiv>
                <Welcome>welcome to</Welcome>
                <FlexCenter>
                    <PharaohXTitle>{title}</PharaohXTitle> 
                    <Caret className = {finished && "move"}>|</Caret> 
                </FlexCenter>
            </WelcomeDiv>
            <Drop>
                <DropTitle>will drop on opensea</DropTitle>
                <DropImg src = {ship}/>
            </Drop>
            <PyramidDiv>
                <PyramidImg src = {pyramid} />
            </PyramidDiv>

        </Parent>
    </>
  )
}

export default Header