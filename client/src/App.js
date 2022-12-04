import "./App.css";
import HealthCheck from "./component/healthCheck";
import RankingBoardGrid from "./component/rankingBoard";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { Grid } from "@mui/material";

function App() {
    // const [state, setState] = useState("None");

    return (
        <div>
            <RecoilRoot>
                <HealthCheck />
                <Grid container spacing={3} sx={{ mt: 1 }}>
                    <Grid item xs={8}>
                        <RankingBoardGrid />
                    </Grid>
                </Grid>
            </RecoilRoot>
        </div>
    );

    /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
}

export default App;
