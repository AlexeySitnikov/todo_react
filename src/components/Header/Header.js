import { Form } from '../Form/Form'

function Header({ addNewTodoFunc }) {
  return (
    <header>
      <Form addNewTodoFunc={addNewTodoFunc} />
    </header>
  )
}

export {
  Header,
}
