import React, { useContext, useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthContext";
import ModalEdit from "../Modal/ModalEdit";
import Spinner from "../Spinner/Spinner";
import "./Dashboard.css";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paymentData, setPaymentData] = useState([]);
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState({});
  const [serchData, setsearchData] = useState("");
  console.log(serchData);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  useEffect(() => {
    const url = `https://server-power.vercel.app/api/billing-list?page=${page}&size=${size}&q=${serchData}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        setLoading(false);
        setPaymentData(data.data);
      });
  }, [page, size, serchData, loading]);

  const pages = Math.ceil(count / size);

  const handleDetete = (id) => {
    fetch(`https://server-power.vercel.app/api/delete-billing/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(!loading);
        if (data.success) {
          toast.success(`Products deleted successfully`, { autoClose: 500 });
        }
      });
  };
  if (!paymentData) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <header>
        <div onClick={() => setToggle(!toggle)} className="logosec"></div>

        <div className="searchbar">
          <input
            onChange={(e) => setsearchData(e.target.value.toLowerCase())}
            type="text"
            placeholder="Search"
          />
          <div className="searchbtn">
            <img
              src="https://i.ibb.co/1mvyLPD/Untitled-design-28.png"
              className="icn srchicn"
              alt="search-icon"
            />
          </div>
        </div>

        <div className="message">
          <div className="circle"></div>
          <img src="https://i.ibb.co/qs4QtHf/8.png" className="icn" alt="" />
          <div className="dp">
            <img
              src="https://i.ibb.co/9rcGLKG/profile-removebg-preview.png"
              className="dpicn"
              alt="dp"
            />
          </div>
        </div>
      </header>

      <div className="main-container">
        <div className="main">
          <div className="searchbar2">
            <input type="text" name="" id="" placeholder="Search" />
            <div className="searchbtn">
              <img
                src="https://i.ibb.co/1mvyLPD/Untitled-design-28.png"
                className="icn srchicn"
                alt="search-button"
              />
            </div>
          </div>
          <div className="report-topic-heading">
            <div className="relative overflow-x-auto p-6 shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Billing_ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Full Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Phone
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Paid Amount
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                  <hr />
                </thead>

                <tbody>
                  {paymentData?.map((pay) => {
                    const { _id, billing_Id, name, email, bill, phone } = pay;
                    return (
                      <tr
                        key={_id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {billing_Id}
                        </th>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {name}
                        </th>
                        <td className="px-6 py-4">{email}</td>

                        <td className="px-6 py-4">{phone}</td>

                        <td className="px-6 py-4">{bill}</td>

                        <td className="px-6 py-4 flex">
                          <label htmlFor="booking-modal">
                            <FaUserEdit
                              onClick={() => setModal(pay)}
                              title="Edit Item"
                              className="text-2xl"
                            ></FaUserEdit>
                          </label>
                          <AiFillDelete
                            onClick={() => handleDetete(_id)}
                            title="Remove item"
                            className="text-2xl text-red-600 ml-5"
                          ></AiFillDelete>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {modal && (
                <ModalEdit
                  modal={modal}
                  setModal={setModal}
                  loading={loading}
                  setLoading={setLoading}
                ></ModalEdit>
              )}
              <div className="pagination">
                {[...Array(pages).keys()].map((number) => (
                  <button
                    key={number}
                    className={page === number ? "selected" : ""}
                    onClick={() => setPage(number)}
                  >
                    {number + 1}
                  </button>
                ))}
                <select onChange={(event) => setSize(event.target.value)}>
                  <option value="5">5</option>
                  <option value="10" selected>
                    10
                  </option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
