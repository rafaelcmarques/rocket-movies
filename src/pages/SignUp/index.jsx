import { Container, Form, Background } from "./styles"
import { Input } from "../../components/Input"
import { FiArrowLeft, FiUser, FiMail, FiLock } from "react-icons/fi"
import { Button } from "../../components/Button"

export function SignUp() {
  return (
    <Container>
      <Form>
        <header>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir</p>
        </header>

        <main>
          <h2>Crie sua conta</h2>

          <div className="input-wrapper">
            <Input type="email" icon={FiUser} placeholder="E-mail" />
            <Input type="email" icon={FiMail} placeholder="E-mail" />
            <Input type="password" icon={FiLock} placeholder="Senha" />
            <Button title={"Cadastrar"} />
          </div>

          <a href="#">
            <FiArrowLeft /> Voltar para o login{" "}
          </a>
        </main>
      </Form>
      <Background />
    </Container>
  )
}
