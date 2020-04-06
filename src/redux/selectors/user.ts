import { createSelector } from "reselect";

import { getModuleSelector } from "src/redux/utils";

export const userSelector = getModuleSelector("user");

export const firstNameSelector = createSelector(
  userSelector,
  module => module.firstName
);
