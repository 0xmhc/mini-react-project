import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  /* background-color: red; */
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis</Heading>
            <div>
              <Heading as="h2">Check In and out</Heading>
              <Button>Check In</Button>
              <Button variation="secondary" size="small">
                Check Out
              </Button>
            </div>
          </Row>
          <Row>
            <Heading as="h3">Forms</Heading>
            <form>
              <Input type="number" placeholder="number of guests" />
              <Input type="number" placeholder="number of guests" />
            </form>
          </Row>
        </Row>
      </StyledApp>
      ;
    </>
  );
}

export default App;
