import { Container, Content } from "./styles"
import { MoviePreview } from "../../components/MoviePreview"
import { FiPlus } from "react-icons/fi"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <header>
          <h1>Meus filmes</h1>
          <Link to="/create">
            <Button title={"Adicionar Filme"} icon={FiPlus}></Button>
          </Link>
        </header>

        <main>
          <MoviePreview
            movie={{
              title: "Interstellar",
              description:
                "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...",
              tags: [
                { id: 1, name: "Ficção Cientifica" },
                { id: 2, name: "Drama" },
                { id: 3, name: "Família" },
              ],
            }}
          />
          <MoviePreview
            movie={{
              title: "Pantera Negra",
              description:
                "Conheça a história de T'Challa, príncipe do reino de Wakanda, que perde o seu pai e viaja para os Estados Unidos, onde tem contato com os Vingadores. Entre as suas habilidades estão a velocidade, inteligência e os sentidos apurados....",
              tags: [
                { id: 1, name: "Héroi" },
                { id: 2, name: "Aventura" },
                { id: 3, name: "Família" },
                { id: 4, name: "Marvel" },
              ],
            }}
          />
          <MoviePreview
            movie={{
              title: "Luca",
              description:
                "Luca vive aventuras com seu novo melhor amigo, mas a diversão é ameaçada por um segredo: seu amigo é um monstro marinho de outro mundo que fica abaixo da superfície da água...",
              tags: [
                { id: 1, name: "Animação" },
                { id: 2, name: "Aventura" },
                { id: 3, name: "Família" },
                { id: 4, name: "Disney" },
              ],
            }}
          />
        </main>
      </Content>
    </Container>
  )
}
