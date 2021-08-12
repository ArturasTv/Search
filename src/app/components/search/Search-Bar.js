import {
  Card,
  CardActions,
  CardContent,
  Button,
  TextField,
} from "@material-ui/core";
import styles from "./Search-Bar.module.scss";

const SearchBar = ({ props }) => {
  const { text, SetText, list, getData } = props;
  const handleInputChange = (e) => {
    if (e.target.value == "") SetText("");
    SetText(e.target.value);

    getData();
    if (list) {
      console.log(list);
    }
  };
  return (
    <Card className={styles["Search-Bar-card"]}>
      <CardContent>
        <TextField
          id="standard-helperText"
          label="Paieška"
          className={styles["Search-Bar-input"]}
          value={text}
          onChange={handleInputChange}
        />
      </CardContent>
    </Card>
  );
};

export default SearchBar;
