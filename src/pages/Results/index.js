import React, { useEffect, useState } from 'react'
import { Container, CircularProgress } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import queryString from 'query-string'

import { searchMovie } from '../../redux/actions/search'
import { movieResults, isSearchLoading } from '../../redux/selectors'
import { MovieResult } from '../../components/MovieResult'

export default ({ location }) => {
  const dispatch = useDispatch()
  const movies = useSelector((state) => movieResults(state))
  const isLoading = useSelector((state) => isSearchLoading(state))
  const [search, setSearch] = useState('')

  useEffect(() => {
    const { movie } = queryString.parse(location.search)
    if (movie && movie !== search) {
      dispatch(searchMovie({ movie }))
      setSearch(movie)
    }
  }, [search])

  const renderMovies = () => {
    if (movies) {
      return movies.map(({ Poster, Title, Type, Year, imdbID }) => (
        <MovieResult
          key={imdbID}
          id={imdbID}
          title={Title}
          imgSrc={Poster}
          year={Year}
          type={Type}
        />
      ))
    }

    if (isLoading) return <CircularProgress size={100} color="primary" />

    if (search && !isLoading) return <span>No se encontraron resultados</span>

    return null
  }

  return <Container>{renderMovies()}</Container>
}
