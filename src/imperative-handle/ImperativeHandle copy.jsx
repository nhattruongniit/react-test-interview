import React, { useState } from 'react'
import { DownOutlined } from '@ant-design/icons';
import SelectLanguages from './components/SelectLanguages';

function ImperativeHandle() {
  const [name, setName] = useState('');
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <h1>ImperativeHandle</h1>
      <div 
        className='cursor-pointer'
        onClick={() => setIsShow(!isShow)}
      >
        Languages: {name || 'N/A'} <DownOutlined />
      </div>

      <SelectLanguages name={name} setName={setName} isShow={isShow} setIsShow={setIsShow} />
    </div>
  )
}

export default ImperativeHandle