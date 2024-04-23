'use client';

import React, { useState } from 'react';
import getFormattedDate from '../../../../_utils/getFormattedDate';
import getNumericValue from '../../../../_utils/getNumericValue';

function StatisticsPeriodLookupForm() {
  const [value, setValue] = useState({
    startDate: '',
    endDate: '',
  });
  const { yearMonthDay, getSixMonthsAgoDate } = getFormattedDate();
  const sixMonthAgoDate = getSixMonthsAgoDate();
  const handleChange = getNumericValue(setValue);

  return (
    <form>
      <section className="flex gap-2">
        <input
          type="text"
          placeholder={sixMonthAgoDate}
          name="startDate"
          value={value.startDate}
          onChange={handleChange}
          maxLength={8}
          className="w-28 px-2 border-[1px] border-black rounded-md outline-none text-[14px]"
        />
        ~
        <input
          type="text"
          name="endDate"
          value={value.endDate}
          placeholder={yearMonthDay}
          onChange={handleChange}
          maxLength={8}
          className="w-28 px-2 border-[1px] border-black rounded-md outline-none text-[14px]"
        />
        <button type="submit" className="bg-blue-500 text-white text-sm px-2 rounded-md">
          적용
        </button>
      </section>
    </form>
  );
}

export default StatisticsPeriodLookupForm;
