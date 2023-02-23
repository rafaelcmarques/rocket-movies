import { Container, Form, Avatar } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi"
import { Link } from "react-router-dom"

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>
      </header>

      <main>
        <Form>
          <Avatar>
            <img
              src="https://github.com/rafaelcmarques.png"
              alt="Imagem do Usuário"
            />
            <label htmlFor="avatar">
              <FiCamera size={20} />
              <input id="avatar" type="file" />
            </label>
          </Avatar>
          <Input type="text" placeholder="Nome" icon={FiUser}></Input>
          <Input type="email" placeholder="E-mail" icon={FiMail}></Input>
          <Input type="password" placeholder="Senha atual" icon={FiLock} />
          <Input type="password" placeholder="Nova senha" icon={FiLock} />
          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  )
}
