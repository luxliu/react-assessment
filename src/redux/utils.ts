import * as R from "ramda";
import { createSelector } from "reselect";
import { APP_NAME } from "src/constants";


// Follow the standard of ducks-redux-reducer:
// https://github.com/erikras/ducks-modular-redux
const getActionWrapper = (moduleName: string, widgetName: string) => (
  actionName: string
) => `${[moduleName, widgetName, actionName].join("/")}`;

export const wrapWithModule = R.curry(getActionWrapper)(APP_NAME);

export const getModuleSelector = (key: string) =>
  createSelector(
    (state: any) => state[key],
    module => module
  );
