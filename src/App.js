import Main from "./component/Main";
import { HashRouter, Switch, Route } from 'react-router-dom';
import { listData } from "src/module/common";
function App() {
  return (
    <HashRouter basename="/woong-pang">
      <Switch>
        <Route exact path='/' render={() => <Main pageCode={"1029"} />} />
        {listData.map((dataList, index) => (
          <Route exact path={"/" + dataList.code} render={() => <Main pageCode={dataList.code} />} key={index} />
        ))}
      </Switch>
    </HashRouter>
  );
}

export default App;
