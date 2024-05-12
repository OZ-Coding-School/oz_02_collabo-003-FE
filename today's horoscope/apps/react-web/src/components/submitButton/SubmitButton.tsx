import styles from './SubmitButton.module.scss';

interface SubmitButtonProps {
  content: string;
  handleSubmit: (e: React.FormEvent<HTMLButtonElement>) => void;
}

function SubmitButton({ content, handleSubmit }: SubmitButtonProps) {
  return (
    <button type="submit" onClick={handleSubmit} className={styles.button}>
      {content}
    </button>
  );
}

export default SubmitButton;
