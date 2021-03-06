import React from 'react';
import Chart from 'react-google-charts';

import Info from '../Info';
import '../Styles.css';

const SalaryResults = ({ avgSalary, countryAvgSalary, worldAvgSalary }) => {
  let country = 0;
  let countryName = '';
  let world = 0;
  let info = '';

  if (countryAvgSalary.value) {
    country = countryAvgSalary.value;
    countryName = countryAvgSalary.country.value;
  }
  if (worldAvgSalary) world = worldAvgSalary.value;
  const yearInfoWorld = `World, ${worldAvgSalary.date}`;
  const yearInfoCountry = countryAvgSalary.date;
  info = worldAvgSalary.info;

  return (
    <>
      <Chart
        height='400px'
        chartType='ColumnChart'
        loader={<div className='text-white'>Loading Chart</div>}
        data={[
          ['Average salary', 'Salary'],
          [yearInfoWorld, world],
          [
            !countryName
              ? 'No Country Data'
              : `${countryName}, ${yearInfoCountry}`,
            country
          ],
          ['Your salary', avgSalary]
        ]}
        options={{
          backgroundColor: { fill: 'transparent' },
          fontSize: '18',
          textStyle: { color: 'white' },
          title: 'Average salaries',
          titleTextStyle: {
            color: '#FFF',
            bold: false
          },
          colors: ['#1B7742', '#ADD8E6'],
          legend: { position: 'none' },
          tooltip: { isHtml: true, trigger: 'visible' },
          hAxis: {
            title: '',
            titleTextStyle: { color: 'white' },
            minValue: 0,
            gridlines: { count: 0, color: 'transparent' },
            textStyle: { color: 'white' },
            baselineColor: 'white'
          },
          vAxis: {
            title: 'Salaries',
            titleTextStyle: { color: 'white', italic: false },
            minValue: 20000,
            gridlines: { count: 0, color: 'transparent' },
            textStyle: { color: 'white' },
            viewWindow: { min: 0 },
            viewWindowMode: 'pretty',
            baselineColor: 'white'
          }
        }}
      />
      <Info dataInfo={info} />
    </>
  );
};

export default SalaryResults;
