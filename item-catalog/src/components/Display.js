/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getItems } from "../service/api";

function Display(props) {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  useEffect(() => {
    getAllItems();
  }, []);
  const getAllItems = async () => {
    const response = await getItems();
    console.log(response.data);
    setData(response.data);
  };
  function viewDetails(item) {
    const items = props.item;
    const updateItem = props.updateItem;
    updateItem(item);
  }
  //Filter based on category
  useEffect(() => {
    setOutput([]);
    data.filter((val) => {
      if (val.category.toLowerCase().includes(input.toLowerCase())) {
        setOutput((output) => [...output, val]);
      }
    });
  }, [input]);

  return (
    <div className="row mt-4 w-100">
      <div className="col-md-3 ms-5">
        <div className="row ">
          <p className="fs-1 fw-bold">Categories</p>
          <div className="row pe-5">
            <input
              onChange={(e) => setInput(e.target.value)}
              type="text"
              class="form-control m-2"
              placeholder="Search category"
            />
          </div>
        </div>
      </div>
      <div className="col-md-8 bg-light">
        <div className="row mt-4">
          <div className="col-md-10 mt-2">
            <p className="fs-1 fw-bold m-2">Latest Items</p>
          </div>
          <div className="col-md-2 mt-4">
            <Link to="/add">
              <button
                type="button"
                class=" mt-2 px-5 btn btn-lg btn-outline-success p-3 h2"
              >
                Add
              </button>
            </Link>
          </div>
        </div>
        <hr />
        <p className="text-center h1"></p>
        <div className="row p-4">
          {output.map((item) => (
            <div className="col-sm-4">
              <div
                className="card m-3 mx-4"
                style={{ width: "30rem", height: "30rem" }}
              >
                <img
                  src={item.img}
                  className="card-img-top"
                  alt="..."
                  width="200"
                  height="300"
                />
                <div className="card-body mx-auto">
                  <h5 className="card-title m-2 h2">{item.name}</h5>
                  <Link to="/item">
                    <button
                      type="button"
                      onClick={() => viewDetails(item)}
                      class="btn btn-outline-secondary btn-lg mt-3"
                    >
                      View details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Display;
