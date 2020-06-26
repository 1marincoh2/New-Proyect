import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

const clima = () => {

  const useStyles = makeStyles((theme) => ({
   
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
   
  }));
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [tiempo, setTiempo] = useState({
    coord: { lon: 0, lat: 0 },
    weather: [],//{id: 0, main: "", description: "", icon: ""}
    base: "",
    main: { temp: 0, feels_like: 0, temp_min: 0, temp_max: 0, pressure: 0, humidity: 0 },
    visibility: 0,
    wind: { speed: 0, deg: 0 },
    clouds: { all: 0 },
    dt: 0,
    sys: { type: 0, id: 0, country: "", sunrise: 0, sunset: 0 },
    timezone: -0,
    id: 0,
    name: "",
    cod: 0
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getTiempo()

  }, [])
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [listsday, setListsday] = useState([])

  const nextday = (dia) => {
    axios.get("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?id=" + dia + "&cnt=5&appid=69d3cf86b46f19cf3e049339355533aa").then((response) => {
      console.log(response.data)
      setListsday(prevState => {
        let day = [...prevState]
        day = response.data.list
        return day;
      })
    })


  }

  const hora = (dt) => {
    const date = new Date(dt * 1000).toDateString()
    return date
  }

  const getTiempo = () => {


    axios.get('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=21.17429&lon=-86.84656&APPID=69d3cf86b46f19cf3e049339355533aa').then((response) => {
      console.log(response.data)
      nextday(response.data.id)
      setTiempo(prevState => {
        const humedad = { ...prevState }
        humedad.coord = response.data.coord
        humedad.weather = response.data.weather
        humedad.main = response.data.main
        humedad.dt = response.data.dt
        humedad.sys = response.data.sys
        humedad.name = response.data.name

        return humedad

      })


    })

  }


  return (

    <div>

      <React.Fragment>
              
 <List className={classes.root}>
 {tiempo.weather.map((agua) => (  
 <ListItem>
     <ListItemAvatar>
     <Avatar>
     <img src={"http://openweathermap.org/img/wn/" + agua.icon + "@2x.png"} alt="" />
     </Avatar>
   </ListItemAvatar>
   <ListItemText >  {tiempo.name},{tiempo.sys.country}<br/>{hora(tiempo.dt)}<br/>Min:{tiempo.main.temp_min}<br/> Max:{tiempo.main.temp_max}<br/>Humedad:{tiempo.main.humidity}</ListItemText>
 </ListItem>
))}

 {listsday.map((days) => (
  <div>
    <Divider variant="inset" component="li" />
<ListItem>
        <ListItemAvatar>
       <Avatar>
       {days.weather.map((agua) => (
         
     <img src={"http://openweathermap.org/img/wn/" + agua.icon + "@2x.png"} alt="" />
     ))}
     </Avatar>
   </ListItemAvatar>
   <ListItemText>  {hora(days.dt)}  Min:{days.main.temp_min}, Max:{days.main.temp_max},Humedad:{days.main.humidity}</ListItemText>
 </ListItem>
 </div>
 ))}

 </List>
 </React.Fragment>
 </div>




  )

}
export default clima