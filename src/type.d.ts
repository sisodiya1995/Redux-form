interface IForm {
    id: number
    fname: string
    lname: string
    gender:string
  }
  
  type FormState = {
    Forms: IForm[]
  }
  
  type FormAction = {
    type: string
    Form: IForm
  }
  
  type DispatchType = (args: FormAction) => FormAction