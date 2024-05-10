import React, { Dispatch, SetStateAction } from 'react';
import PromptHistoryTableRow from './PromptHistoryTableRow';
import PromptHistoryTableHeader from './PromptHistoryTableHeader';
import prompts from './fakeData';

interface PromptHistoryTableProps {
  setIsClickedHistoryButton: Dispatch<SetStateAction<boolean>>;
}

function PromptHistoryTable({ setIsClickedHistoryButton }: PromptHistoryTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full leading-normal">
        <PromptHistoryTableHeader setIsClickedHistoryButton={setIsClickedHistoryButton} />
        <tbody>
          {prompts.map((prompt, i) => (
            <PromptHistoryTableRow key={i} prompt={prompt} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PromptHistoryTable;
