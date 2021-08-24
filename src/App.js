import { useState } from 'react';
import Chart from './Components/Chart';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Input from './Components/Input';
import { codeParse } from './Helpers/codeConverter';

const testData = [
  {
    name: 'Series 1',
    data: [
      { timestamp: 0, value: Math.random() },
      { timestamp: 1, value: Math.random() },
      { timestamp: 2, value: Math.random() },
    ],
    color: '#115522',
  },
  {
    name: 'Series 2',
    data: [
      { timestamp: 2, value: Math.random() },
      { timestamp: 3, value: Math.random() },
      { timestamp: 4, value: Math.random() },
    ],
    color: '#8884d8',
  },
  {
    name: 'Series 3',
    data: [
      { timestamp: 5, value: Math.random() },
      { timestamp: 6, value: Math.random() },
      { timestamp: 9, value: Math.random() },
    ],
    color: '#EE3211',
  },
];

const initialCode = `{type: 'start', timestamp: 1519862400000,select: ['min_response_time', 'max_response_time'],group: ['os', 'browser']}
{type: 'span', timestamp: 1519862400000, begin: 1519862460000, end: 1519862460000}
{type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3}
{type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3}
{type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3}
{type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3}
{type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3}
{type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3}
{type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3}
{type: 'stop', timestamp: 1519862460000}`;

function App() {
  const [data, setData] = useState(testData);
  const [inputData, setInputData] = useState(initialCode);

  const [begin, setBegin] = useState(0);
  const [end, setEnd] = useState(10);

  const handleBtnClick = () => {
    codeParse(inputData);
  };

  const handleInputUpdate = (data) => {
    setInputData(data);
  };

  return (
    <div>
      <Header />
      <Input onInput={handleInputUpdate} value={inputData} />
      <Chart data={data} minLimit={begin} maxLimit={end} />
      <Footer generateChart={handleBtnClick} />
    </div>
  );
}

export default App;
