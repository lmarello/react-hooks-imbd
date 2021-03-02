import React, { useState } from 'react'
import {
  Container,
  Card,
  Typography,
  Grid,
  TextField,
  Button,
} from '@material-ui/core'
import styles from './Home.styles'
import { MovieIcon } from '../../icons'
import { keys } from '../../consts/keys'

export default ({ history }) => {
  const [search, setSearch] = useState('')
  const classes = styles()

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSearch = () => {
    history.push(`/results?movie=${search}`)
  }

  const handlePress = (e) => {
    if (e.key === keys.ENTER) {
      setSearch(e.target.value)
      handleSearch()
    }
  }

  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid className={classes.titleGridContainer}>
          <Typography className={classes.title}>
            Buscador de películas
          </Typography>
          <MovieIcon className={classes.icon} />
        </Grid>
        <TextField
          value={search}
          placeholder="Buscar"
          onChange={handleChange}
          className={classes.textfield}
          onKeyPress={handlePress}
        />
        <Grid className={classes.buttonsContainer}>
          <Button onClick={() => setSearch('')}>Limpiar</Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            className={classes.searchButton}
          >
            Buscar
          </Button>
        </Grid>
      </Card>
    </Container>
  )
}
