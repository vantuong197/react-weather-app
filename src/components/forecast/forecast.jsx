import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";
const WEEK_DAYS = [
  "月曜日",
  "火曜日",
  "水曜日",
  "木曜日",
  "金曜日",
  "土曜日",
  "日曜日",
];
export default function Forecast({ data }) {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  console.log(data);
  return (
    <>
      <label htmlFor="" className="title">
        天気予報
      </label>

      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="weather"
                    className="icon-small"
                  />

                  <label className="day">{forecastDays[index]}</label>
                  <label className="desc">{item.weather[0].description}</label>
                  <label className="min-max">
                    {Math.round(item.main.temp_min)}°C /{" "}
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label htmlFor="">気圧</label>
                  <label htmlFor="">{item.main.pressure}hPa</label>
                </div>

                <div className="daily-details-grid-item">
                  <label htmlFor="">湿度</label>
                  <label htmlFor="">{item.main.humidity}%</label>
                </div>

                <div className="daily-details-grid-item">
                  <label htmlFor="">風:</label>
                  <label htmlFor="">{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="">平均風速:</label>
                  <label htmlFor="">{item.wind.speed} m/s</label>
                </div>

                <div className="daily-details-grid-item">
                  <label htmlFor="">Sea level:</label>
                  <label htmlFor="">{item.main.sea_level} m</label>
                </div>

                <div className="daily-details-grid-item">
                  <label htmlFor="">体感温度:</label>
                  <label htmlFor="">{Math.round(item.main.feels_like)} °C</label>
                </div>
              </div>

            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
