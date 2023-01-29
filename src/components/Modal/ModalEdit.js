import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthContext";

const ModalEdit = ({ modal, setmodal, loading, setLoading }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const todayTime = new Date();

  const handleEdit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const phone = form.phone.value;

    const payment = {
      bill: price,
      phone: phone,
      time: todayTime,
    };
    fetch(`https://server-power.vercel.app/api/update-billing/${modal._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(!loading);
        toast.success("Update Successfull", { autoClose: 500 });
        navigate("/dashboard");
      });
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Make A Payment Update</h3>
          <form onSubmit={handleEdit} className="grid grid-cols-1 gap-3 mt-10">
            <input
              type="text"
              readOnly
              disabled
              defaultValue={user?.name}
              className="input text-gray-900  w-full input-bordered "
            />
            <input
              type="email"
              readOnly
              disabled
              defaultValue={user?.email}
              className="input text-gray-900  w-full input-bordered "
            />

            <input
              name="price"
              type="number"
              defaultValue={modal.bill}
              className="input w-full text-gray-800 input-bordered"
            />
            <input
              required
              name="phone"
              type="number"
              defaultValue={modal?.phone}
              className="input text-gray-800 w-full input-bordered"
            />

            <br />
            {/* <p className='text-red-500 text-center'>{error}</p> */}

            <input
              className="btn bg-sky-500 hover:bg-sky-600 border-none w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalEdit;
