import { useState } from "react"
import { Container, Form, Background } from "./styles"
import { Input } from "../../components/Input"
import { FiMail, FiLock } from "react-icons/fi"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/auth"

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn(e) {
    e.preventDefault()
    signIn({ email, password })
  }

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
            <Button title={"Entrar"} onClick={handleSignIn} />
          </div>

          <Link to="/register"> Criar Conta</Link>
        </main>
      </Form>
      <Background />
    </Container>
  )
}
