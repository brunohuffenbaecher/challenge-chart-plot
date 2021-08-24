import React, { useState } from 'react';

import { Controlled as CodeMirror } from 'react-codemirror2';
import { codeParse } from '../Helpers/codeConverter';

import './input.module.css';

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/css/css');
require('codemirror/lib/codemirror.css');
require('codemirror/theme/dracula.css');
require('codemirror/theme/panda-syntax.css');
require('codemirror/theme/material.css');

//lines of code for input testing
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

export default function Input() {
  const [code, setCode] = useState(initialCode);
  

  const handleChange = (editor, data, value) => {
    // console.log('Editor: ', editor);
    // console.log('Data: ', data);
    // console.log('Value: ', value);
    setCode(value);

    codeParse(value); // function to convert the input code
    // console.log(value);
  };

  return (
    <div>
      <CodeMirror
        
        value={code}
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
