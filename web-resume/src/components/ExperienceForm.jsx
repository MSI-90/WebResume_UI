import classNames from "classnames";
import DateSelector from "./DateSelector";

export default function ExperienceForm(props){
  const {
    asAccordion,
    workNow,
    newExperienceItemState,
    dispatchExperienceItem,
    dateList,
    changeWorkNow,
    saveExperience,
    clearForm,
    addExperience
  } = props

  const DateSelectorProps = {
    workNow,
    newExperienceItemState,
    dispatchExperienceItem,
    dateList,
  }

  return (
    <>
      <div className="item-experience-body">
        <div className={classNames({'accord': asAccordion})}>
          <div>
            <label htmlFor="company">Компания</label><br/>
            <input
              type="text"
              name="company"
              id="company"
              spellCheck="false"
              value={newExperienceItemState.company}
              onChange={(event)=>
                dispatchExperienceItem({
                  type: 'company',
                  payload: event.target.value
                })
              }
            />
          </div>
          <br/>
          <div>
            <label htmlFor="job-title">Занимаемая должность</label><br/>
            <input
              type="text"
              id="job-title"
              name="jobTitle"
              spellCheck="false"
              value={newExperienceItemState.jobTitle}
              onChange={(event)=>
                dispatchExperienceItem({
                  type: 'jobTitle',
                  payload: event.target.value
                })
              }
            />
          </div>
          <div className="period">
            <DateSelector
              title={'Начало работы'}
              {...DateSelectorProps}
              monthValue={newExperienceItemState.periodStartMonth}
              yearValue={newExperienceItemState.periodStartYear}
              idPrefix={'period-start'}
              typeMonth={'period-start-month'}
              typeYear={'period-start-year'}
            />
            <DateSelector
              title={'Окончание работы'}
              {...DateSelectorProps}
              monthValue={newExperienceItemState.periodEndMonth}
              yearValue={newExperienceItemState.periodEndYear}
              idPrefix={'period-end'}
              typeMonth={'period-end-month'}
              typeYear={'period-end-year'}
              disabled={workNow}
            />
          </div>
          <div id="job-now-container">
            <div className="toggle-switch">
              <input
                type="checkbox"
                id="job-now"
                className="toggle-input"
                checked={workNow}
                onChange={(event)=>{
                  changeWorkNow(event);
                }}
              />
              <label htmlFor="job-now" className="toggle-label"></label>
              <span>Работаю сейчас</span>
            </div>
          </div>
          <div id="job-responsibilities-container">
            <label htmlFor="job-responsibilities">Должностные обязанности на занимаемой должности</label>
            <textarea
              spellCheck="false"
              id="job-responsibilities"
              name="jobResponsibilities"
              value={newExperienceItemState.jobResponsibilities}
              onChange={(event)=>
                dispatchExperienceItem({
                  type: 'jobResponsibilities',
                  payload: event.target.value
                })}
            ></textarea>
          </div>
          <div id="job-achievements-container">
            <label htmlFor="job-achievements">Достижения</label>
            <textarea
              spellCheck="false"
              id="job-achievements"
              name="jobAchievements"
              value={newExperienceItemState.jobAchievements}
              onChange={(event) =>
                dispatchExperienceItem({
                  type: 'jobAchievements',
                  payload: event.target.value
                })}
            >
              </textarea>
          </div>
          <div className="button-group">
            <button
              type="button"
              className="save-button"
              onClick={saveExperience}
            >
              Сохранить
            </button>
            <button
              type={"button"}
              className="remove-button"
              onClick={clearForm}
            >
              Очистить
            </button>
          </div>

        </div>
        <div className="add-experience">
          <button
            type={"button"}
            className="add-button"
            onClick={addExperience}
          >
            Добавить
          </button>
        </div>
      </div>
    </>
  )
}