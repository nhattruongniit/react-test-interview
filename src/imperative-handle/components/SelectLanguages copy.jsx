import React from 'react'
import { Select } from 'antd';

function SelectLanguages({ name, isShow, setIsShow, setName }) {

  return (
    <div
      style={{ display: isShow ? 'block' : 'none' }}
    >
      <Select
        open={isShow}
        value={name}
        style={{ width: 120 }}
        onChange={(value) => {
          setName(value)
          setIsShow(false)
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