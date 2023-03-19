
import Home from "../../pages/Home"
import Os from "../../pages/Os"
import { Header } from "../Header"
import { Container } from "./style"

export const Layout = () => {
  return (
    <Container>
      <Header/>
      <Home/>
      <Os/>
    </Container>
  )
}