import styled from "styled-components"

type WorkPropsType = {
title: string,
text: string,
src: string,
alt: string
}


export const Work = (props: WorkPropsType) => {
    return (
<StyledWork>
<Image alt={`image with ${props.alt}`} src={props.src} />
<Title>{props.title}</Title>
<Text>{props.text}</Text>
<Link href='#'>demo</Link>
<Link href='#'>code</Link>
</StyledWork>
    )
}

const StyledWork = styled.div`
    background-color: #e7fa41;
    max-width: 540px;
    width: 100%;
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`
const Title = styled.h3`
    
`
const Link = styled.a`
    
`
const Text = styled.p`
    
`
