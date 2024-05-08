import styles from './SubmitButton.module.scss';

interface SubmitButtonProps {
  content: string;
}

function SubmitButton({ content }: SubmitButtonProps) {
  return <button className={styles.button}>{content}</button>;
}

export default SubmitButton;
