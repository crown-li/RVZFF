import useStore from "./store/useStore";
import styles from "./App.module.css";
import viteSvg from "@/assets/vite.svg";
import reactSvg from "@/assets/react.svg";
import pythonSvg from "@/assets/python.svg";

function App() {
  const { message, loading, fetchTest } = useStore();

  const handleStart = () => {
    if (message) return;
    fetchTest();
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteSvg} className={styles.logo} alt="logo" />
        </a>
        <a href="https://react.docschina.org/" target="_blank">
          <img src={reactSvg} className={styles.logo} alt="logo" />
        </a>
        <a href="https://www.python.org/" target="_blank">
          <img src={pythonSvg} className={styles.logo} alt="logo" />
        </a>
      </div>
      {loading ? (
        <p className={`${styles.message} ${styles.loading}`}>加载中...</p>
      ) : (
        <h1 className={styles.title}>{message}</h1>
      )}
      <button className={styles.button} onClick={handleStart}>
        开始
      </button>
      <p className={styles.description}>
        Edit <code>App.tsx</code> to test HMR
      </p>
    </div>
  );
}

export default App;
