import styled from "styled-components";
import { Theme } from "../styles/Theme";

export const SectionTitle = styled.h2`
text-align: center;
font-family: "Josefin Sans", "sans-serif";
font-size: 36px;
font-weight: 600;
letter-spacing: 5px;
position: relative;
margin-bottom: 90px;

&::before{
        content:"";
        display: inline-block;
        width: 55px;
        height: 1px;
        background-color: ${Theme.colors.accent};
        position: absolute;
        left: 50%;
        bottom: -30px;
        transform: translateX(-50%);

    }


`