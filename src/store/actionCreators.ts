import * as actionTypes from "./actionTypes"

export function addArticle(Form: IForm) {
    const action: FormAction = {
      type: actionTypes.ADD_FORM,
      Form,
    }
  
    return simulateHttpRequest(action)
  }
  
  export function removeArticle(Form: IForm) {
    const action: FormAction = {
      type: actionTypes.REMOVE_FORM,
      Form,
    }
    return simulateHttpRequest(action)
  }
  
  export function simulateHttpRequest(action: FormAction) {
    return (dispatch: DispatchType) => {
      setTimeout(() => {
        dispatch(action)
      }, 500)
    }
  }