import styled from "styled-components"
import { Icon } from "../../../../components/icon/Icon"

type SkillPropsType = {
    iconId: string,
    title: string,
    description: string,
}

export const Skill= (props: SkillPropsType) => {
    return(
        <StyledSkill role="menuitem">
        <Icon iconId={props.iconId}/>
        <SkillTitle>{props.title}</SkillTitle>
        <SkillText>{props.description}</SkillText>
    </StyledSkill>
    )
}

const StyledSkill = styled.div`
    width: 30%;
    background-color: #ffffff64;
    margin: 10px;
    border-radius: 7px;
    padding: 2px;
`
const SkillTitle = styled.h3`
    
`
const SkillText = styled.p`
    
`