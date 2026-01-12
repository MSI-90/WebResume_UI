import './Social.css';
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

export default function Social({socialList, value, onChange, nickValue, onNickChange}) {
  const options = socialList.map((item) => ({
    value: item.number,
    label: item.displayName,
    icon: item.iconUrl,
  }))

  // Если соцсети не загружены — показываем заглушку
  if (socialList.length === 0) {
    return (
      <div id="soc">
        <label htmlFor="select">Социальная сеть</label><br />
        <div style={{ padding: '8px', color: '#666' }}>Загрузка...</div>
      </div>
    );
  }

  const selectedOption = options.find((option) => option.value === value) || null;

  const handleChange = (selected) => {
    const syntheticEvent = {
      target: {
        name: 'social',
        value: selected ? selected.value : null
      }
    };
    onChange(syntheticEvent);
  };

  return (
    <>
      <div id='soc'>
        <label htmlFor='select'>Социальная сеть</label><br />
        <Select
          id='select'
          key={socialList.length}
          value={selectedOption}
          onChange={handleChange}
          options={options}
          components={{
            Option: CustomOption,
            SingleValue: CustomSingleValue }}
        />
      </div>
      <div>
        <label>Профиль в соц.сети</label><br />
        <input type='text' id='soc-link' placeholder='@'
               value={nickValue}
               onChange={onNickChange}
               required>
        </input>
      </div>
    </>
  )
}