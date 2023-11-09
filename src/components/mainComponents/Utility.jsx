import styled from '@emotion/styled';
import React from 'react'
import { Colors } from '../../Theme';
import { FlexCenter } from '../FlexCenter';
import { Title } from '../Title';
import { Parent } from '../Parent';

const TextContainer = styled("div")(({ theme }) => ({
    textAlign : "left" ,
    display : "flex" ,
    flexDirection : "column" ,
    justifyContent : "flex-start" ,
    marginLeft: 0,
    flex: 1,
}));

const Text = styled("div")(({ theme }) => ({
    fontSize : "25px" , 
    lineHeight : "30.35px" , 
    display : "flex" ,
    justifyContent : "flex-start" ,
    marginBottom : "10px" ,
    [theme.breakpoints.down("600")] : {
        
        fontSize : "20px" , 
    },
}));
const Utility = () => {

  return (
    <>  
        <Parent  id= "utility" style = {{paddingBottom : "60px" ,  alignItems : "flex-start"}}>
            <Title style = {{alignItems : "center"  , margin : "0 auto 50px auto"}} > What  IS THE UTILITY </Title> 
            <TextContainer>
                <Text>- Creator earnings 6 % will be distributed monthly to 50 holder </Text>
                <Text>- 100 holder after mint will get pharaohx.eth subdomain </Text>
                <Text>- Access to holder channels on Discord </Text>
                <Text>- The possibility of participating in many different giveaways</Text>
                <Text>- holders will unlock yield utility benefits in the near future with our upcoming airdrop </Text>
                <Text>- Many different advantages from partnership companies, projects</Text>
                <Text>- Get free token by NFT staking</Text>
                <Text>- Only holders can request a tour guide from the platform</Text>
            </TextContainer>
        </Parent>
    </>
  )
}

export default Utility