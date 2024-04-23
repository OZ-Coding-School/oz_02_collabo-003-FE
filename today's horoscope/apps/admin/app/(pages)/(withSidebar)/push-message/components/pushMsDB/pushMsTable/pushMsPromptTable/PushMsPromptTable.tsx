import PushMsPromptTableHeader from './PushMsPromptTableHeader';
import PushMsPromptTableRow from './PushMsPromptTableRow';

function PushMsPromptTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full leading-normal">
        <PushMsPromptTableHeader />
        <tbody>
          <PushMsPromptTableRow />
        </tbody>
      </table>
    </div>
  );
}

export default PushMsPromptTable;
