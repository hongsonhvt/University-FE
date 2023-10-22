import React from 'react'
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { useSelector } from 'react-redux';

const EventTeacher = () => {
const token = useSelector(store => store.token.token)
console.log('token',token);
console.log('alo');
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

export default EventTeacher
