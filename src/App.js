import React from "react";
import Info from "./components/info"
import Form from "./components/form"
import Weather from "./components/weather"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
const API_KEY ="903f0d0c02f85fa0b5a1b861d8814c65";
class App extends React.Component
{
  state = {
    temp:undefined,
    city:undefined,
    country:undefined,
    error:undefined
  }
  gettingWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;

    if(city)
    {
      const api_url = await
      fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
        //fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();
      console.log(data);
      this.setState({
        temp:data.list[0].main.temp,
        temp2:data.list[8].main.temp,
        temp3:data.list[16].main.temp,
        temp4:data.list[24].main.temp,
        temp5:data.list[32].main.temp,
        city:data.city.name,
        country:data.city.country,
        date:data.list[0].dt_txt,
        date2:data.list[8].dt_txt,
        date3:data.list[16].dt_txt,
        date4:data.list[24].dt_txt,
        date5:data.list[32].dt_txt,
        icon: data.list[0].weather[0].icon,

        error:""

      });
    }else {
      this.setState({
        temp:undefined,
        city:undefined,
        country:undefined,
        sunset:undefined,
        date:undefined,
        error:"Введите город"
      });
    }

  }

  render(){
    return(
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5"><Info/></div>
              <div className="col-xs-7"><Form weatherMethod={this.gettingWeather}/>
              <Weather
              temp={this.state.temp}
              temp2={this.state.temp2}
              temp3={this.state.temp3}
              temp4={this.state.temp4}
              temp5={this.state.temp5}
              city={this.state.city}
              icon={this.state.icon}
              country={this.state.country}
              date={this.state.date}
              date2={this.state.date2}
              date3={this.state.date3}
              date4={this.state.date4}
              date5={this.state.date5}
              error={this.state.error}/></div>
            </div>
          </div>
        </div>




      </div>
    );
  }
}

export default App;
