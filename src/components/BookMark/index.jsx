import { Container } from "./styles"
import { FiX, FiPlus } from "react-icons/fi"

export function BookMark({ value, isNew, onClick, placeholder, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        placeholder={placeholder}
      />
      <button>{isNew ? <FiPlus /> : <FiX />}</button>
    </Container>
  )
}
