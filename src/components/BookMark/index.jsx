import { Container } from "./styles"
import { FiX, FiPlus } from "react-icons/fi"

export function BookMark({ value, isNew, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      {value}
      {isNew ? <FiPlus /> : <FiX />}
    </Container>
  )
}
