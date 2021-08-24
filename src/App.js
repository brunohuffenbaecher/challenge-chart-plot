import { useState } from 'react';
import Chart from './Components/Chart';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Input from './Components/Input';

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

function App() {
  const [data, setData] = useState(testData);

  const [begin, setBegin] = useState(0);
  const [end, setEnd] = useState(10);

  const handleBtnClick = () => {
    console.log("I'm a click");
  };

  return (
    <div>
      <Header />
      <Input />
      <Chart data={data} minLimit={begin} maxLimit={end} />
      <Footer generateChart={handleBtnClick} />
    </div>
  );
}

export default App;
