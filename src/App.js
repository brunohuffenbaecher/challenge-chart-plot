import { useEffect, useState } from 'react';
import Chart from './Components/Chart';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Input from './Components/Input';
import { initialCode, testData } from './Data/initialData';
import { insertAndSort } from './Helpers/arrayManipulation';
import { codeParse } from './Helpers/codeConverter';
import { addColor } from './Helpers/colorHandler';
import {
  capitalizeFirstLetter,
  handleSelectString,
} from './Helpers/strManipulation';

function App() {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState(initialCode);
  const [parsedInput, setParsedInput] = useState(null);

  const [beginInterval, setBeginInterval] = useState(0);
  const [endInterval, setEndInterval] = useState(0);

  useEffect(() => {
    if (parsedInput !== null) {
      updateData();
    }
  }, [parsedInput]);

  const handleInputUpdate = (data) => {
    setInputData(data);
  };
  const handleBtnClick = () => {
    setParsedInput(codeParse(inputData));
  };

  const updateData = () => {
    let isStarted = false;
    let startTime = 0;
    let chartData = [];
    let group = [];
    let select = [];
    let begin = 0;
    let end = 0;
    let groupName = [];

    for (let i = 0; i < parsedInput.length; i++) {
      if (parsedInput[i].type === 'start') {
        isStarted = true;
        chartData = [];
        startTime = parsedInput[i].timestamp;
        group = parsedInput[i].group;
        select = parsedInput[i].select;
      } else if (parsedInput[i].type === 'span') {
        begin = parsedInput[i].begin;
        end = parsedInput[i].end;
      } else if (parsedInput[i].type === 'data' && isStarted === true) {
        groupName = [];
        for (let j = 0; j < group.length; j++) {
          groupName.push(capitalizeFirstLetter(parsedInput[i][group[j]]));
        }
        groupName = groupName.join(' ');

        for (let j = 0; j < select.length; j++) {
          let serieName = groupName + ' ' + handleSelectString([select[j]]);

          if (parsedInput[i][select[j]] !== undefined) {
            //Checks if a given property based on the select array exists
            let index = chartData.findIndex(
              //Checks if there's already an object data for the serieName
              (element) => element.name === serieName
            );

            if (index !== -1) {
              //if positive, pushes the new data for the serie

              chartData[index].data = insertAndSort(chartData[index].data, {
                timestamp: parsedInput[i].timestamp,
                value: parsedInput[i][select[j]],
              });
            } else {
              //if not, pushes a new obj data to the chart data array
              chartData.push({
                name: serieName,
                data: [
                  {
                    timestamp: parsedInput[i].timestamp,
                    value: parsedInput[i][select[j]],
                  },
                ],
              });
            }
          }
        }
      } else if (parsedInput[i].type === 'stop' && isStarted === true) {
        isStarted = false;
        // console.log(chartData);
        // console.log("i'm stop!");
      } else console.log('failed all');
    }

    updateChart(chartData, begin, end);
  };

  const updateChart = (chartData, begin, end) => {
    setData(addColor(chartData));
    setBeginInterval(begin);
    setEndInterval(end);
  };

  return (
    <div>
      <Header />
      <Input onInput={handleInputUpdate} value={inputData} />
      <Chart data={data} minLimit={beginInterval} maxLimit={endInterval} />
      <Footer generateChart={handleBtnClick} />
    </div>
  );
}

export default App;
