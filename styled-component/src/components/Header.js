import { Container } from "./styles/Container.styled"
import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled"
import { Button } from "./styles/Button.styled"
import { Flex } from "./styles/Flex.styles"

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <div><Logo src='./images/logo.svg' alt='' /></div>
          <div><Button>Try It Free adsfd</Button></div>
        </Nav>
        <Flex>
          <div>
            <h1>Laboris aliqua anim deserunt enim incididunt esse sunt.</h1>
            <p>Est duis non aliquip aliquip magna laboris. Occaecat dolore esse occaecat nisi aliquip nostrud anim. Quis ea adipisicing sunt laboris excepteur magna amet esse. Nostrud labore tempor consequat elit ad. Minim consequat incididunt cillum velit aliqua est occaecat elit. Cupidatat tempor sit Lorem elit elit velit do fugiat occaecat culpa.</p>
          </div>

          <Image src="./images/illustration-mockups.svg" alt=""></Image>
        </Flex>
      </Container>
    </StyledHeader>
  )
}