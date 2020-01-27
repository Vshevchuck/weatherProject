import React from "react";

class Form extends React.Component
{
  render(){
    return(
      <div>
        <form onSubmit={this.props.weatherMethod}>
          <input type="text" name="city" placeholder="Введите город"/>
          <button>Получить погоду</button>
        </form>
      </div>);
  }
}
export default Form;
