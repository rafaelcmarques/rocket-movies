import { Container, Content, Form } from "./styles"
import { Header } from "../../components/Header"
import { FiArrowLeft } from "react-icons/fi"
import { Input } from "../../components/Input"
import { BookMark } from "../../components/BookMark"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"

export function CreateMovie() {
  return (
    <Container>
      <Header />
      <Content>
        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>
        <Form>
          <h1>Novo Filme</h1>
          <div>
            <Input type="text" placeholder="Título" />
            <Input type="text" placeholder="Sua nota de 0 a 5" />
          </div>
          <textarea placeholder="Observações" />
          <div>
            <h2>Marcadores</h2>
            <div className="bookmarks">
              <BookMark value={"Aventura"} />
              <BookMark value={"Família"} />
              <BookMark isNew value={"Novo Marcador"} />
            </div>
            <div className="button-wrapper">
              <button>Excluir Filme</button>
              <Button title={"Salvar alterações"} />
            </div>
          </div>
        </Form>
      </Content>
    </Container>
  )
}
