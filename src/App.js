import { useTimeout } from "./hook/Timeout";
import "./styles.css";

export default function App() {
  const isReady = useTimeout(5000);
  return (
    <div className="App">
      <h2>useTimeout</h2>
      {isReady && <h2>Ready</h2>}
      {!isReady && "Not Ready"}
    </div>
  );
}
