import * as React from "react"

type Props = {
  saveForm: (Form: IForm | any) => void
}

export const AddForm: React.FC<Props> = ({ saveForm }) => {
  const [Form, setForm] = React.useState<IForm | {}>({fname:"",lname:"",gender:""})

  const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
    setForm({
      ...Form,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const addNewArticle = (e: React.FormEvent) => {
    e.preventDefault()
    saveForm(Form)
    setForm({fname:"",lname:"",gender:""})
  }

  return (
    <form >
      <input
        type="text"
        id="fname"
        placeholder="Enter first name"
        onChange={handleArticleData}
      />
      <input
        type="text"
        id="lname"
        placeholder="Enter last name"
        onChange={handleArticleData}
      />
       <input
        type="text"
        id="gender"
        placeholder="Enter gender"
        onChange={handleArticleData}
      />
      <button  type="submit" onClick={addNewArticle}>
        Add Data
      </button>
    </form>
  )
}