import { useEffect, useState } from 'react';
import Chart from './Components/Chart';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Input from './Components/Input';
import { initialCode } from './Data/initialData';
// import { insertAndSort } from './Helpers/arrayManipulation';
import { codeParse, processCode } from './Helpers/codeConverter';
// import { addColor } from './Helpers/colorHandler';
// import {
//   capitalizeFirstLetter,
//   handleSelectString,
// } from './Helpers/strManipulation';

function App() {
  const [inputData, setInputData] = useState(initialCode);
  const [parsedInput, setParsedInput] = useState(null);
  const [data, setData] = useState([]);
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
    const [chartData, begin, end] = processCode(parsedInput);
    updateChart(chartData, begin, end);
  };

  const updateChart = (chartData, begin, end) => {
    setData(chartData);
    setBeginInterval(begin);
    setEndInterval(end);
  };

  return (
    <>
      <Header />
      <Input onInput={handleInputUpdate} value={inputData} />
      <Chart data={data} minLimit={beginInterval} maxLimit={endInterval} />
      <Footer generateChart={handleBtnClick} />
    </>
  );
}

export default App;
