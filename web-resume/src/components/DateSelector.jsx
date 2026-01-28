
export default function DateSelector(props) {
  const {
    disabled,
    title,
    monthValue,
    yearValue,
    typeMonth,
    typeYear,
    dispatchExperienceItem,
    dateList,
    idPrefix
  } = props;

  return (
    <>
      <div className="item-1">
        <label htmlFor={`${idPrefix}-month`}>{title}</label><br/>
        <select
          id={`${idPrefix}-month`}
          required
          name={`${idPrefix}-month`}
          value={monthValue}
          disabled={disabled}
          onChange={(event)=>{
            const selected = dateList?.months?.find(m => m.id === Number(event.target.value));
            dispatchExperienceItem({
              type: `${typeMonth}`,
              payload: {number: selected.id, name: selected.name},
            })}
          }
        >
          {Array.isArray(dateList?.months) && dateList?.months.length > 0 &&
            dateList?.months?.map((item) => (
              <option key={item.id} value={item.id} name={item.name}>{item.name}</option>
            ))
          }
        </select>
        <select
          id={`${idPrefix}-year`}
          required
          name={`${idPrefix}-year`}
          value={yearValue}
          disabled={disabled}
          onChange={(event)=>
            dispatchExperienceItem({
              type: `${typeYear}`,
              payload: event.target.value
            })
          }
        >
          {Array.isArray(dateList?.years) && dateList?.years.length > 0 &&
            dateList?.years?.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))
          }
        </select>
      </div>
    </>
  )
}