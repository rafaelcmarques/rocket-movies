import { Container, Content, Form } from "./styles"
import { Header } from "../../components/Header"
import { FiArrowLeft } from "react-icons/fi"
import { Input } from "../../components/Input"
import { BookMark } from "../../components/BookMark"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"
import { useState } from "react"

import { api } from "../../service/api"
import { useNavigate } from "react-router-dom"

export function CreateMovie() {
  const [title, setTitle] = useState("")
  const [rating, setRating] = useState("")
  const [description, setDescription] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleAddTag() {
    if (newTag === "") {
      return alert("Informe um valor para a tag")
    }
    setTags((prevState) => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted))
  }

  async function handleCreateNote() {
    if (!title) {
      return alert("Nome do do filme é obrigatório")
    }

    if (rating > 5 || rating < 0 || isNaN(rating)) {
      return alert("Nota inválida! Por favor digite apenas números entre 1 e 5")
    }
    if (newTag) {
      return alert(
        "Você deixou uma tag no campo para adicionar. Clique para adiciona-la"
      )
    }

    await api.post("/movie-notes", {
      title,
      description,
      rating,
      tags,
    })
    alert("Filme cadastrado com sucesso!")
    navigate("/")
  }

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
            <Input
              type="text"
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Sua nota de 0 a 5"
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <textarea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />
          <div>
            <h2>Marcadores</h2>
            <div className="bookmarks">
              <BookMark
                isNew
                placeholder={"Nova tag"}
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
              {tags.map((tag, index) => (
                <BookMark
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}
            </div>
            <div className="button-wrapper">
              <button>Excluir Filme</button>
              <Button title={"Salvar"} onClick={handleCreateNote} />
            </div>
          </div>
        </Form>
      </Content>
    </Container>
  )
}
