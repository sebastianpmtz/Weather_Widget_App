import s from './weatherMainInfo.module.css'

export default function WeatherMainInfo({weather}) {
  return (
    <div className={ s.mainInfo } >
      <div className={s.city}>{ weather?.location.name }</div>
      <div className={s.country}>{weather?.location.country}</div>
      <div className={s.row}>
        <div>
          <img
            src={`http:${weather?.current.condition.icon}`}
            width="128"
            alt={weather?.current.condition.text}
          />
        </div>
        <div className={s.weatherConditions}>
          <div className={s.condition}>{weather?.current.condition.text}</div>
          <div className={s.current}>{ weather?.current.temp_c }°</div>
        </div>
      </div>
      <iframe
        title="map"
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5820.194482382631!2d-99.1607326215962!3d18.93452725738297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdde499b22afad%3A0xc9b6bcb5b9b790a1!2sCuernavaca%2C%20Morelos!5e0!3m2!1sen!2smx!4v1668199160924!5m2!1sen!2smx`} 
        width="100%" 
        height="450" 
        style={{border:0}} 
        allowfullscreen="" 
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  )
};