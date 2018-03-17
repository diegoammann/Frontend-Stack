// @flow
type ActionTypes = { [key: string]: string };

const ACTION_TYPES: ActionTypes = {
  GET_JOKE: 'CHUCK-NORRIS/GET-JOKE',
  GET_JOKE_FAILED: 'CHUCK-NORRIS/GET-JOKE-FAILED',
  GET_JOKE_SUCCEEDED: 'CHUCK-NORRIS/GET-JOKE-SUCCEEDED',
};

type ActionType = $Keys<typeof ACTION_TYPES>;

export type GetJokeAction = {|
  +type: ActionType,
  state: {
    completed: boolean,
    joke?: string,
    error?: string
  }
|};

type GetJokeFn = () => GetJokeAction;
type GetJokeFailedFn = (error: string) => GetJokeAction;
type GetJokeSucceededFn = (joke: string) => GetJokeAction;

const getJoke: GetJokeFn = () => ({
  type: ACTION_TYPES.GET_JOKE,
  state: {
    completed: false,
    joke: undefined,
    error: undefined,
  },
});

const getJokeFailed: GetJokeFailedFn = error => ({
  type: ACTION_TYPES.GET_JOKE_FAILED,
  state: {
    completed: true,
    joke: undefined,
    error,
  },
});

const getJokeSucceeded: GetJokeSucceededFn = joke => ({
  type: ACTION_TYPES.GET_JOKE_SUCCEEDED,
  state: {
    completed: true,
    joke,
    error: undefined,
  },
});

export {
  ACTION_TYPES,
  getJoke,
  getJokeFailed,
  getJokeSucceeded,
};
