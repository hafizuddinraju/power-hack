
import React from 'react';
const Modal = ({ setModal, modal }) => {
  const handleBooking = async (event) => {
    event.preventDefault();
    const form = event.target;
    const phone = form.phone.value;

    const booking = {
      
    };
    
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
          <h3 className="text-lg font-bold"></h3>
          <form
            // onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              readOnly
              // defaultValue={session?.user?.email}
              className="input text-gray-800  w-full input-bordered "
            />
            <input
              type="text"
              readOnly
              // defaultValue={session?.user?.email}
              className="input text-gray-800  w-full input-bordered "
            />

            <input
              name="Price"
              type="number"
              placeholder="Payment Amount"
              className="input w-full text-gray-800 input-bordered"
            />
            <input
              name="phone"
              type="number"
              placeholder="Phone Number"
              className="input text-gray-800 w-full input-bordered"
            />

            <br />

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
