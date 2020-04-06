import { combineReducers } from "redux";

import { default as payment } from "src/pages/register/register.duck";
import { default as user } from "./modules/user/user.duck";

export const creditCardReducers = combineReducers({ user, payment });
