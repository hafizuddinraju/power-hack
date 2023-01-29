import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import Modal from '../Modal/Modal';

 const Header = () => {
  const {user} = useContext(AuthContext)
    const [modal, setModal] = useState({});
    return (
      <div className="relative h-screen">
        <img
          src="https://images.pexels.com/photos/257703/pexels-photo-257703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 h-screen bg-opacity-75">
            <ul className='flex justify-center pt-[300px] items-center'>

            <label
                      htmlFor="booking-modal" 
                      className="inline-flex items-center justify-center w-[400px] h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-sky-500 hover:bg-sky-600 focus:shadow-outline focus:outline-none"
                      onClick={() => setModal(user)}
                    >
                      Make A Payment
                    </label>
            </ul>
        </div>
        {modal && (
              <Modal
                modal={modal}
                setModal={setModal}

              ></Modal>
            )}
      </div>
    );
  };

  export default Header;