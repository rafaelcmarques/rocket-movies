import { useState } from "react"
import { Container, Form, Background } from "./styles"
import { Input } from "../../components/Input"
import { FiArrowLeft, FiUser, FiMail, FiLock } from "react-icons/fi"
import { Button } from "../../components/Button"
import { Link, useNavigate } from "react-router-dom"
import { api } from "../../service/api"

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário Cadastrado com sucesso!")
        navigate("/")
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível cadastrar")
        }
      })
  }

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
            <Input
              type="text"
              icon={FiUser}
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="email"
              icon={FiMail}
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              icon={FiLock}
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button title={"Cadastrar"} onClick={handleSignUp} />
          </div>

          <Link to="/">
            <FiArrowLeft /> Voltar para o login
          </Link>
        </main>
      </Form>
      <Background />
    </Container>
  )
}
