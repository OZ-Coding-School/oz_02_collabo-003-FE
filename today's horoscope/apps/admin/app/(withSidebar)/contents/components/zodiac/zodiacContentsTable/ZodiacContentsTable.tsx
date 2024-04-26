import React from 'react';
import TableCell from '../../../../../_components/table/TableCell';
import ZodiacContentsTableHeader from './ZodiacContentsTableHeader';
import ZodiacContentsTableRow from './ZodiacContentsTableRow';
import zodiacData from './fakeData';

function ZodiacContentsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full leading-normal">
        <ZodiacContentsTableHeader />
        <tbody>
          {zodiacData.map((zodiac, i) => (
            <React.Fragment key={i}>
              <ZodiacContentsTableRow zodiac={zodiac} index={0} />
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ZodiacContentsTable;
