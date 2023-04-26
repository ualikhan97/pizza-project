import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    <div>
      <h1 className={styles.root}>
        <span>😕</span>
        <br />
        <h1>Ничего не найдено </h1>
      </h1>
    </div>
  );
};

export default NotFoundBlock;
