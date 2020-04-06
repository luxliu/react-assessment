import { createAction } from "redux-actions";

import { wrapWithModule } from "src/redux/utils";
import { Action } from "src/redux/types";

/*************
 *   TYPES   *
 *************/

type RegisterType = {
  submitCount: number;
};

/*********************
 *   INITIAL STATE   *
 *********************/

const initialState: RegisterType = {
  submitCount: 0
};

/***************
 *   ACTIONS   *
 ***************/

const wrapWithNamespace = wrapWithModule("modules/register");
const SUBMIT_REGISTER = wrapWithNamespace("SUBMIT_REGISTER");

export const submitRegister = createAction(SUBMIT_REGISTER);

/***************
 *   REDUCER   *
 ***************/
export default (state = initialState, action: Action) => {
  const { type, payload } = action;

  const reducer = {
    [SUBMIT_REGISTER]: (state: RegisterType, payload: any) => {
      console.log("submit payload", payload);
      return { submitCount: state.submitCount + 1 };
    }
  }[type];

  return reducer ? reducer(state, payload) : state;
};
