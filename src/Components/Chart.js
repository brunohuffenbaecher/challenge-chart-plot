import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// const data = [
//   {
//     name: 2,
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 3,
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 4,
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 5,
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 6,
//     uv: 1890,
//     // pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 7,
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 11,
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// const series = [
//   {
//     name: 'Series 1',
//     data: [
//       { timestamp: 0, value: Math.random() },
//       { timestamp: 1, value: Math.random() },
//       { timestamp: 2, value: Math.random() },
//     ],
//     color: '#115522',
//   },
//   {
//     name: 'Series 2',
//     data: [
//       { timestamp: 2, value: Math.random() },
//       { timestamp: 3, value: Math.random() },
//       { timestamp: 4, value: Math.random() },
//     ],
//     color: '#8884d8',
//   },
//   {
//     name: 'Series 3',
//     data: [
//       { timestamp: 5, value: Math.random() },
//       { timestamp: 9, value: Math.random() },
//       { timestamp: 6, value: Math.random() },
//     ],
//     color: '#EE3211',
//   },
// ];

const timestampFormmater = (item) => {
  return item;
};

const formatter2 = (value, name, props) => {
  // return ['formatted value', 'formatted name'];
  return [value, name];
};
export default function Chart({ data, minLimit, maxLimit }) {
  // const [maxLimit, setMaxLimit] = useState(10);

  return (
    <div style={{ width: '100%' }}>
      {/* <LineChart
        width={1000}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          domain={[0, maxLimit]}
          interval={0}
          type="number"
          allowDataOverflow="false"
          tickFormatter={formatterTest}
        />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="linear" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart> */}

      <ResponsiveContainer width="90%" minHeight={300}>
        {/* <ResponsiveContainer> */}
        <LineChart
          width={900}
          height={300}
          margin={{ top: 5, right: 50, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="timestamp"
            type="number"
            allowDuplicatedCategory={false}
            interval={0}
            domain={[minLimit, maxLimit]}
            tickFormatter={timestampFormmater}
          />
          <YAxis dataKey="value" />
          <Tooltip formatter={formatter2} labelFormatter={timestampFormmater} />

          {data.map((serie) => (
            <Line
              dataKey="value"
              data={serie.data}
              name={serie.name}
              key={serie.name}
              stroke={serie.color}
              // type="monotone"
            />
          ))}
          <Legend
            layout="vertical"
            verticalAlign="middle"
            align="right"
            // margin=
            wrapperStyle={{ right: -75 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
