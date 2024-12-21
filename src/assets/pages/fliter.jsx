import axios from "axios";
import React, { useEffect, useState } from "react";

const Fliter = () => {
  const [productData, setProductData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sortType, setSortType] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  const data = () => {
    axios
      .get("http://localhost:3000/product")
      .then((res) => {
        setProductData(res.data);
        setFilteredData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    data();
  }, []);

  const handleSort = (type) => {
    setSortType(type);
    let sorted = [...filteredData];

    if (type === "price-asc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (type === "price-desc") {
      sorted.sort((a, b) => b.price - a.price);
    }

    setFilteredData(sorted);
  };

  const handleFilter = (category) => {
    setFilterCategory(category);
    if (category === "all") {
      setFilteredData(productData);
    } else {
      const filtered = productData.filter((item) => item.category === category);
      setFilteredData(filtered);
    }
  };

  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "20px",
            marginTop: "20px",
            width: "100%",
          }}
        >
          <form style={{ margin: "auto" }}>
            <select
              value={filterCategory}
              onChange={(e) => handleFilter(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
            </select>

            <select
              value={sortType}
              onChange={(e) => handleSort(e.target.value)}
            >
              <option value="">Sort By</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </form>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "30px",
          marginTop: "20px",
        }}
      >
        {filteredData.map((item) => {
          return (
            <div
              key={item.id}
              style={{ border: "1px solid black", padding: "10px" }}
            >
              <img src={item.image} alt="" height={300} width={300} />
              <p>
                <b>{item.title}</b>
              </p>
              <p>{item.description}</p>
              <p>
                <b>${item.price}</b>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Fliter;
