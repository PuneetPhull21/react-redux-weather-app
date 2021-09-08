import React, { useState } from 'react'
import {weathercheck} from '../../actions/actions';
import {connect} from 'react-redux';
import { Card } from 'react-bootstrap';
import Input from '../UI/Input';
import Button from '../UI/Button';
function Weather(props){
    const [city,setcity] = useState('');
    const [card,setcard]=useState([ ]);
    const onCityhandler = (event)=>{
      setcity(event.target.value);
    }
    const onSearch = async (event)=>{
        event.preventDefault();
        const res =[ await props.weathercheck(city)];
             setcard(res);
           console.log(card);
    }
    return (
        <div>
            <Input type={"text"} placeholder={"Enter The city"} label={"Chech Weather"}  controlId={"formBasicInput"}  onChange={onCityhandler}/>
        <Button type={"Primary"} onClick={onSearch}>Search</Button>
        <br></br>
        <br></br>
        <br></br>
        {card.length > 0 ?
        <Card style={{width:'50rem',height:"29rem"}}>
         <Card.Title style={{color:'blue',fontFamily:'cursive',textAlign:'center'}} >Weather Details</Card.Title>
         <Card.Body>

             <h4>Country: {card[0].sys.country} </h4>  <p>sunrise : {card[0].sys.sunrise} </p> <p>sunset : {card[0].sys.sunset} </p>
             <h5>City : {card[0].name} </h5>              
         <h6>Coordinates : lat : {card[0].coord.lat}   || lon : {card[0].coord.lon} </h6>  
         <p>ground Level : {card[0].main.grnd_level} </p>
         <p>Humidity : {card[0].main.humidity}</p>
         <p>Pressure : {card[0].main.pressure} </p>
         <p>Sea Level : {card[0].main.sea_level} </p>
         <p>Temperature : {card[0].main.temp} </p>
         <p>Time Zone : {card[0].timezone} </p>
          <p>Main : {card[0].weather[0].main}</p>
        </Card.Body>
        </Card>
:""}
        </div>
    )
}
export default connect(null,{weathercheck})(Weather);