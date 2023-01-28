import React from 'react';
import { IoSettingsSharp } from 'react-icons/io5';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { BsFillEyeFill } from 'react-icons/bs';
import { GrDocumentPdf } from 'react-icons/gr';
const Attendance = () => {
    return (
        <>
        <div className='flex justify-between items-center'>
            <h2 className=' text-[#102048] text-3xl font-bold py-2 px-3 '>Attendance</h2>
            <div className='flex items-center gap-6'>
                <p className='bg-[#1E2772] text-white py-2 px-3 rounded-lg shadow-md'>Download Report</p>
                <IoSettingsSharp className='text-2xl text-[#1E2772]'></IoSettingsSharp>
            </div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ml-2 mt-14'>
        <div className='bg-white flex items-center justify-between gap-6 text-black py-4 px-3 rounded-md  shadow-md'>
           <p className='text-gray-400'>Jan 03, 2023</p>
           <SlCalender></SlCalender>
            </div>
        <div className='bg-white flex items-center gap-6 justify-between text-black py-4 px-3 rounded-md  shadow-md'>
           <p className='text-gray-400'>Department</p>
           <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown> 
            </div>
        <div className='bg-white flex items-center gap-6 justify-between text-black py-4 px-3 rounded-md  shadow-md'>
           <p className='text-gray-400'>Attendance</p>
           <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown> 
            </div>
        <div className='bg-white flex items-center gap-6 justify-between text-black py-4 px-3 rounded-md  shadow-md'>
           <p className='text-gray-400'>Present</p>
           <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown> 
            </div>
        <div className='bg-white flex items-center gap-6 justify-between text-black py-4 px-3 rounded-md  shadow-md'>
           <p className='text-gray-400'>Check In</p>
           <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown> 
            </div>
        <div className='bg-white flex items-center gap-6 justify-between text-black py-4 px-3 rounded-md  shadow-md'>
           <p className='text-gray-400'>Location</p>
           <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown> 
            </div>
        <div className='bg-white flex items-center gap-6 justify-between text-black py-4 px-3 rounded-md  shadow-md'>
           <p className='text-gray-400'>Designation</p>
           <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown> 
            </div>
        <div className='bg-white flex items-center gap-6 justify-between text-black py-4 px-3 rounded-md  shadow-md'>
           <p className='text-gray-400'>Department</p>
           <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown> 
            </div>
       

        </div>
        


            <div className="report-container">
            

            <div className="report-body">
            <div className="report-topic-heading">   
<div className="relative overflow-x-auto p-6 shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3">
                    Employee Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Department
                </th>
                <th scope="col" className="px-6 py-3">
                    Check In
                </th>
                <th scope="col" className="px-6 py-3">
                    Check Out
                </th>
                <th scope="col" className="px-6 py-3">
                    Remark
                </th>
                <th scope="col" className="px-6 py-3">
                    Hours
                </th>
                <th scope="col" className="px-6 py-3">
                    Overtime
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
            <hr />
        </thead>
        
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Jahid Hasan
                </th>
                <td className="px-6 py-4">
                    HR & Admin
                </td>
                <td className="px-6 py-4">
                    <p className='bg-[#4AA785] px-1 text-white rounded-full'>09:46 am</p>
                </td>
                <td className="px-6 py-4">
                <p className='bg-[#4AA785] px-1 text-white rounded-full'>09:46 am</p>
                </td>
                <td className="px-6 py-4">
                <p className='bg-[#4AA785] px-1 text-white rounded-full'></p>
                </td>
                <td className="px-6 py-4">
                <p className='bg-[#4AA785] px-1 text-white rounded-full'></p>
                </td>
                <td className="px-6 py-4">
                <p className='bg-[#4AA785] px-1 text-white rounded-full'></p>
                </td>
                <td className="px-6 py-4">
                    <BsFillEyeFill className='text-3xl text-[#1E2772]'></BsFillEyeFill>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Jahid Hasan
                </th>
                <td className="px-6 py-4">
                    HR & Admin
                </td>
                <td className="px-6 py-4">
                    <p className='bg-[#E25959] px-1 text-white rounded-full'>10:30 am</p>
                </td>
                <td className="px-6 py-4">
                <p className='bg-[#E25959] px-1 text-white rounded-full'>05:30 pm</p>
                </td>
                <td className="px-6 py-4">
                <GrDocumentPdf className='text-2xl text-[#1E2772]'></GrDocumentPdf>
                </td>
                <td className="px-6 py-4">
                <p className='bg-[#4AA785] px-1 text-white rounded-full'></p>
                </td>
                <td className="px-6 py-4">
                <p className='bg-[#4AA785] px-1 text-white rounded-full'></p>
                </td>
                <td className="px-6 py-4">
                    <BsFillEyeFill className='text-3xl text-[#1E2772]'></BsFillEyeFill>
                </td>
            </tr>
            
            
            
            
            
        </tbody>
    </table>
    <nav className="flex items-center justify-between pt-4" aria-label="Table navigation">
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">1000</span></span>
        <ul className="inline-flex items-center -space-x-px">
            <li>
                <a href="/" className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span className="sr-only">Previous</span>
                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                </a>
            </li>
            <li>
                <a href="/" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
            </li>
            <li>
                <a href="/" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
            </li>
            <li>
                <a href="/" aria-current="page" className="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
            </li>
            <li>
                <a href="/" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
            </li>
            <li>
                <a href="/" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
            </li>
            <li>
                <a href="/" className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span className="sr-only">Next</span>
                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                </a>
            </li>
        </ul>
    </nav>
</div>
</div>

              {/* <div className="report-topic-heading">
                <h3 className="t-op">
                    
                <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
                mt-3 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>Employee Name</h3>
                <h3 className="t-op">Department</h3>
                <h3 className="t-op">Check In</h3>
                <h3 className="t-op">Check Out</h3>
                <h3 className="t-op">Remark</h3>
                <h3 className="t-op">Hours</h3>
                <h3 className="t-op">Overtime</h3>
                <h3 className="t-op">Acrion</h3>
              </div>

              <div className="items">
                <div className="item1">
                  <h3 className="t-op-nextlvl"><input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
                mt-3 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/> Article 73</h3>
                  <h3 className="t-op-nextlvl">2.9k</h3>
                  <h3 className="t-op-nextlvl">210</h3>
                  <h3 className="t-op-nextlvl">210</h3>
                  <h3 className="t-op-nextlvl lavel-tag">Published</h3>
                  <h3 className="t-op-nextlvl lavel-tag">Published</h3>
                  <h3 className="t-op-nextlvl lavel-tag">Published</h3>
                  <h3 className="t-op-nextlvl lavel-tag">Published</h3>
                </div>

                

                
              </div> */}
            </div>
          </div>
            
        </>
    );
};

export default Attendance;