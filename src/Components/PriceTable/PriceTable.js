import React from "react";

const PriceTable = ({ selectCategory, service }) => {
  //console.log(service);
  const { category, title } = service;
  return (
    <div className="table-responsive">
      <table className="table table-primary table-striped table-hover">
        <thead>
          <tr>
            <th scope="col" colSpan="2">
              {title}
            </th>
          </tr>
        </thead>
        <tbody>
          {category?.map((category, index) => (
            <tr
              className="table-active"
              key={"category" + index}
              onClick={selectCategory}
            >
              <th scope="row">{category.categoryName}</th>
              <td>${category.price}</td>
            </tr>
          ))}
          {/* <tr className="table-active">
            <th scope="row">Lock Re-Keys</th>
            <td>$35</td>
          </tr>
          <tr>
            <th scope="row">Lock Repairs</th>
            <td>$44</td>
          </tr>
          <tr>
            <th scope="row">Master Key Systems</th>
            <td>$55</td>
          </tr>
          <tr>
            <th scope="row">Card access and keypad locking</th>
            <td>$66</td>
          </tr>
          <tr>
            <th scope="row">Master Key Systems</th>
            <td>$55</td>
          </tr>
          <tr>
            <th scope="row">Security Lock Systems</th>
            <td>$55</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default PriceTable;
