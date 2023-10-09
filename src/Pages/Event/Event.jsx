import React from 'react'
import "./Event.css"
import { AiOutlineSearch } from "react-icons/ai"
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

const Event = () => {
  const data = [
    {
      Id: 1,
      Subject: 'Meeting',
      StartTime: new Date(2023, 1, 15, 10, 0),
      EndTime: new Date(2023, 1, 15, 12, 30),
    },
  ];
  return (
    <div>
      <div className="search-bar-1">                    
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search..." />
          <i>
          <AiOutlineSearch/>
          </i>
        </div>
      </div>
      <ScheduleComponent
      selectedDate={new Date(2023, 1, 15)}
      eventSettings={{
        dataSource: data,
      }}
    >
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
    </div>
  )
}

export default Event
