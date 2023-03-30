import { Container, Content } from "./styles"
import { MoviePreview } from "../../components/MoviePreview"
import { FiPlus, FiSearch } from "react-icons/fi"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import { api } from "../../service/api"

export function Home() {
  const [search, setSearch] = useState("")
  const [movies, setMovies] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movie-notes?title=${search}`)
      setMovies(response.data)
    }
    fetchMovies()
  }, [search])

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  return (
    <Container>
      <Header>
        <Input
          icon={FiSearch}
          placeholder={"Pesquisar pelo título"}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Header>
      <Content>
        <header>
          <h1>Meus filmes</h1>
          <Link to="/create">
            <Button title={"Adicionar Filme"} icon={FiPlus}></Button>
          </Link>
        </header>

        <main>
          {movies.map((movie) => (
            <MoviePreview
              key={String(movie.id)}
              data={movie}
              onClick={() => handleDetails(movie.id)}
            />
          ))}
        </main>
      </Content>
    </Container>
  )
}
