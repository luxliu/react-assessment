import { createSelector } from 'reselect';

import { getModuleSelector } from 'src/redux/utils';

export const paymentSelector = getModuleSelector('payment');


export const submitCountSelector = createSelector(
    paymentSelector,
    module => module.submitCount
  );

