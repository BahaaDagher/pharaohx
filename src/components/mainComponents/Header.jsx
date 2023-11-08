import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react'
import { Colors } from '../../Theme';

const Parent = styled("div")(({ theme }) => ({
    height : `calc(100vh - 86px)` ,
    backgroundColor : Colors.gold ,
}));
const WelcomeDiv = styled("div")(({ theme }) => ({
    paddingTop : "75px" , 

    textAlign : "center" ,
    
}));
const Welcome = styled("div")(({ theme }) => ({
    fontSize : "75px" ,
    color : Colors.lightGold , 
    WebkitTextStroke: `2px ${Colors.brown}`,
}));
const PharaohX = styled("div")(({ theme }) => ({
    fontSize : "75px" ,
    color : Colors.brown , 
    WebkitTextStroke: `2px ${Colors.lightGold}`,
    lineHeight: '91px',
    letterSpacing: '0.35em',
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
        <Parent>
            <WelcomeDiv>
                <Welcome>welcome to</Welcome>
                <PharaohX>{title}</PharaohX>
            </WelcomeDiv>

        </Parent>
    </>
  )
}

export default Header