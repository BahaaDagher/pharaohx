import styled from "@emotion/styled";
import { Colors } from "../Theme";

export const Title = styled("div")(({ theme }) => ({
    fontSize : "50px" ,
    padding : "0 80px 10px 80px" ,
    borderBottom : `4px solid ${Colors.gold}` ,
    marginBottom : "50px" ,
    // lineHeight: '61px',
    letterSpacing: '0.2em',
    [theme.breakpoints.down("700")] : {
        // width : "100%" , 
        fontSize : "30px" ,
        padding : "0 40px 10px 40px" ,
    }, 
    [theme.breakpoints.down("430")] : {
        width : "90%" ,
        fontSize : "20px" ,
        padding : "0 20px 10px 20px" ,
    }, 
}));