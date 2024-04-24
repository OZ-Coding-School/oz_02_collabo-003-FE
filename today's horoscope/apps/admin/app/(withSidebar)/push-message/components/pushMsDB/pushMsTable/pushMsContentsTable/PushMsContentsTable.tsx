import Pagination from '../../../../../../_components/pagination/Pagination';
import PushMsContentsTableHeader from './PushMsContentsTableHeader';
import PushMsContentsTableRow from './PushMsContentsTableRow';
import todayContents from './fakeData';

function PushMsContentsTable() {
  const totalItems = 100;
  const itemsPerPage = 5;

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
      <div className="mt-6">
        <Pagination totalItems={totalItems} itemsPerPage={itemsPerPage} />
      </div>
    </div>
  );
}

export default PushMsContentsTable;
