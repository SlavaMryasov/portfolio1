import styled from "styled-components"
import { Link } from "../../../../components/Link"

// {name: string, link: string}


export const TabMenu = (props: { menuItems: Array<{name: string, link?: string}> }) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((item, index) => <StyledListItem role="menuitem"  key={index}><Link href={item.link}>{item.name}</Link></StyledListItem>)}
            </ul>
        </StyledTabMenu>
    )
}

const StyledTabMenu = styled.nav`
margin-bottom: 40px;
    ul{
        display: flex;
        gap: 20px;
        justify-content: center;
        
    }
`

const StyledListItem= styled.li`

`

