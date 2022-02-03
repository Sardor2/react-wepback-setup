import React from "react";

interface Props {
  title: string;
}

const LazyComponent: React.FC<Props> = ({ title }) => <h1>{title}</h1>;

export default LazyComponent;
