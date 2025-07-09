import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://tse1.mm.bing.net/th/id/OIP.ky57fWPD8Ko1KnuZdYCbCwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
