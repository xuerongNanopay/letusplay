import { Container } from "./styles/Container.styled"
import { StyledHeader, Nav, Logo } from "./styles/Header.styled"
import { Button } from "./styles/Button.styled"

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <div><Logo src='./images/logo.svg' alt='' /></div>
          <div><Button>Try It Free adsfd</Button></div>
        </Nav>
      </Container>
    </StyledHeader>
  )
}