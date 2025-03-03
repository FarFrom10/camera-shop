import styles from './loading-screen.module.css';


function LoadingScreen(): JSX.Element {
  return (
    <div className={styles.container} >
      <div className={styles.spinnerWrapper}>
        <img className={styles.spinner} src="img/spinner.png" alt="loading..."/>
      </div>
    </div>
  );
}

export default LoadingScreen;
