import * as React from "react"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"

type Props = {
  Form: IForm
  removeForm: (Form: IForm) => void
}

export const Formdata: React.FC<Props> = ({ Form, removeForm }) => {
  const dispatch: Dispatch<any> = useDispatch()

  const deleteArticle = React.useCallback(
    (Form: IForm) => dispatch(removeForm(Form)),
    [dispatch, removeForm]
  )

  return (
    
      <div>
        <h2>User Detail</h2>
        <p>First Name:{Form.fname}</p>
        <p>Last Name:{Form.lname}</p>
        <p>Gender:{Form.gender}</p>
      
      <button onClick={() => deleteArticle(Form)}>Delete</button>
    </div>
  )
}