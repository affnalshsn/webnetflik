import styled from "styled-components";

export const Contentimg = styled.div`
    height: 100vh;
    background-image: url( ${props=>props.imgUrl});
    background-size: cover; 
    color: rgb(238, 7, 7);
    text-align:center
`;
export const Text = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 150px;
`