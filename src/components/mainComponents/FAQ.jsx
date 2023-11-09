import React, { useState } from 'react'
import { Parent } from '../Parent'
import { Title } from '../Title'
import drop from "../../assets/drop.svg"
import { Colors } from '../../Theme';
import { FlexSpaceBetween } from '../FlexSpaceBetween';
import { FlexCenter } from '../FlexCenter';
import { Hidden } from '@mui/material';
import styled from '@emotion/styled';

const SonParent = styled(Parent)(({ theme }) => ({
  paddingBottom : "20px" , 
  [theme.breakpoints.down('700')]: {
    padding : "60px 10px 0 10px" ,
  },

}));

const DropDown = styled("div")(({ theme }) => ({
  width: "90%",
  borderRadius : "20px" , 
  fontSize : "37px" , 
  padding : "25px" , 
  border : `2px solid ${Colors.gold}` ,
  marginBottom : "20px" ,
  [theme.breakpoints.down('500')]: {
    width: "100%",
  },
  
}));
const TextDiv = styled("div")(({ theme }) => ({
  width : "90%" , 
  textAlign : "left" ,
}));
const Text = styled("div")(({ theme }) => ({
  
  fontSize : "37px" ,
  [theme.breakpoints.down('1000')]: {
    fontSize : "25px" ,
  },
  [theme.breakpoints.down('500')]: {
    fontSize : "18px" ,
  },
  
}));
const Img = styled("img")(({ theme }) => ({
  marginLeft : "10px" ,
  [theme.breakpoints.down('800')]: {
    width : "50px" ,
  },
}));
const Divider = styled("div")(({ theme }) => ({
  height : "2px" ,
  width : "100%" ,
  backgroundColor : Colors.gold ,
  margin : "20px 0 " ,
}));

const HiddenDiv = styled("div")(({ theme }) => ({
  
  "&.hidden" : {
    display : "none" ,
  }
}));
const FAQ = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  const handleFirst = () => {
    setFirst(!first)
  }
  const handleSecond = () => {
    setSecond(!second)
  }
  const handleThird = () => {
    setThird(!third)
  }
  return (
    <>
      <SonParent id = "Faqs">
        <Title>FAQ</Title>
        <DropDown>
          <FlexSpaceBetween onClick={handleFirst} style = {{cursor : "pointer"}} >
            <TextDiv>
              <Text>Which network will pharaohx live on ?</Text>
            </TextDiv>
            <Img src= {drop}/>
          </FlexSpaceBetween>
          <HiddenDiv className = {!first? "hidden" : ""}>
            <Divider/>
            <TextDiv>
                <Text>the ethereum blockchain ( eth )</Text>
            </TextDiv>
          </HiddenDiv>
        </DropDown>

        <DropDown>
          <FlexSpaceBetween onClick={handleSecond} style = {{cursor : "pointer"}}>
            <TextDiv>
              <Text>How many pharaohx will there be ?</Text>
            </TextDiv>
            <Img src= {drop}/>
          </FlexSpaceBetween>
          <HiddenDiv className = {!second? "hidden" : ""}>
            <Divider/>
            <TextDiv>
                <Text>3.333</Text>
            </TextDiv>
          </HiddenDiv>
        </DropDown>

        <DropDown>
          <FlexSpaceBetween onClick={handleThird} style = {{cursor : "pointer"}} >
            <TextDiv>
              <Text>When will pharaohx mint ?</Text>
            </TextDiv>
            <Img src= {drop}/>
          </FlexSpaceBetween>
          <HiddenDiv className = {!third? "hidden" : ""}>
            <Divider/>
            <TextDiv>
                <Text>tba, keep your eyes peeled on our x and discord to stay updated</Text>
            </TextDiv>
          </HiddenDiv>
        </DropDown>
      </SonParent>
    </>
  )
}

export default FAQ