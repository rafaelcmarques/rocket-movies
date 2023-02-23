import { Container } from "./styled"

export function Input({ icon: Icon, value, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest}></input>
    </Container>
  )
}
