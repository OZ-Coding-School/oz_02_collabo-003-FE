import styles from './SubmitButton.module.scss';

interface SubmitButtonProps {
  content: string;
  MoveHome: () => void;
}

function SubmitButton({ content, MoveHome }: SubmitButtonProps) {
  return (
    <button type="submit" onClick={MoveHome} className={styles.button}>
      {content}
    </button>
  );
}

export default SubmitButton;
