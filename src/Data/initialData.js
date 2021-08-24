export const initialCode = `{type: 'start', timestamp: 1519862400000,select: ['min_response_time', 'max_response_time'],group: ['os', 'browser']}
{type: 'span', timestamp: 1519862400000, begin: 1519862400000, end: 1519862460000}
{type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3}
{type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'chrome', min_response_time: 0.2, max_response_time: 1.2}
{type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'firefox', min_response_time: 0.3, max_response_time: 1.2}
{type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'firefox', min_response_time: 0.1, max_response_time: 1.0}
{type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'chrome', min_response_time: 0.2, max_response_time: 0.9}
{type: 'data', timestamp: 1519862460000, os: 'mac', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.0}
{type: 'data', timestamp: 1519862460000, os: 'mac', browser: 'firefox', min_response_time: 0.2, max_response_time: 1.1}
{type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'firefox', min_response_time: 0.3, max_response_time: 1.4}
{type: 'stop', timestamp: 1519862460000}`;

export const testData = [
  {
    name: 'Series 1',
    data: [
      { timestamp: -1, value: Math.random() },
      { timestamp: 1, value: Math.random() },
      { timestamp: 11, value: Math.random() },
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
