import styles from './Counter.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { decrementProp2, incrementProp2, toggle } from './randomSlice';
import { useAppDispatch } from '../../app/hooks';

export function Random() {
  const dispatch = useAppDispatch();
  const { prop1, prop2 } = useSelector((state: RootState) => state.random.randomObject);

  return (
    <div>
      <div className={styles.row}>
        <span className={styles.boolValue}>{String(prop1)}</span>
        <button
          className={styles.button}
          onClick={() => dispatch(toggle())}
        >
          toggle state
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrementProp2())}
        >
          -
        </button>
        <span className={styles.value}>{prop2}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(incrementProp2())}
        >
          +
        </button>
      </div>
    </div>
  );
}
