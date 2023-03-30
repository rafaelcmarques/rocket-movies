import { Link, useNavigate } from "react-router-dom"

import { Container, Profile, Search } from "./styles"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { useAuth } from "../../hooks/auth"
import { api } from "../../service/api"

export function Header({ children }) {
  const { signOut, user } = useAuth()
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder
  const navigate = useNavigate()

  function handleSignOut() {
    signOut()
    navigate("/")
  }

  return (
    <Container>
      <h1>RocketMovies</h1>

      <Search>{children}</Search>

      <Profile>
        <div>
          <Link to="/profile">{user.name}</Link>
          <button onClick={handleSignOut}>sair</button>
        </div>
        <Link to="/profile">
          <img src={avatarUrl} alt="Foto do usuario" />
        </Link>
      </Profile>
    </Container>
  )
}
