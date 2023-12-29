import React from 'react'
import { Select } from 'antd';

function SelectLanguages({ name, setName }) {

  return (
    <div>
      <Select
        value={name}
        style={{ width: 120 }}
        onChange={(value) => {
          setName(value)
        }}
        options={[
          { value: 'javascript', label: 'Javascript' },
          { value: 'react', label: 'React' },
          { value: 'angular', label: 'Angular' },
          { value: 'vue', label: 'Vue' },
        ]}
      />
    </div>
    
  )
}

export default SelectLanguages