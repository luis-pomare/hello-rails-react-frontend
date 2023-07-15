import SET_GREETING from './types';

const setGreeting = (greeting) => ({
  type: SET_GREETING,
  payload: greeting,
});

export default setGreeting;
