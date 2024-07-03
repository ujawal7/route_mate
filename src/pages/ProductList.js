//useSearchParams which is used for accessing all types of other parameters
//like if any question mark is there or any search query is there
import { useSearchParams, useLocation } from "react-router-dom";

export const ProductList = () => {
  //Access the parameters
  //This could have setsearchParams also
  const [searchParams] = useSearchParams();
  //http://localhost:3000/products?q=hello
  //something like this I can give in url (if q console hello)
  //console.log(searchParams.get("q"));
  //http://localhost:3000/products?keyword=react&instock=true&rating=4
  //like this if we give in url and get the params below we will get output react true 4
  console.log(
    searchParams.get("keyword"),
    searchParams.get("instock"),
    searchParams.get("rating")
  );

  // this will give all the information about url accessing
  const location = useLocation();
  console.log(location);
  // {pathname: '/products', search: '?keyword=react&instock=true&rating=4', hash: '', state: null, key: 'default'}

  return (
    <main>
      <div className="component">ProductList</div>
    </main>
  );
};

//Main purpose of useSearchParams is to filter the stuff and useLoaction it will give all information
