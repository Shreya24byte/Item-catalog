import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getItems, deleteItem } from "../service/api";

function ItemDisplay({ item }) {
  const [data, setData] = useState([]);

  const getAllItems = async () => {
    const response = await getItems();
    console.log(response.data);
    setData(response.data);
  };
  const deleteItemDetails = async (id) => {
    await deleteItem(id);
    getAllItems();
    alert("Item deleted");
  };
  return (
    <div className="row mt-4 w-60 bg-light m-4 p-5">
      <div class="card me-4 mb-4">
        <div class="card-header d-flex text-uppercase text-secondary h1 px-5 fw-bold">
          {item.name}
        </div>
        <div class="card-body row">
          <div className="col-sm-3">
            <img src={item.img} height="350" width="700" />
          </div>
          <div className="col-sm-1"></div>
          <div className="col-sm-8 p-4 fs-2">
            <p>{item.description}</p>
            <Link to={`/edit/${item.id}`}>
              <button
                type="button"
                class="btn btn-outline-primary px-4 fs-4 me-2 ms-auto"
              >
                Edit
              </button>
            </Link>
            <Link to="/catalog">
              <button
                type="button"
                class="btn btn-outline-danger px-4 fs-4 me-2 ms-auto"
                onClick={() => deleteItemDetails(item.id)}
              >
                Delete
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDisplay;
