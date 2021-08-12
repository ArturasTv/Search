import { Card, CardContent, ImageList, ImageListItem } from "@material-ui/core";

import styles from "./Search-List.module.scss";

const SearchList = ({ list }) => {
  return (
    <Card className={styles["Search-list-card"]}>
      <CardContent>
        <ImageList
          className={styles["Search-list-image-list"]}
          rowHeight={500}
          cols={3}
        >
          {list.length != 0 ? (
            list.map((item) => (
              <ImageListItem key={item[0]} cols={item.cols || 1}>
                <img src={item[0]} alt={item[0]} />
              </ImageListItem>
            ))
          ) : (
            <ImageListItem cols={3}>
              <img
                src={"https://http.cat/404"}
                className={styles["Search-list-error"]}
                alt={"404"}
              />
            </ImageListItem>
          )}
        </ImageList>
      </CardContent>
    </Card>
  );
};

export default SearchList;
