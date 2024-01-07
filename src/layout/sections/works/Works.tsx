import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { Menu } from "../../../components/menu/Menu"
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from "../../../assets/images/proj_1.webp"
import timerImg from "../../../assets/images/proj_2.webp"

const worksItems = ['ALL','Landing Page', 'React', 'SPA'];

export const Works = () => {
    return(
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify="space-around">
                <Work title="Social Network" src={socialImg}
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
                
                <Work title="Timer" src={timerImg}
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit ut labore et dolore magna aliqua Ut enim"/>
            </FlexWrapper>
        </StyledWorks>
    )
}

const StyledWorks = styled.section`
min-height: 100vh;
background-color: #acacf0;
`