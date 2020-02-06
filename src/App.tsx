import * as React from "react";
import axios from "axios";
import ListItem from "./ListItem";

const App = () => {
  const { useState } = React;
  // 取得したデータを格納する変数dataList、初期値は空の配列[]
  const [dataList, setDataList] = useState([]);

  // データ取得押下時に実行する関数
  const onClickGetData = () => {
    axios
      .get("https://api.myjson.com/bins/13tbi2")
      .then(res => setDataList(res.data.users))
      .catch(err => alert(err));
  };

  // 画面に表示する内容。JSXという書き方
  return (
    <div>
      <h2>TypeScriptハンズオン(応用編)</h2>
      <button onClick={onClickGetData}>データ取得</button>
      {dataList.map((obj: any) => {
        return (
          <div key={obj.id}>
            <ListItem id={obj.id} name={obj.nama} age={obj.age} />
          </div>
        );
      })}
    </div>
  );
};

export default App;
