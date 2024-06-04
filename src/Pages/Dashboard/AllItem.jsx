import { useLoaderData } from "react-router-dom";
import ProductRow from "../../Components/Dashboard/ProductRow";
import { useEffect, useState } from "react";


const AllItem = () => {
const productData = useLoaderData()
const [searchText, setSearchText] = useState('');
const [filteredProducts, setFilteredProducts] = useState(productData);

const handleDelete =(id)=>{
    const filterProduct = filteredProducts.filter(product=>product._id!==id)
    setFilteredProducts(filterProduct)
}

const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchButtonClick = () => {
    const filtered = productData.filter(product =>
      product.category.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    setFilteredProducts(productData);
  }, [productData]);


    return (
        <div className="overflow-x-auto mt-10 ">
            <div className="flex flex-row justify-between items-center mb-8">
                <h1 className="text-xl font-semibold ms-8">All Product List</h1>
                <div>
                <input
            placeholder="search"
            className="border rounded-lg px-4 py-2"
            type="text"
            value={searchText}
            onChange={handleSearchTextChange}
          />
          <button 
            className="btn btn-primary ml-2"
            onClick={handleSearchButtonClick}
          >
            Search
          </button>
                </div>
            </div>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Edit</th>
        <th>Delete</th>

      </tr>
    </thead>
    <tbody>
     
      {
        filteredProducts?.map((product,index)=><ProductRow handleDelete={handleDelete} key={product._id} product={product} index={index}></ProductRow>)
      }
     
     
   
    </tbody>
  
    
  </table>
</div>
    );
};

export default AllItem;