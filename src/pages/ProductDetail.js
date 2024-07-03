//useParams is used for accessing the parameters from database

import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const params = useParams();
  console.log(params.id);

  return (
    <main>
      <div className="component">ProductDetail - {params.id}</div>
    </main>
  );
};
