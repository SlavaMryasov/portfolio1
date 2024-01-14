import styled from "styled-components"
import { Icon } from "../../../components/icon/Icon"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Theme } from "../../../styles/Theme"


export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction="column" align="center">
                <Name>Slava</Name>
                <SocialList>

                    <SocialItem tabIndex={2}>
                        <SocialLink>
                            <Icon iconId="instagram" height="21px" width="21px" viewBox="0 0 21px 21px"/>
                        </SocialLink>
                    </SocialItem>

                    <SocialItem tabIndex={1}>
                        <SocialLink>
                            <Icon iconId="telegram" height="21px" width="21px" viewBox="0 0 21px 21px"/>
                        </SocialLink>
                    </SocialItem>

                    <SocialItem tabIndex={4}>
                        <SocialLink>
                            <Icon iconId="vk" height="21px" width="21px" viewBox="0 0 21px 21px"/>
                        </SocialLink>
                    </SocialItem>

                    <SocialItem tabIndex={3}>
                        <SocialLink>
                            <Icon iconId="linkedin" height="21px" width="21px" viewBox="0 0 21px 21px"/>
                        </SocialLink>
                    </SocialItem>

                </SocialList>
                <Copyright>© 2024 Slava Mryasov, Everything will be fine!</Copyright>
            </FlexWrapper>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: ${Theme.colors.primaryBg};
    padding: 40px 0;
`
const Name = styled.span`
font-family: "Josefin Sans", sans-serif;
font-size: 22px;
font-weight: 700;
letter-spacing: 3px;
    
`
const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
    margin: 30px 0;
`
const SocialItem = styled.li`

`

const SocialLink = styled.a`
    border-radius: 50%;
background-color: rgba(255, 255, 255, 0.10);
height: 35px;
width: 35px;

display: flex;
justify-content: center;
align-items: center;

color: ${Theme.colors.accent};

&:hover {
    color: ${Theme.colors.primaryBg};
    transform: translateY(-4px);
}
`
const Copyright = styled.small`
text-align: center;
font-size: 12px;
font-weight: 400;
opacity: 0.5;
`
