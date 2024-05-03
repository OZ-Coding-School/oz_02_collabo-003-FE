import React from 'react';
import DropdownItem from './DropdownItem';

interface DropdownItemsProps {
  type: 'hour' | 'minute';
}

function DropdownItems({ type }: DropdownItemsProps) {
  const hourArray = Array(24)
    .fill('')
    .map((_, i) => i);

  const minuteArray = Array(60)
    .fill('')
    .map((_, i) => i);

  return (
    <React.Fragment>
      {type === 'hour' &&
        hourArray.map(hour => (
          <DropdownItem type="hour" time={hour} key={hour}>
            {hour}시
          </DropdownItem>
        ))}
      {type === 'minute' &&
        minuteArray.map(minute => (
          <DropdownItem type="minute" time={minute} key={minute}>
            {minute}분
          </DropdownItem>
        ))}
    </React.Fragment>
  );
}

export default DropdownItems;
