import styled from "styled-components"

// {name: string, link: string}


export const HeaderMenu = (props: { menuItems: Array<{name: string, link?: string}> }) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, index) => <ListItem role="menuitem"  key={index}><Link href={item.link}>{item.name}</Link></ListItem>)}
            </ul>
        </StyledHeaderMenu>
    )
}

const StyledHeaderMenu = styled.nav`
    ul{
        display: flex;
        gap: 30px;
        justify-content: center;
        list-style: none;
    }
`

const ListItem = styled.li`

`

const Link = styled.a`
color: #7572D5;

text-align: center;
font-family: 'Josefin Sans', sans-serif;
font-size: 27px;
font-weight: 400;
`