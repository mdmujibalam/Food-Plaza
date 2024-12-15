import React, { useEffect, useState } from 'react'
import useRestaurantData from '../utils/useRestaurantData';
import { filterData } from '../utils/helper';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';
import FoodCarousel from './FoodCarousel';
import RestaurantCarousel from './RestaurantCarousel';
import ItemCarousel from './ItemCarousel';
import ButtonList from './ButtonList';
import ShimmerCursor from './ShimmerCursor';

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(10)
  const [Loading, setLoading] = useState(false);
  const { carousel, allRestaurants, filteredRestaurants, setFilteredRestaurants, setAllRestaurants, restaurantCarousel, itemCarousel } = useRestaurantData();
  // console.log(allRestaurants);
  // console.log(itemCarousel);

  
async function getRestaurantMore() {
  setLoading(true);
  try {
    const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Include any additional headers here
      },
      body: JSON.stringify({
        lat: 12.971599,
        lng: 77.594566,
        nextOffset: 'COVCELQ4KICYjZK9t5jcWDCnEzgC',
        // lat: "21.99740",
        // lng: "79.00110",
        // nextOffset: "CJhlELQ4KICQ5aDVk+qjDTCnEzgE",
        seoParams: {
          apiName: 'FoodHomePage',
          pageType: 'FOOD_HOMEPAGE',
          seoUrl: 'https://www.swiggy.com/restaurants',
        },
        widgetOffset: {
          Restaurant_Group_WebView_SEO_PB_Theme:"",
          NewListingView_category_bar_chicletranking_TwoRows: '',
          NewListingView_category_bar_chicletranking_TwoRows_Rendition: '',
          collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: String(page),
          inlineFacetFilter:'',
          restaurantCountWidget:''
        },
        fliters: {},
        page_type: 'DESKTOP_WEB_LISTING',
        _csrf: 'Wa4479CuNAHS-24Ynwws3k2hSsD6G6fhPXyFTBaM',
        //_csrf: "tIpZwexA8BVT-QRw8oNPK--5Q3nJSAbQlbWnPLXQ"
      }),
    });

    const data = await response.json();
    console.log(data);
    if (allRestaurants) {

      let newRestaurants = data.data.cards[0].card.card.gridElements.infoWithStyle.restaurants;

      setFilteredRestaurants((prevRestaurants) => [...prevRestaurants, ...newRestaurants]);
      setAllRestaurants((prevRestaurants) => [...prevRestaurants, ...newRestaurants]);
    }
  } catch (error) {
    console.error('Error fetching restaurants:', error);
  } finally {
    setLoading(false);
  }
}

  useEffect(() => {
         if (page > 10) {
        getRestaurantMore();
      }
  }, [page]);


  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 10);
      }
    } catch (error) { }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  if (!allRestaurants) {
    return (
      <div>
    <ShimmerCursor />
    <Shimmer />
  </div>
      ) 
  }
  return allRestaurants.length === 0 ? (
    <div>
      <ShimmerCursor />
      <Shimmer />
    </div>
  )
    : (
      <>

        <div className='mx-8 sm:mx-14 md:mx-24 lg:mx-44 pb-4'>
          <ItemCarousel data={itemCarousel} />
        </div>

        <hr className="mx-8 sm:mx-14 md:mx-24 lg:mx-44 border-1 border-solid border-gray-300 my-8" />


        <div className='mx-8 sm:mx-14 md:mx-24 lg:mx-40 p-4'>
          <RestaurantCarousel data={restaurantCarousel} />
        </div>

        <hr className="mx-8 sm:mx-14 md:mx-24 lg:mx-44 border-1 border-solid border-gray-300 my-8" />


        <div className='mx-8 sm:mx-14 md:mx-24 lg:mx-44 '>
          <h1 className='font-bold text-2xl pb-4'>Restaurants with online food delivery</h1>
          <div>
            <ButtonList />
          </div>
          <div className="grid grid-cols-1 mx-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start gap-8 mt-8" data-testid='res-list'>
            {/* You have to write logic for NO restraunt fount here */}
            {filteredRestaurants && filteredRestaurants.map((restaurant) => {
              return (
                <Link
                  to={"/restaurant/" + restaurant.info.id}
                  key={restaurant.info.id}
                  className='pr-4'
                >
                  {/* {restaurant.info.id} */}
                  <RestaurantCard {...restaurant.info} />
                </Link>
              );
            })}
          </div>
          <div>
          </div>
        </div>
          {Loading && <Shimmer/>}
      </>
    );
};

export default Body

