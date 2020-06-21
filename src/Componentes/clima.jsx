import React,{useState} from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const clima = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
          },
        },
      }));
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const classes = useStyles();

// eslint-disable-next-line react-hooks/rules-of-hooks
const [tiempo, setTiempo]= useState({})

const getTiempo = () =>  {


      axios.get (`https://api.openweathermap.org/data/2.5/weather?lat=20.630815999999985&lon=-87.068217&appid=a3e7bdc246b811691b06aab13ccb0dbb&units=metric`).then((response)=>{
                 console.log(response.data)
                 setTiempo(response.dat)
      

      })

}


return (

    <div  className={classes.root}>

<Button  color="secondary" onClick={() => {
				getTiempo()}}>
clima
      </Button>
    </div>



)




}
export default clima