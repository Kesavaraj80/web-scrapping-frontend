import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { Flipkart } from './Flipkart';
import { SnapDeal } from './SnapDeal';

const useStyles = makeStyles((theme) => ({
  AppBar: {
    height: '5rem',
    width: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  Toolbar: {
    alignItems: 'center',
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    height: '100%',
    fontSize: '40px',
    paddingLeft: 0,
    color: '#FFFFFF'
  },
  inputRoot: {
    color: 'white',
    width: '50rem',
    height: '3rem'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  title: {
    fontSize: '1.5rem',
    marginLeft: 10
  },
  subtitle:{
    fontSize:'2rem'
  }

}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar className={classes.Toolbar}>
          <div className={classes.search}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}

            />

          </div>
          <IconButton>
            <SearchIcon className={classes.searchIcon} />
          </IconButton>
          <Typography className={classes.title}>Web Scrapping E-Commerce</Typography>
        </Toolbar>
      </AppBar>
      <Typography className={classes.subtitle}>Flipkart Products:</Typography>
      <Flipkart />
      <Typography className={classes.subtitle}>SnapDeal Products:</Typography>
      <SnapDeal/>
    </div>
  );
}



