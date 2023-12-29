import React from 'react'
import { Select } from 'antd';

const SelectLanguages = React.forwardRef(({ name, setName }, ref) => {
  const [isShow, setIsShow] = React.useState(false);

  React.useImperativeHandle(ref, () => ({
    openSelect: () => {
      setIsShow(true);
    }
  }), [])

  return (
    <div
      style={{
        display: isShow ? 'block' : 'none',
      }}
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
)})

export default SelectLanguages