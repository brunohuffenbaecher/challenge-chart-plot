import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';

import './input.module.css';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/panda-syntax.css';
import 'codemirror/theme/material.css';
import { Resizable } from 're-resizable';

export default function Input({ onInput, value }) {
  /** Send the input data back to App component */
  const handleChange = (editor, data, value) => {
    onInput(value);
  };

  // const SouthEastArrow = () => (
  //   <svg width="20px" height="20px" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  //     <path d="m70.129 67.086l1.75-36.367c-0.035156-2.6523-2.9414-3.6523-4.8164-1.7773l-8.4531 8.4531-17.578-17.574c-2.3438-2.3438-5.7188-1.5625-8.0586 0.78125l-13.078 13.078c-2.3438 2.3438-2.4141 5.0117-0.074219 7.3516l17.574 17.574-8.4531 8.4531c-1.875 1.875-0.83594 4.8203 1.8164 4.8555l36.258-1.8594c1.6836 0.019531 3.1328-1.2812 3.1133-2.9688z" />
  //   </svg>
  // );

  const CustomHandle = (props) => (
    <div
      style={{
        backgroundColor: '#282a36',
        // borderRadius: '2px',
        // border: '1px solid #ddd',
        height: '20px',
        width: '100%',
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        // content:
      }}
      className={'SomeCustomHandle'}
      {...props}
    ></div>
  );
  const BottomRightHandle = () => (
    <CustomHandle>{/* <SouthEastArrow /> */}</CustomHandle>
  );

  return (
    <Resizable
      handleComponent={{ bottom: <BottomRightHandle /> }}
      defaultSize={{ height: 250 }}
      enable={{
        top: false,
        right: false,
        bottom: true,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      }}
      minHeight={150}
    >
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
    </Resizable>
  );
}
