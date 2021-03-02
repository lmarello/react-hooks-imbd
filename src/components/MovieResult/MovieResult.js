import { Card, Grid, Typography, Button } from '@material-ui/core'
import React from 'react'
import styles from './MovieResult.styles'
import { withRouter } from 'react-router-dom'

const MovieResult = ({ id, title, type, year, imgSrc, history }) => {
  const classes = styles()

  const handleClick = () => {
    history.push(`/movie/${id}`)
  }

  return (
    <Card className={classes.cardContainer}>
      <Grid container>
        <Grid item>
          <img src={imgSrc} alt={title} className={classes.poster} />
        </Grid>
        <Grid item className={classes.dataContainer}>
          <Typography>{title}</Typography>
          <Typography>{year}</Typography>
          <Typography>{type}</Typography>
          <Button color="primary" variant="contained" onClick={handleClick}>
            Ver mas
          </Button>
        </Grid>
      </Grid>
    </Card>
  )
}

export default withRouter(MovieResult)
