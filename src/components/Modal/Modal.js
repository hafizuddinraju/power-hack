import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Modal = ({ modal, setmodal }) => {
  const navigate = useNavigate();

  const todayTime = new Date();
  function generateId() {
    return Math.random().toString(36).substr(2, 9);
  }

  const handleBooking = async (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const phone = form.phone.value;

    const payment = {
      billing_Id: generateId(),
      name: modal?.name,
      email: modal?.email,
      bill: price,
      phone: phone,
      time: todayTime,
    };
    const response = await fetch(
      "https://server-power.vercel.app/api/add-billing",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payment),
      }
    );
    const result = await response.json();
    if (result) {
      toast.success(result.message, { autoClose: 500 });
      navigate("/dashboard");
    } else {
      toast.error("payment Failed", { autoClose: 500 });
    }
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
          <h3 className="text-lg font-bold">Make A Payment</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              readOnly
              defaultValue={modal?.name}
              className="input text-gray-800  w-full input-bordered "
            />
            <input
              type="email"
              readOnly
              defaultValue={modal?.email}
              className="input text-gray-800  w-full input-bordered "
            />

            <input
              name="price"
              type="number"
              required
              placeholder="Payment Amount"
              className="input w-full text-gray-800 input-bordered"
            />
            <input
              required
              name="phone"
              type="number"
              placeholder="Phone Number"
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

export default Modal;
