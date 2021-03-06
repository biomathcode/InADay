import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip'
import 'react-calendar-heatmap/dist/styles.css';

const today = new Date();

function shiftDate(date, numDays) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays);
    return newDate;
  }
  
  function getRange(count) {
    return Array.from({ length: count }, (_, i) => i);
  }
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


function CommitMap() {
    const randomValues = getRange(200).map(index => {
        return {
          date: shiftDate(today, -index),
          count: getRandomInt(1, 3),
        };
      });

    return(
        <div style={{width:'500px'}}>
           <CalendarHeatmap
        startDate={shiftDate(today, -10)}
        endDate={today}
        values={randomValues}
        classForValue={value => {
          if (!value) {
            return 'color-empty';
          }
          return `color-github-${value.count}`;
        }}
        tooltipDataAttrs={value => {
          return {
            'data-tip': `${value.date.toISOString().slice(0, 10)} has count: ${
              value.count
            }`,
          };
        }}
        showWeekdayLabels={true}
        onClick={value => alert(`Clicked on value with count: ${value.count}`)}
      />
      <ReactTooltip />
        </div>
    )
}

export default CommitMap;