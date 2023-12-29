import React, { useRef, useState } from 'react'
import { DownOutlined } from '@ant-design/icons';
import SelectLanguages from './components/SelectLanguages';

function ImperativeHandle() {
  const [name, setName] = useState('');
  const selectRef = useRef(null);

  console.log('ImperativeHandle render')
  return (
    <div>
      <h1>ImperativeHandle</h1>
      <div 
        className='cursor-pointer'
        onClick={() => {
          selectRef.current.openSelect()
        }}
      >
        Languages: {name || 'N/A'} <DownOutlined />
      </div>

      <SelectLanguages name={name} setName={setName} ref={selectRef} />
    </div>
  )
}

export default ImperativeHandle