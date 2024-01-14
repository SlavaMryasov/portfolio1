import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { Button } from "../../../components/Button"
import { Container } from "../../../components/Container"
import { Theme } from "../../../styles/Theme"


export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
            <SectionTitle>Contacts</SectionTitle>
            <StyledForm>
                <StyledField aria-placeholder="name" placeholder="name"/>
                <StyledField aria-placeholder="subjects" placeholder="subject"/>
                <StyledField aria-placeholder="message" placeholder="message" as={"textarea"}/>
                <Button type="submit">Send message</Button>            
            </StyledForm>
            </Container>
        </StyledContacts>
    )
}

const StyledContacts = styled.section`

`
const StyledForm = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;

    textarea {
        resize: none;
        height: 155px;
    }
`
const StyledField = styled.input`
width: 100%;
background-color: ${Theme.colors.secondaryBg};
border: 1px solid ${Theme.colors.borderColor};
padding: 7px 15px;

font-family: "Poppins"; // нужно прописать, потому что браузер для инпута подкидывает стили сам, если шрифт не задан конкретно в боди, а не глобально
font-weight: 400;
font-size: 12px;
letter-spacing: 0.05em;

color: ${Theme.colors.font};

&::placeholder {
    text-transform: capitalize;
    color: #495057;
}

&:focus-visible{
    outline: 1px solid ${Theme.colors.borderColor};
}
`


