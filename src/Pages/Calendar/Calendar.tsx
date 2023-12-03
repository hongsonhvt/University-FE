import { Session, UMApplicationSessionQueriesGetAllGetAllDto } from '@api';
import { RootState } from '@redux';
import {
  Agenda,
  Day,
  EventSettingsModel,
  FieldModel,
  Inject,
  Month,
  ScheduleComponent,
  Week,
  WorkWeek,
} from '@syncfusion/ej2-react-schedule';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import './Calendar.css';

const fieldsData: FieldModel = {
  subject: { name: 'courseClassName', title: 'Class' },
  startTime: { name: 'startAt' },
  endTime: { name: 'endAt' },
};

const Calendar = () => {
  const scheduleObj = useRef<ScheduleComponent | null>(null);
  const user = useSelector((store: RootState) => store.auth.user);
  const [sessions, setSessions] = useState<
    UMApplicationSessionQueriesGetAllGetAllDto[]
  >([]);
  const [eventSettings, setEventSettings] = useState<EventSettingsModel>({});
  const timeScale = { enable: true, interval: 60, slotCount: 1 };

  const getSessions = async () => {
    const res = await new Session().getSession({});
    if (res.data.data) {
      setSessions(
        res.data.data.map((x) => ({
          ...x,
          courseClassName: x.courseClass?.name,
        }))
      );
    }
  };

  useEffect(() => {
    if (user) getSessions();
  }, [user]);

  useEffect(() => {
    setEventSettings({
      dataSource: sessions,
      fields: fieldsData,
      allowAdding: false,
      allowEditing: false,
      allowDeleting: false,
    });
  }, [sessions]);

  return (
    <ScheduleComponent
      ref={scheduleObj}
      eventSettings={eventSettings}
      timeScale={timeScale}
      height='100%'
    >
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  );
};

export { Calendar };
