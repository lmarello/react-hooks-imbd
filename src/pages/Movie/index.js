import React, { useEffect, useState } from 'react'
import { Container, CircularProgress, Typography } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { searchMovieById } from '../../redux/actions/search'
import { movieResult as movieResultSelector } from '../../redux/selectors'

export default ({ match }) => {
  const dispatch = useDispatch()
  const movieResult = useSelector((state) => movieResultSelector(state))
  const { id: movieId } = match.params

  useEffect(() => {
    dispatch(searchMovieById({ movieId }))
  }, [movieId])

  console.log(movieResult)

  if (!movieResult) return <CircularProgress size={50} color="primary" />

  const { Title, Poster, Plot } = movieResult

  return (
    <Container>
      <Typography variant="h3">{Title}</Typography>
      <img src={Poster} alt={Title} />
      <p>{Plot}</p>
      <Typography variant="h6">
        No voy a ponerme en detalle a poner mas datos XD
      </Typography>
    </Container>
  )
}
