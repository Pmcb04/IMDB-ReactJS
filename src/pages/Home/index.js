import React, { useState } from 'react'
import { Card, Grid, Typography, TextField, Button } from '@mui/material'
import { styled } from "@mui/material/styles"
import MovieIcon from '@mui/icons-material/Movie';


const PREFIX = 'home';
const classes = {
  container: `${PREFIX}`,
  cardContainer: `${PREFIX}-card-container`,
  titleGridContainer: `${PREFIX}-title-grid-container`,
  title: `${PREFIX}-title`,
  textFieldSearch: `${PREFIX}-text-field-search`,
  buttonsContainer: `${PREFIX}-buttons-container`,
  searchButton: `${PREFIX}-search-button`,
  movieIcon: `${PREFIX}-movie-icon`
}

const centeredStyleObj = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',    
}

const Root = styled('Container')(({ theme }) => ({

    [`&.${classes.container}`]: {
        height: '100vh',
        flexDirection: 'column',
        ...centeredStyleObj
    },
       
    [`& .${classes.cardContainer}`]: {
        flexDirection: 'column',
        width: 400, 
        height: 200, 
        padding: '2rem',
        ...centeredStyleObj
    },

    [`& .${classes.titleGridContainer}`]: {
        ...centeredStyleObj
    },

    [`& .${classes.title}`]: {
        fontSize: '4rem'
    },

    [`& .${classes.textFieldSearch}`]: {
        width: '90%'
    },

    [`& .${classes.buttonsContainer}`]: {
        marginTop: '.5rem'
    },

    [`& .${classes.searchButton}`]: {
        marginLeft: '.5rem'
    },

    [`& .${classes.movieIcon}`]: {
        fontSize: '4rem'
    },

}))

const Home = () => {

    const [searchText, setSearchText] = useState('')

    const handleSearchTextChange = event => {
        setSearchText(event.target.value)
    };

    const handleCleanTextClick = event => {
       // TODO
    };

    const handleSearchTextClick = event => {
        // TODO
    };

    return(
    <Root className={classes.container}>
            <Card className={classes.cardContainer}>
                <Grid container className={classes.titleGridContainer}>
                    <Grid>
                        <Typography className={classes.title}>Bienvenidos</Typography>
                    </Grid>
                    <Grid>
                        <MovieIcon className={classes.movieIcon}></MovieIcon>
                    </Grid>
                </Grid>
                <TextField
                    value={searchText}
                    placeholder='Buscar...'
                    className = {classes.textFieldSearch}
                    onChange={handleSearchTextChange} />

                <Grid className={classes.buttonsContainer}>
                    <Button variant="outlined" onClick={handleCleanTextClick}>Limpiar</Button>
                    <Button variant="contained" color="primary" className={classes.searchButton} onClick={handleSearchTextClick}>Buscar</Button>
                </Grid>
            </Card>
    </Root> 
    )
}

export default Home;