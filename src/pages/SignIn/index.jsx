import { Container, Form, Background } from "./styles"
import { Input } from "../../components/Input"
import { FiMail, FiLock } from "react-icons/fi"
import { Button } from "../../components/Button"

export function SignIn() {
  return (
    <Container>
      <Form>
        <header>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir</p>
        </header>

        <main>
          <h2>Faça seu login</h2>

          <div className="input-wrapper">
            <Input type="email" icon={FiMail} placeholder="E-mail" />
            <Input type="password" icon={FiLock} placeholder="Senha" />
            <Button title={"Entrar"} />
          </div>

          <a href="#"> Criar Conta</a>
        </main>
      </Form>
      <Background />
    </Container>
  )
}
