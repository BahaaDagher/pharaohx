import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { Colors } from "../Theme";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";

const Text = styled('div')({
  color: '#fff',
  fontSize: '75px',
  '@media (max-width: 950px)': {
    fontSize: '50px',
  },

  // Media query for screens even smaller
  '@media (max-width: 700px)': {
    fontSize: '30px',
  },

  '@media (max-width: 500px)': {
    fontSize: '20px',
  },
});

function RoadMapSlider() {
  // const theme = useTheme();
  //   const isWidth500 = useMediaQuery(theme.breakpoints.down('1300')); 

  // const [isMobile, setIsMobile] = useState(false) ; 
  // useEffect(() => {
  //   console.log(isWidth500);
  //   if (isWidth500) {
  //     setIsMobile(true);
  //   }
  //   else setIsMobile(false );
  // }, [isWidth500]); 
  return (
    <AppContainer>
      <Wrapper>
        <Marquee>
          <MarqueeGroup>
            <Text>roadmap</Text>
            <Text>roadmap</Text>
            <Text>roadmap</Text>
          </MarqueeGroup>
            <MarqueeGroup>
              <Text>roadmap</Text>
              <Text>roadmap</Text>
              <Text>roadmap</Text>
            </MarqueeGroup>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}
export default RoadMapSlider;

const AppContainer = styled.div`
  background-color : ${Colors.gold} ;
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Marquee = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  user-select: none;
`;
const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 10s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;


