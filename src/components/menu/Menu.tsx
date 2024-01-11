import styled from "styled-components"

// {name: string, link: string}


export const Menu = (props: { menuItems: Array<{name: string, link?: string}> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => <li role="menuitem"  key={index}><a href={item.link}>{item.name}</a></li>)}
            </ul>
        </StyledMenu>
    )
}

const StyledMenu = styled.nav`
    ul{
        display: flex;
        gap: 30px;
        justify-content: center;
        list-style: none;
        
        li{
            a{
                text-decoration: none;
        }
        }
        
    }
`