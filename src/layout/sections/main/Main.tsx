import styled from "styled-components"
import photo from "../../../assets/images/photo.webp"
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi There!</span>
                    <h2>I am Slava Mryasov</h2>
                    <MainTitle>A Web Developer</MainTitle>
                </div>
                <Photo alt="my photo" src={photo} />
            </FlexWrapper>
        </StyledMain>
    )
}

const StyledMain = styled.section`
    min-height: 100vh;
   // background-color: #efb8b85e;
`

const Photo = styled.img`
    width:350px;
    height: 430px;
    object-fit: cover;
`

const MainTitle = styled.h1`
color: red;
`

const Name = styled.h2`

`