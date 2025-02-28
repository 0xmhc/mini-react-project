import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: red;
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">The Wild Oasis</Heading>
        <Heading as="h2">Check In and out</Heading>
        <Button>Check In</Button>
        <Input type="number" placeholder="number of guests" />
        <Heading as="h3">Forms</Heading>
      </StyledApp>
      ;
    </>
  );
}

export default App;
