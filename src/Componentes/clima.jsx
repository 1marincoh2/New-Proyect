import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

const clima = () => {

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    root1: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  }));
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
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
  useEffect(()=>{
getTiempo()

  },[])
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const[listsday, setListsday]=useState([])

  const nextday=(dia)=>{
     axios.get("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?id="+dia+"&cnt=5&appid=69d3cf86b46f19cf3e049339355533aa").then((response)=>{
          console.log(response.data)            
          setListsday(prevState=>{
            let day=[... prevState]
            day=response.data.list
            return day;
          }) 
     })


  }



  const getTiempo = () => {


    axios.get('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=20.66&lon=-87.07&APPID=69d3cf86b46f19cf3e049339355533aa').then((response) => {
      console.log(response.data)
      nextday(response.data.id)
      setTiempo(prevState => {
        const humedad = { ...prevState }
        humedad.coord = response.data.coord
        humedad.weather = response.data.weather
        humedad.base = response.data.base
        humedad.main=response.data.main
        humedad.visibility=response.data.visibility
        humedad.wind=response.data.wind
        humedad.clouds=response.data.clouds
        humedad.dt=response.data.dt
        humedad.sys=response.data.sys
        humedad.timezone=response.data.timezone
        humedad.id=response.data.name
        humedad.cod=response.data.cod
        return humedad

      })


    })

  }


  return (

    <div>

      <React.Fragment>
        <Card className={classes.root1}>

          {JSON.stringify(tiempo.coord)}
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>

            Longitud:{tiempo.coord.lon} {bull} Latitud:{tiempo.coord.lat}
            </Typography>

            {tiempo.weather.map((agua) => (
              <Typography variant="h5" component="h2" key={agua.id}>
                {agua.id}{bull}{agua.main}{bull}{agua.description}{bull}
                <img src={"http://openweathermap.org/img/wn/"+agua.icon+"@2x.png"} alt=""/>
              </Typography>
            ))

            }
            <Typography className={classes.pos} color="textSecondary">
              {tiempo.base}
              <br />
              {tiempo.main.temp}{bull}{tiempo.main.feels_like}{bull}{tiempo.main.temp_min }{bull}{tiempo.main.temp_max}{bull}{tiempo.main.pressure}
              {bull}{tiempo.main.humidity}
              </Typography> 
            <Typography variant="body2" component="p">
            {tiempo.visibility} {tiempo.wind.speed} {tiempo.wind.deg}{tiempo.clouds.all}{tiempo.dt}{tiempo.sys.type}{tiempo.sys.id}{tiempo.sys.country}{tiempo.sunrise}{tiempo.sunset}
                  <br />
                 Hora loca:{tiempo.timezone}{tiempo.id}{tiempo.name}{tiempo.code}
             
            </Typography> 
            {listsday.map((days) => (
            <Typography variant="body2" component="p">
             {days.weather.map((agua) => (
              <Typography variant="h5" component="h2" key={agua.id}>
                {agua.id}{bull}{agua.main}{bull}{agua.description}{bull}
                <img src={"http://openweathermap.org/img/wn/"+agua.icon+"@2x.png"} alt=""/>
              </Typography>
            ))}
            </Typography> 
            )) }
          </CardContent>


          <CardActions>
            <Button className={classes.root} color="secondary" onClick={() => {
              getTiempo()
            }}>
              clima
      </Button>
          </CardActions>
        </Card>

      </React.Fragment>
    </div>



  )




}
export default clima