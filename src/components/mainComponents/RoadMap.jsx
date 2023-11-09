    import styled from '@emotion/styled';
    import React, { useEffect, useState } from 'react'
    import { Parent } from '../Parent';
    import RoadMapSlider from '../RoadMapSlider';
    import triangle from "../../assets/triangle.svg";
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
import { Colors } from '../../Theme';
import { Fragment } from 'react';
const Container = styled("div")(({ theme }) => ({
    backgroundColor : "#000" ,
    height : "95vh" ,
    padding : "5px 0" , 
    position : "relative" , 
}));
const Section = styled("div")(({ theme }) => ({
    position : "relative" , 
    backgroundColor : "#000" ,
    minHeight : "95vh" ,
    maxHeight : "fit-content" ,
    overflow : "hidden" , 
}));
const Img = styled("img")(({ theme }) => ({
    position: 'absolute',
    left: '0px',
    top : "-100px" , 
    transform: 'rotate(0)', // Use 'transform' to apply rotation
    height  : "150%"
}));
const TextContainer = styled("div")(({ theme }) => ({
    position :"absolute" , 
    top : "50px" , 
    left : "0" , 
    width : "100%" ,
    overflowX : "hidden" ,
    
}));
const Text = styled("div")(({ theme }) => ({
    width : "95%" ,
    color : "#fff" ,
    position : "relative"  ,
    letterSpacing: '0.35em',
    marginBottom : "10px" , 
    fontSize : "25px" , 
    '&::before': {
        content: '""', // Make it empty
        display: 'block', // Ensure it's a block-level element
        width: '25px', // Set the width as needed
        height: '6px', // Set the height as needed
        backgroundColor: "#000",
        position: 'absolute', // Position it
        top: '50%', // Position it toward the bottom of the parent
        transform: 'translateY(-50%)', // Adjust it based on its height
        left : "-40px"
    },
    "&.line" : {
        textDecoration : "line-through" ,
    }
}));
// second container 
const SecondContainer = styled("div")(({ theme }) => ({
    display : "flex" , 
    backgroundColor : "#000" ,
}));
const GoldDiv = styled("div")(({ theme }) => ({
    backgroundColor : Colors.gold ,
    width : "70px" ,
    borderTop : "2px solid #000" ,
    flex : "0 0 70px" ,
    [theme.breakpoints.down("600")] : {
        flex : "0 0 40px" ,
    },
}));
const InformationContainer = styled("div")(({ theme }) => ({
    padding : "20px" ,
}));
const Info = styled("div")(({ theme }) => ({
    color : "#fff" ,
    letterSpacing: '0.35em',
    marginBottom : "10px" , 
    fontSize : "25px" , 
    position : "relative" , 
    '&::before': {
        content: '""', // Make it empty
        display: 'block', // Ensure it's a block-level element
        width: '20px', // Set the width as needed
        height: '6px', // Set the height as needed
        backgroundColor: "#000",
        position: 'absolute', // Position it
        top: '50%', // Position it toward the bottom of the parent
        transform: 'translateY(-50%)', // Adjust it based on its height
        left : "-40px"
    },
    "&.line" : {
        textDecoration : "line-through" ,
    },
    [theme.breakpoints.down("1000")] : {
        fontSize : "20px" , 
    },
    [theme.breakpoints.down("600")] : {
        fontSize : "16px" , 
    },
    [theme.breakpoints.down("400")] : {
        fontSize : "14px" , 
    },
}));


    const RoadMap = () => {
    const theme = useTheme();
    const isWidth1300 = useMediaQuery(theme.breakpoints.down('1300')); 
    
    const [yourState, setYourState] = useState(false);
    useEffect(() => {
        console.log(isWidth1300);
        if (isWidth1300) {
          setYourState(true);
        }
        else setYourState(false );
      }, [isWidth1300]);     
    return (
        <Fragment > 
            {!yourState ? 
                <Container id = "roadmap">
                    <Section> 
                        <Img src = {triangle}/>
                    </Section>
                    <TextContainer>
                        <Text style = {{left : "115px"}} className='line'>Draw layers and create collection</Text>
                        <Text style = {{left : "130px"}} className='line'>Create social accounts</Text>
                        <Text style = {{left : "145px"}} className='line'>Create website and start working on the Alpha platform</Text>
                        <Text style = {{left : "160px"}}>Promoting, make a partnerships and building a strong community</Text>
                        <Text style = {{left : "175px"}}>Start collection Minting</Text>
                        <Text style = {{left : "190px"}}>NFTs reveal</Text>
                        <Text style = {{left : "205px"}}>Pharaohx.eth subdomain distributing</Text>
                        <Text style = {{left : "220px"}}>6% Creator earnings distributing</Text>
                        <Text style = {{left : "235px"}}>Launching the first version of our alpha platform</Text>
                        <Text style = {{left : "250px"}}>Launch $PHX (our token)</Text>
                        <Text style = {{left : "265px"}}>NFT staking</Text>
                        <Text style = {{left : "280px"}}>Distribute airdrop for holders</Text>
                        <Text style = {{left : "295px"}}>First event in Egypt</Text>
                    </TextContainer>
                </Container>
            :
            <SecondContainer id = "roadmap">
                <GoldDiv/>
                <InformationContainer>
                    <Info className='line'>Draw layers and create collection</Info>
                    <Info className='line'>Create social accounts</Info>
                    <Info className='line'>Create website and start working on the Alpha platform</Info>
                    <Info >Promoting, make a partnerships and building a strong community</Info>
                    <Info >Start collection Minting</Info>
                    <Info >NFTs reveal</Info>
                    <Info >Pharaohx.eth subdomain distributing</Info>
                    <Info >6% Creator earnings distributing</Info>
                    <Info >Launching the first version of our alpha platform</Info>
                    <Info >Launch $PHX (our token)</Info>
                    <Info >NFT staking</Info>
                    <Info >Distribute airdrop for holders</Info>
                    <Info >First event in Egypt</Info>
                </InformationContainer>

            </SecondContainer>
            }
        </Fragment>
    )
    }

    export default RoadMap