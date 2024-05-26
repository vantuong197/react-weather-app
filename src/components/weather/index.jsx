import "./index.css";
export default function Weather({data}) {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city-name">{data.city}</p>
          <p className="weather-desc">{data?.weather[0]?.description}</p>
        </div>
        <img src={`icons/${data?.weather[0]?.icon}.png`} alt="weather" className="weather-icon" />
      </div>

      <div className="bottom">
        <p className="tempereture">{Math.round(data?.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label label-top">詳細</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">体感温度:</span>
            <span className="parameter-value">{Math.round(data?.main.feels_like)}°C</span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">風:</span>
            <span className="parameter-value">{data?.wind.speed} m/s</span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">湿度:</span>
            <span className="parameter-value">{data?.main.humidity}%</span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">気圧:</span>
            <span className="parameter-value">{data?.main.pressure}hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
}
