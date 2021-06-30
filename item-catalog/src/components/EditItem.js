/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { editItem, getItems } from "../service/api";
import { useHistory, useParams, Link } from "react-router-dom";

const initialValues = {
  category: "",
  name: "",
  img: "",
  description: "",
};
function EditItem() {
  const [item, setItem] = useState(initialValues);
  const { category, name, img, description } = item;
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    const response = await getItems(id);
    setItem(response.data);
  };
  const onValueChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };
  const editItemDetails = async () => {
    await editItem(id, item);
    history.push("./all");
  };
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-2"></div>
        <div className="col-md-8 bg-light p-4">
          <h2 className="fw-bold">Edit Item</h2>
          <hr />
          <label for="title" className="form-label mt-3 fs-4">
            Title:
          </label>
          <input
            value={name}
            name="name"
            onChange={(e) => onValueChange(e)}
            type="text"
            className="form-control form-control-lg"
            id="title"
            placeholder="Title of the item"
          />
          <label for="description" class="form-label mt-3 fs-4">
            Description:
          </label>
          <textarea
            value={description}
            name="description"
            onChange={(e) => onValueChange(e)}
            class="form-control"
            placeholder="Description of the item"
            id="description"
            rows="3"
          ></textarea>
          <label for="img" className="form-label mt-3 fs-4">
            Image:
          </label>
          <input
            value={img}
            name="img"
            onChange={(e) => onValueChange(e)}
            type="text"
            className="form-control form-control-lg"
            id="img"
            placeholder="Please provide a link to the item image"
          />
          <label for="category" className="form-label mt-3 fs-4">
            Category:
          </label>
          <input
            value={category}
            name="category"
            onChange={(e) => onValueChange(e)}
            type="text"
            className="form-control form-control-lg"
            id="category"
            placeholder="Category of the items"
          />
          <div className="row mt-4">
            <div className="col-md-6">
              <Link to="/item">
                <button
                  type="button"
                  class="btn btn-success btn-lg ms-3"
                  onClick={() => editItemDetails()}
                >
                  Save
                </button>
                <button type="button" class="btn btn-primary btn-lg ms-5">
                  Cancel
                </button>
              </Link>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}

export default EditItem;
