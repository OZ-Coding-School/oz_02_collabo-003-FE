import PushMsContentsTableHeader from './PushMsContentsTableHeader';
import PushMsContentsTableRow from './PushMsContentsTableRow';
import todayContents from './fakeData';

function PushMsContentsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full leading-normal">
        <PushMsContentsTableHeader />
        <tbody>
          {todayContents.map((content, i) => (
            <PushMsContentsTableRow key={i} content={content} index={i} />
          ))}
        </tbody>
      </table>
      <div className="mt-6"></div>
    </div>
  );
}

export default PushMsContentsTable;
