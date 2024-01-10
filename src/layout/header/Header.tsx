import styled from "styled-components"
import { Logo } from "../../components/logo/Logo"
import { Menu } from "../../components/menu/Menu"

    const items = [
        {name: "Home", link: "#Home"},
        {name: "Skills", link: "#Skills"},
        {name: "Works", link: "#Works"},
        {name: "Testimony", link: "#Testimony"},
        {name: "Contact", link: "#Contact"}
    ]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Menu menuItems ={items}/>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
background-color: #97ec97;
display: flex;
justify-content: space-between;
`