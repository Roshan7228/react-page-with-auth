import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Edit from "./Edit";
import { Nav } from "react-bootstrap";
function Product() {
  const [data, setData] = useState([]);
  function uidata() {
    axios
      .get("http://localhost:3000/product")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    uidata();
  }, []);
  const [page, setPage] = useState(1);
  const TotalEntry = 5;
  const last = page * TotalEntry;
  const first = last - TotalEntry;
  const records = data.slice(first, last);
  const totalPage = 5;
  const numbers = [...Array(totalPage + 1).keys()].slice(1);

  function prev() {
    if (page !== 1) {
      setPage(page - 1);
    }
  }

  function next() {
    if (page !== last) {
      setPage(page + 1);
    }
  }
  return (
    <>
      <h1>Product</h1>
      <div
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(3,1fr)",
        }}
      >
        {records.map((el) => {
          return (
            <NavLink to={`/description/${el.id}`} key={el.id}>
              <div key={el.id} style={{ border: "1px solid black" }}>
                <img src={el.image} alt={el.name} height={300} width={300} />
                <p>{el.title}</p>
                <span>
                  <b>Price:{el.price}</b>
                </span>
                <NavLink to={`/Edit/${el.id}`}></NavLink>
              </div>
            </NavLink>
          );
        })}
      </div>
      <div className="pagi mt-5">
        <ul className="pagination" style={{ margin: "auto", width: "20%" }}>
          <li className="page-item">
            <button className="page-link" onClick={prev}>
              prev
            </button>
          </li>
          {numbers.map((n, i) => (
            <li className={`page-item ${page === n ? "active" : " "}`} key={i}>
              <button className="page-link" onClick={() => setPage(n)}>
                {n}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button className="page-link" onClick={next}>
              next
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Product;
