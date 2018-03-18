// @flow
import createReducer from './createReducer';
import { type ChuckNorrisState, makeChuckNorrisState } from '../states';
import { chuckNorris, type GetJokeAction } from '../actions';

type HandleActionFn = (state: ChuckNorrisState, action: GetJokeAction) => ChuckNorrisState;

const handleAction: HandleActionFn = (state, action) => state.merge(action.state);

export default createReducer(makeChuckNorrisState(), {
  [chuckNorris.ACTION_TYPES.GET_JOKE]: handleAction,
  [chuckNorris.ACTION_TYPES.GET_JOKE_SUCCEEDED]: handleAction,
  [chuckNorris.ACTION_TYPES.GET_JOKE_FAILED]: handleAction,
});
