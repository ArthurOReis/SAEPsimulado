import { useParams } from "react-router-dom";
import styles from './DetalhesArea.module.css';

export default function DetalhesArea() {
  const { id } = useParams();
  
  return (
    <div className={styles.container}>
        <h1></h1>
    </div>
  );
}
