import { Dispatch, SetStateAction } from 'react';
import PushMsPromptTableHeader from './PushMsPromptTableHeader';
import PushMsPromptTableRow from './PushMsPromptTableRow';

interface PushMsPromptTableProps {
  setIsClickedHistoryButton: Dispatch<SetStateAction<boolean>>;
}

function PushMsPromptTable({ setIsClickedHistoryButton }: PushMsPromptTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full leading-normal">
        <PushMsPromptTableHeader />
        <tbody>
          <PushMsPromptTableRow setIsClickedHistoryButton={setIsClickedHistoryButton} />
        </tbody>
      </table>
    </div>
  );
}

export default PushMsPromptTable;
