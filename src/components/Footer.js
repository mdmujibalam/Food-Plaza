import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <div className='hidden md:flex min-h-[104px] bg-gray-200 mt-6 items-center justify-center '>
    <h1 className='md:w-72 md:mr-12 text-2xl font-extrabold my-auto lg:w-[408px] mr-24'>For better experience,download Food Plaza app now</h1>
    <div className='flex justify-center my-auto mx-2 h-16 gap-5'>
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" alt="googleplay" />
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" alt="appstore" />
    </div>
    </div>
    <footer className='mt-6 md:mt-0 bg-[#02060C] text-white py-12 px-8 md:px-56'>
      <div className='container grid grid-cols-1 text-center  md:grid-cols-4 gap-4 mx-auto'>

        <div className='md:col-start-1 col-end-auto row-start-1 row-end-5'>
          <h2 className='text-2xl font-bold'>Food Plaza</h2>
          <h4 className='text-gray-300 my-4'>© 2024 made By Mujib</h4>
        </div>

        <div className='md-col-start-2'>
          <h2 className='text-lg font-bold'>Company</h2>
          <ul>
            <li className='my-4'>
              <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
                About
              </Link>
            </li>
            <li className='my-4'>
              <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
                Careers
              </Link>
            </li>
            <li className='my-4'>
              <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
                Team
              </Link>
            </li>
            <li className='my-4'>
              <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
                Food Plaza One
              </Link>
            </li>
            <li className='my-4'>
              <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
                Food Plaza Instamart
              </Link>
            </li>
            <li className='my-4'>
              <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
                Food Plaza Genie
              </Link>
            </li>
            
          </ul>
        </div>

        <div>
          <h2 className='text-lg font-bold'>Contact Us</h2>
          <ul>
            <li className='my-4'>
              <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
                Help & Support
              </Link>
            </li>
            <li className='my-4'>
              <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
                Partner with us
              </Link>
            </li>
            <li className='my-4'>
              <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
                Ride with us
              </Link>
            </li>
            {/* Add more links here */}
          </ul>
        </div>
        
        <div className='md:col-start-3 md:-mt-24'>
          <h2 className='text-lg font-bold mb-4'>Legal</h2>
          <ul>
            <li className='my-4'>
              <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
                Terms & Conditions
              </Link>
            </li>
            <li className='my-4'>
              <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
                Cookie Policy
              </Link>
            </li>
            <li className='my-4'>
              <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
                Privacy Policy
              </Link>
            </li>
            {/* Add more links here */}
          </ul>
        </div>

        <div className='md:col-start-4 md:row-start-1'>
          <h2 className='text-lg font-bold mb-4'>Available in:</h2>
          <ul>
            <li className='my-4'>
              <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
              Patna
              </Link>
            </li>
            <li className='my-4'>
              <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
                Ranchi
              </Link>
            </li>
            <li className='my-4'>
              <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
                Dhanbad
              </Link>
            </li>
            <li className='my-4'>
              <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
                Bokaro
              </Link>
            </li>
            <li className='my-4'>
              <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
              Kolkata
              </Link>
            </li>
            <li className='my-4'>
              <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
                Jamshedpur
              </Link>
            </li>
            {/* Add more links here */}
          </ul>
        </div>

    <div className='md:col-start-5 md:row-start-1'>
  <h2 className='text-lg font-bold mb-4'>Life at Food Plaza</h2>
  <ul>
    <li className='my-4'>
      <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
      Explore with Food Plaza
      </Link>
    </li>
    <li className='my-4'>
      <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
      Food Plaza News
      </Link>
    </li>
    <li className='my-4'>
      <Link to='#' className='text-gray-300 hover:text-white transition duration-300'>
      Snackables
      </Link>
    </li>
  </ul>
    </div>


      </div>
    </footer>
    </>
    // <div>footer</div>
  );
}

export default Footer;
