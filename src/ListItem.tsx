import * as React from "react";

const ListItem = (props: any) => {
  const { id, name, age } = props;
  return (
    <p>
      {id}：{name}({age})
    </p>
  );
};

export default ListItem;
