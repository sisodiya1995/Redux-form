import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"


import { Formdata } from "./component/formData"
import { AddForm } from "./component/addForm"
import { addArticle, removeArticle } from "./store/actionCreators"
import { Dispatch } from "redux"

const App: React.FC = () => {
  const Forms: readonly IForm[] = useSelector(
    (state: FormState) => state.Forms,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  const saveForm = React.useCallback(
    (Form: IForm) => dispatch(addArticle(Form)),
    [dispatch]
  )

  return (
    <main>
      <h1>User form</h1>
      <AddForm saveForm={saveForm} />
      {Forms.map((Form: IForm) => (
        <Formdata
          key={Form.id}
          Form={Form}
          removeForm={removeArticle}
        />
      ))}
    </main>
  )
}
export default App
