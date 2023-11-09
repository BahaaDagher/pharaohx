import React from "react";
import styled, { keyframes, css } from "styled-components";
import { Colors } from "../../Theme";
import p1 from "../../assets/pics/1.png" 
import p2 from "../../assets/pics/2.png" 
import p3 from "../../assets/pics/3.png" 
import p4 from "../../assets/pics/4.png" 
import p5 from "../../assets/pics/5.png" 
import p6 from "../../assets/pics/6.png" 
import p7 from "../../assets/pics/7.png" 
import p8 from "../../assets/pics/8.png" 
import p9 from "../../assets/pics/9.png" 
import p10 from "../../assets/pics/10.png" 
import p11 from "../../assets/pics/11.png" 
function ImageSlider() {
  const row1 = [
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    p8,
    p9,
    p10,
    p11,
  ];

 

  return (
    <AppContainer>
      <Wrapper>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} draggable="false" />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} draggable="false" />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

export default ImageSlider;

const AppContainer = styled.div`

  background-color : #000 ;
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding : 10px 0 ;
  border-top : 2px solid ${Colors.gold} ;
    border-bottom : 2px solid ${Colors.gold} ;
    
    
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
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  ${'' /* width: 100%; */}
    flex: 0 0 100px; 
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;


const ImageGroup = styled.div`
    width : 230px ;
    margin : 0 10px ; 
    @media (max-width: 600px) {
    width : 150px ;
    }
    @media (max-width: 400px) {
    width : 100px ;
    }
`;

const Image = styled.img`
  object-fit: contain;
  border-radius: 25px;
  border : 2px solid ${Colors.gold} ;  
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  ${'' /* padding: 5px 20px; */}
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;