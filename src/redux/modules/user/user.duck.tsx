import { createAction } from "redux-actions";

import { wrapWithModule } from "src/redux/utils";
import { Action } from "src/redux/types";

/*************
 *   TYPES   *
 *************/

type UserType = {
  firstName: string
  lastName: string
};

/*********************
 *   INITIAL STATE   *
 *********************/

const initialState: UserType = {
  firstName: "",
  lastName: ""
};

/***************
 *   ACTIONS   *
 ***************/

const wrapWithNamespace = wrapWithModule("modules/user");
const GET_USER = wrapWithNamespace("GET_USER");

export const getUser = createAction(GET_USER);

/***************
 *   REDUCER   *
 ***************/
export default (state = initialState, action: Action) => {
  const { type } = action;

  const reducer = {
    [GET_USER]: (state: any) => ({
      ...state,
      firstName: "ASB"
    })
  }[type];

  return reducer ? reducer(state) : state;
};
