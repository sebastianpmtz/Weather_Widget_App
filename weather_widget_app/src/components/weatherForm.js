import { useState } from 'react';
import s from './weatherForm.module.css'

export default function WeatherForm({onChangeCity}) {
  const [city, setCity] = useState('');
  
  function onChange(e) {
    const value = e.target.value;
    
    if(value !== ""){
      setCity(value);
    }
  };

  function handleSubmit(e){
    e.preventDefault();
    onChangeCity(city);
  }

  return (
    <form className={ s.container } onSubmit={handleSubmit} >
      <input className={ s.input } type="text" onChange = {onChange} />
    </form>
  )
};