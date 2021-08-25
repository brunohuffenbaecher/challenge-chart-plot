import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';

import './input.module.css';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/panda-syntax.css';
import 'codemirror/theme/material.css';

//lines of code for input testing
// const initialCode = `{type: 'start', timestamp: 1519862400000,select: ['min_response_time', 'max_response_time'],group: ['os', 'browser']}
// {type: 'span', timestamp: 1519862400000, begin: 1519862460000, end: 1519862460000}
// {type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3}
// {type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3}
// {type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3}
// {type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3}
// {type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3}
// {type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3}
// {type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3}
// {type: 'stop', timestamp: 1519862460000}`;

// const initialCode = `{"type": 'start', "timestamp": 1519862400000,"select": ['min_response_time', 'max_response_time'],"group": ['os', 'browser']}
// {"type": 'span', "timestamp": 1519862400000, "begin": 1519862460000, "end": 1519862460000}
// {"type": 'data', "timestamp": 1519862400000, "os": 'linux', "browser": 'chrome', "min_response_time": 0.1, "max_response_time": 1.3}
// {"type": 'data', "timestamp": 1519862400000, "os": 'linux', "browser": 'chrome', "min_response_time": 0.1, "max_response_time": 1.3}
// {"type": 'data', "timestamp": 1519862400000, "os": 'linux', "browser": 'chrome', "min_response_time": 0.1, "max_response_time": 1.3}
// {"type": 'data', "timestamp": 1519862460000, "os": 'linux', "browser": 'chrome', "min_response_time": 0.1, "max_response_time": 1.3}
// {"type": 'data', "timestamp": 1519862460000, "os": 'linux', "browser": 'chrome', "min_response_time": 0.1, "max_response_time": 1.3}
// {"type": 'data', "timestamp": 1519862460000, "os": 'linux', "browser": 'chrome', "min_response_time": 0.1, "max_response_time": 1.3}
// {"type": 'data', "timestamp": 1519862460000, "os": 'linux', "browser": 'chrome', "min_response_time": 0.1, "max_response_time": 1.3}
// {"type": 'stop', "timestamp": 1519862460000}`;

// prettier-ignore

// const jsonTest = [{type: 'start',timestamp: 1519862400000,select: ['min_response_time', 'max_response_time'],group: ['os', 'browser']},
// {type: 'span', timestamp: 1519862400000, begin: 1519862460000, end: 1519862460000},
// {type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3},
// {type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3},
// {type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3},
// {type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3},
// {type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3},
// {type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3},
// {type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3},
// {type: 'stop', timestamp: 1519862460000}];

// let test = JSON.stringify(jsonTest[0]);
// test = test.slice(1, test.length - 1);
// let test = '';

// for (let i = 0; i < jsonTest.length; i++) {
//   // console.log(JSON.stringify(jsonTest[i]));
//   // test.push(JSON.stringify(jsonTest[i]));
//   test = test + JSON.stringify(jsonTest[i]) + '\n';
// }
// console.log(test);

// let modifiedCode =
//   '[' +
//   initialCode.split('\n').join(',').replaceAll(' ', '').replaceAll("'", '"') +
//   ']';
// console.log(modifiedCode);
// console.log(JSON.stringify(jsonTest));
// console.log(JSON.parse(modifiedCode));
// console.log(test);
// strToJSON(initialCode);
// console.log(jsonTest);

export default function Input({onInput, value}) {
  
  /** Send the input data back to App component */
  const handleChange = (editor, data, value) => {
    // console.log('Editor: ', editor);
    // console.log('Data: ', data);
    // console.log('Value: ', value);
    onInput(value)
   
  };

  return (
    <div >
      <CodeMirror
        value={value}
        options={{
          lineNumbers: true,
          foldGutter: false,
          styleActiveLine: false,
          autofocus: true,
          theme: 'dracula',
          mode: 'application/json',
          }}
        onBeforeChange={handleChange}
      />
    </div>
  );
}
