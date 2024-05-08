import styles from './SubmitButton.module.scss';

interface SubmitButtonProps {
  formId: string;
  content: string;
  MoveHome: () => void;
}

function SubmitButton({ formId, content, MoveHome }: SubmitButtonProps) {
  return (
    <button form={formId} type="submit" onClick={MoveHome} className={styles.button}>
      {content}
    </button>
  );
}

export default SubmitButton;
