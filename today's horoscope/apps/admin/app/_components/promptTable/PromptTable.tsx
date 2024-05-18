import { Dispatch, SetStateAction } from 'react';
import PromptTableHeader from './PromptTableHeader';
import PromptTableRow from './PromptTableRow';

interface PromptTableProps {
  setIsClickedHistoryButton: Dispatch<SetStateAction<boolean>>;
}

function PromptTable({ setIsClickedHistoryButton }: PromptTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full leading-normal">
        <PromptTableHeader />
        <tbody>
          <PromptTableRow setIsClickedHistoryButton={setIsClickedHistoryButton} />
        </tbody>
      </table>
    </div>
  );
}

export default PromptTable;
