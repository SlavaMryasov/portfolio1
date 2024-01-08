import IconsSprite from '../../assets/images/icons-sprite.svg'
import styled from "styled-components"
import { keyframes } from "styled-components";

type IconPropsType ={
    style?:{
        borderRadius?: string,
    },
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string,
}

export const Icon = (props: IconPropsType) => {
    return (
        <StyledIcon>
        <svg style={props.style} width={props.width || '50px'} height={props.height || '50px'} viewBox={props.viewBox || "0 0 50 50"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${IconsSprite}#${props.iconId}`}/> 
        </svg>
        </StyledIcon>
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
    animation: ${MyAnimation} 3s ease-in-out infinite;
  }
`
// object-fit: cover;



