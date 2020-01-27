import React from "react";

class Weather extends React.Component
{
  render(){
    return(
      <div>
      {this.props.city &&
        <div className="info2">
        <p>Местоположение:{this.props.city},{this.props.country}</p>
        <p>{this.props.date} : {this.props.temp}°</p>
        <p>{this.props.date2} : {this.props.temp2}°</p>
        <p>{this.props.date3} : {this.props.temp3}°</p>
        <p>{this.props.date4} : {this.props.temp4}°</p>
        <p>{this.props.date5} : {this.props.temp5}°</p>


        </div>
      }
      {this.props.error}
      </div>);
  }
}
export default Weather;
