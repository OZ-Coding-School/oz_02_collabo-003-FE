import PushMsContentsTableHeader from './PushMsContentsTableHeader';
import PushMsContentsTableRow from './PushMsContentsTableRow';
import todayContents from './fakeData';

function PushMsContentsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full leading-normal">
        <PushMsContentsTableHeader />
        <tbody>
          {todayContents.map(content => (
            <PushMsContentsTableRow key={content.date} content={content} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PushMsContentsTable;
