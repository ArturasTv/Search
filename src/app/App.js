import SearchBar from "./components/search/Search-Bar";
import SearchList from "./components/list/Search-List";
import { Grid } from "@material-ui/core";

import styles from "./App.module.scss";
import axios from "axios";
import { useState } from "react";

const url = "https://images-api.nasa.gov/search?q=";

const App = () => {
  const [text, SetText] = useState("");
  const [list, SetList] = useState([]);
  const [loaded, setLoad] = useState(false);

  const getData = () => {
    setLoad(true);
    axios.get(`${url}${text}`).then(({ data }) => {
      if (data) {
        SetList(
          data.collection.items
            .map((item) => {
              return item.links
                ? item.links.map((a) => (a.href ? a.href : "404"))
                : [];
            })
            .filter((item) => item.length != 0)
            .slice(0, 9)
        );
      } else {
        SetList([]);
      }
    });
  };
  return (
    <Grid
      className={styles["Grid-Center"]}
      spacing={0}
      alignItems="center"
      justify="center"
    >
      <SearchBar props={{ text, SetText, list, SetList, getData }} />
      {loaded && <SearchList list={list} />}
    </Grid>
  );
};

export default App;
