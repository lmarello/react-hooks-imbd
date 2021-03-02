import { get } from 'lodash'
import {
  SEARCH_MOVIE_BY_ID_COMPLETE,
  SEARCH_MOVIE_BY_ID_ERROR,
  SEARCH_MOVIE_BY_ID_START,
  SEARCH_MOVIE_COMPLETE,
  SEARCH_MOVIE_ERROR,
  SEARCH_MOVIE_START,
} from '../../consts/actionTypes'

const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE_START:
      return { ...state, isLoading: true }
    case SEARCH_MOVIE_ERROR:
      return { ...state, isLoading: false, movieResults: null }
    case SEARCH_MOVIE_COMPLETE:
      const movieResults = action.results.data
      return { ...state, isLoading: false, movieResults }
    case SEARCH_MOVIE_BY_ID_START:
      return { ...state, isLoading: true, movieResult: null }
    case SEARCH_MOVIE_BY_ID_ERROR:
      return { ...state, isLoading: false, movieResults: null }
    case SEARCH_MOVIE_BY_ID_COMPLETE:
      const movieResult = action.results.data
      return { ...state, isLoading: false, movieResult }
    default:
      return { ...state }
  }
}
