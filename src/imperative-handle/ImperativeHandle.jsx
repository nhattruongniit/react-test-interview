import React, { useState } from 'react'
import { DownOutlined } from '@ant-design/icons';
import SelectLanguages from './components/SelectLanguages';

function ImperativeHandle() {
  const [name, setName] = useState('');

  return (
    <div>
      <h1>ImperativeHandle</h1>
      <div 
        className='cursor-pointer'
      >
        Languages: {name || 'N/A'} <DownOutlined />
      </div>

      <SelectLanguages name={name} setName={setName} />
    </div>
  )
}

export default ImperativeHandle