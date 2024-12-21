import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function Description() {
  const [newdata, setNewData] = useState({});
  const params = useParams();
  const [carData, setcartData] = useState([]);
  function data() {
    axios
      .get(`http://localhost:3000/product/${params.id}`)
      .then((res) => setNewData(res.data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    data();
  }, []);
  function Cart(id) {
    setcartData((item) => [...item, id]);
    console.log(carData);
  }
  return (
    <div>
      <h1>Description Page</h1>
      <img src={newdata.image} alt="" height={200} width={200} />
      <h1>{newdata.title}</h1>
      <h2>{newdata.price}</h2>
      <p>{newdata.Description}</p>
      <button onClick={() => Cart(newdata.id)}>ADD to cart</button>
    </div>
  );
}

export default Description;
