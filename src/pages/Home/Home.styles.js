import { makeStyles } from '@material-ui/styles'

const centeredProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export default makeStyles({
  container: {
    height: '100vh',
    flexDirection: 'column',
    ...centeredProps,
  },
  cardContainer: {
    flexDirection: 'column',
    width: 400,
    height: 200,
    padding: '2rem',
    ...centeredProps,
  },
  titleGridContainer: {
    ...centeredProps,
  },
  title: {
    fontSize: '2rem',
  },
  icon: {
    fontSize: '2rem',
    marginLeft: '1rem',
  },
  textfield: {
    marginTop: '2rem',
    width: '90%',
  },
  buttonsContainer: {
    marginTop: '3rem',
    marginBottom: '2rem',
  },
  searchButton: {
    marginLeft: '2rem',
  },
})
