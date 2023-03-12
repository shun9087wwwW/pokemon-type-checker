import { useEffect, useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Search from "./component/Search";
import db from "./firebase";
import { doc, collection, getDocs, onSnapshot } from "firebase/firestore";

function App() {
  const [type, setType] = useState([]);

  useEffect(() => {
    // データベースから取得する
    const typeData = collection(db, "type");

    // リアルタイムで取得する
    onSnapshot(typeData, (type) => {
      setType(type.docs.map((doc) => ({ ...doc.data() })));
    });
  }, []);

  return (
    <div className="App">
      {type.map((t) => (
        <div>
          <h1>{t.name}</h1>
        </div>
      ))}
      {/* <Header />
      <Search /> */}
    </div>
  );
}

export default App;
