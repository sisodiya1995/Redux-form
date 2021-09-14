import * as actionTypes from "./actionTypes"

const initialState: FormState = {
  Forms: [
    {
      id: 1,
      fname: "akash",
      lname:"singh",
      gender:"male"
        
    }
  
  ]
}

const reducer = (
    state: FormState = initialState,
    action: FormAction
  ): FormState => {
    switch (action.type) {
      case actionTypes.ADD_FORM:
        const newForm: IForm = {
          id: Math.random(), // not really unique
          fname: action.Form.fname,
          lname:action.Form.lname,
          gender: action.Form.gender,
          
        }
        return {
          ...state,
          Forms: state.Forms.concat(newForm),
        }
      case actionTypes.REMOVE_FORM:
        const updatedForms: IForm[] = state.Forms.filter(
          Form => Form.id !== action.Form.id
        )
        return {
          ...state,
          Forms: updatedForms,
        }
    }
    return state
  }
  
  export default reducer