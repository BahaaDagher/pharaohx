import styled from "@emotion/styled";
import { FlexCenter } from "./FlexCenter";
import { Colors } from "../Theme";

export const Parent = styled(FlexCenter)(({ theme }) => ({
    position : "relative" ,
    flexDirection : "column" ,
    backgroundColor : "#000" ,
    color : "#fff" , 
    padding : "60px 60px 0 60px" ,
    textAlign : "center" ,
    [theme.breakpoints.down("700")] : {
        padding : "60px 35px 0 35px" ,
    }, 
}));