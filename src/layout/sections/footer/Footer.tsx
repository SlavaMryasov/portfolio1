import styled from "styled-components"
import { Icon } from "../../../components/icon/Icon"
import { FlexWrapper } from "../../../components/FlexWrapper"


export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction="column" align="center">
                <Name>Slava</Name>
                <SocialList>

                    <SocialItem>
                        <SocialLink>
                            <Icon iconId="instagram" height="21px" width="21px" viewBox="0 0 21px 21px"/>
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink>
                            <Icon iconId="telegram" height="21px" width="21px" viewBox="0 0 21px 21px"/>
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink>
                            <Icon iconId="vk" height="21px" width="21px" viewBox="0 0 21px 21px"/>
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink>
                            <Icon iconId="linkedin" height="21px" width="21px" viewBox="0 0 21px 21px"/>
                        </SocialLink>
                    </SocialItem>

                </SocialList>
                <Copyright>© 2023 Slava Mryasov, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: #ffab0f;
    min-height: 20vh;
`
const Name = styled.span`
    
`
const SocialList = styled.ul`
    display: flex;
    gap: 20px;
`
const SocialItem = styled.li`
 
`

const SocialLink = styled.a`
    
`
const Copyright = styled.small`
    
`
