import * as React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
    ${tw`bg-gray-300 ml-auto mr-auto w-1/2 h-32 text-center flex flex-col items-center p-32`}
`;

const IndexPage = () => {
    return (
        <Container>
            <h1>Hello world!</h1>
            <p>Enjoy working with tailwindcss and styled-components!</p>
        </Container>
    );
};

export default IndexPage;
