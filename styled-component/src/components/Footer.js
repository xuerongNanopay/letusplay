import { Container } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styles"
import { StyledFooter } from "./styles/Footer.styled"

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.save" alt="" />

        <Flex>
          <ul>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
          </ul>
          <ul>
            <li>bbbb</li>
            <li>bbbb</li>
            <li>bbbb</li>
          </ul>
          <ul>
            <li>cccc</li>
            <li>cccc</li>
            <li>cccc</li>
          </ul>
        </Flex>
        <p>&copy; vvvvvv</p>
      </Container>
    </StyledFooter>
  )
}