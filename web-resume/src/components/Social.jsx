import './Social.css';
import { useState } from 'react';
import Select from 'react-select';

// отображение списка элементов в react-select
const CustomOption = ({ innerProps, label, data }) => (
  <div {...innerProps} style={{ display: 'flex', alignItems: 'center', padding: '8px' }}>
    {data.icon && (
      <img src={data.icon} alt="" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
    )}
    <span>{label}</span>
  </div>
);

// отображение выбранного в списке элемента
const CustomSingleValue = ({ children, data }) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {data.icon && (
      <img src={data.icon} alt="" style={{width: '20px', height: '20px', marginRight: '8px', verticalAlign: 'middle'}}/>
    )}
    <span>{children}</span>
  </div>
);

export default function Social({socialList}) {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = socialList.map((item) => ({
    value: item.displayName,
    label: item.displayName,
    icon: item.iconUrl
  }))
  return (
    <>
      <div id='soc'>
        <label htmlFor='select'>Социальная сеть</label><br />
        <Select id='select'
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          components={{
            Option: CustomOption,
            SingleValue: CustomSingleValue }}
        />
      </div>
      <div>
        <label>Профиль в соц.сети</label><br />
        <input type='text' id='soc-link' placeholder='@'></input>
      </div>
    </>
  )
}