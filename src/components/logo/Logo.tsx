import { Icon } from "../icon/Icon"
import styled from "styled-components"
import { keyframes } from "styled-components";

export const Logo = () =>{
    return (
        <a href="#">
            <StyledIcon>
        <Icon iconId={'rocket'} height='40px' width="40px" style={{'borderRadius':'5px'}}/>
        </StyledIcon>
    </a>
    )
}

const MyAnimation = keyframes`
from {
    transform: rotate(0deg);
    transform: rotate(90deg);
}
to {
    transform: rotate(90deg);
    margin-left: 200px;
    position: absolute;
}

`

const StyledIcon = styled.div`
  &:hover svg {
    width: 50px;
    animation: ${MyAnimation} 3s ease-in-out infinite; // linear infinite alternate 
  }
`