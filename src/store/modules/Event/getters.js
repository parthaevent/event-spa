'use strict';

import get from 'lodash/get';

/**
 * The task for this getter to get event related details
 */
const getters = {
  getEventDetails: (state) => {
    return get(state, 'eventDetails', []);
  },
  getEventSaved: (state) => {
    return get(state, 'successToSaveEvent');
  }
};

export default getters;
