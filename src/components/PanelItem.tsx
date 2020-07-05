import React from "react";
interface PanelItemProps {
  category: string;
  //previews: Preview[];
}

const PanelItem: React.FC<PanelItemProps> = ({ category }) => {
  return <h1>{category}</h1>;
};

export default PanelItem;
