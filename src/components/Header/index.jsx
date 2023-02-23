import { Container, Profile } from "./styles"
import { FiSearch } from "react-icons/fi"
import { Input } from "../Input"
import { Link } from "react-router-dom"

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder="Pesquisar pelo título" icon={FiSearch} />

      <Profile>
        <div>
          <Link to="/profile">Rafael Marques</Link>
          <span>sair</span>
        </div>
        <Link to="/profile">
          <img
            src="https://github.com/rafaelcmarques.png"
            alt="Foto do usuario"
          />
        </Link>
      </Profile>
    </Container>
  )
}
