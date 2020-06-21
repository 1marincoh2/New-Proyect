import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import Avatar from '@material-ui/core/Avatar';

const Links =()=>{
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));
  const classes = useStyles();
  const StyledBreadcrumb = withStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.grey[100],
      height: theme.spacing(3),
      color: theme.palette.grey[800],
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover, &:focus': {
        backgroundColor: theme.palette.grey[300],
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(theme.palette.grey[300], 0.12),
      },
    },
  }))(Chip);

return(   
<div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
         <Breadcrumbs aria-label="breadcrumb">
         <Avatar alt="Remy Sharp" src="/home/alberto/Documents/Newproyect/public/logo192.png" className={classes.large} />
      <StyledBreadcrumb component="a" href="/"label="Home" icon={<HomeOutlinedIcon fontSize="small" />}/>
      <StyledBreadcrumb component="a" href="/Abaut" label="Abaut" />
      <StyledBreadcrumb  component="a" href="/NewPage" label="NewPage"/>  
         </Breadcrumbs>
         </IconButton>
              <Typography variant="h6" color="inherit">
         New Proyecto
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
 

)
};
export default Links