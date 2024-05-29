
import React, { useEffect, useState } from 'react';
import "./style.css";
import { SlCalender } from "react-icons/sl";
import { PiLineVertical } from "react-icons/pi";
import { FiClock } from "react-icons/fi";
import axios from 'axios';
import { IoMdArrowDropdown } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { LuRefrigerator } from "react-icons/lu";
import { LuMicrowave } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function HomePage() {

    const [date, setDate] = useState();
    const [typeSelected, setTypeSelected] = useState(1);
    const [dishes, setDishes] = useState([]);
    const [itemSelected, setItemSelected] = useState([]);

    const navigate = useNavigate();
    

    function getCurrentDate() {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = String(today.getFullYear());

        setDate(`${day} ${month} ${year}`);
    }

    function handleList(index, type)
    {
        const copyArr = [...itemSelected];

        if(type == "Add")
            {
                copyArr[index] = true;
                setItemSelected(copyArr);
            }
            else
            {
                copyArr[index] = false;
                setItemSelected(copyArr);
            }
    }

    async function fetchData() {
        try {
            const response = await axios.get("https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/");


            const array = [...response.data.dishes, ...response.data.popularDishes];
            const arr = new Array(array.length).fill(false);
            setItemSelected(arr);
            setDishes(array);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCurrentDate();
        fetchData();
    }, [])

    return (
        <div className='homepage-container'>
            <h2 className='heading'>Select Dishes</h2>

            <div className='calender-info'>
                <div className='black-box'>
                </div>
                <div className='info-box'>
                    <div>
                        <SlCalender cursor="pointer" />
                        <p><b>{date}</b></p>
                    </div>
                    <PiLineVertical cursor="pointer" />
                    <div>
                        <FiClock cursor="pointer" />
                        <p><b>10:30 Pm-12:30 Pm</b></p>
                    </div>
                </div>
                <div className='white-box'>
                </div>
            </div>

            <div className='types'>
                {typeSelected == 1 ? <p className='selected'>Italian</p> : <p onClick={() => setTypeSelected(1)}>Italian</p>}

                {typeSelected == 2 ? <p className='selected'>Indian</p> : <p onClick={() => setTypeSelected(2)}>Indian</p>}

                {typeSelected == 3 ? <p className='selected'>South Indian</p> : <p onClick={() => setTypeSelected(3)}>South Indian</p>}

                {typeSelected == 4 ? <p className='selected'>North Indian</p> : <p onClick={() => setTypeSelected(4)}>North Indian</p>}

                {typeSelected == 5 ? <p className='selected'>Chinese</p> : <p onClick={() => setTypeSelected(5)}>Chinese</p>}

                {typeSelected == 6 ? <p className='selected'>Bengali</p> : <p onClick={() => setTypeSelected(6)}>Bengali</p>}

                {typeSelected == 7 ? <p className='selected'>Gujrati</p> : <p onClick={() => setTypeSelected(7)}>Gujrati</p>}

                {typeSelected == 8 ? <p className='selected'>Pizzas</p> : <p onClick={() => setTypeSelected(8)}>Pizzas</p>}

                {typeSelected == 9 ? <p className='selected'>Pizzas</p> : <p onClick={() => setTypeSelected(9)}>Pizzas</p>}
            </div>

            <div className='popular-dishes-container'>
                <h2>Popular Dishes</h2>
                <div className='popular-dishes'>
                    <div className='dishes'>
                        <img src='https://www.madhuseverydayindian.com/wp-content/uploads/2022/11/veg-biryani-683x1024.jpg' alt='' width="100px" height="100px" />
                        <p>Biryani</p>
                    </div>

                    <div className='dishes'>
                        <img src='https://www.cookwithmanali.com/wp-content/uploads/2023/04/Punjabi-Chole-Masala-676x1024.jpg' alt='' width="100px" height="100px" />
                        <p>Chole</p>
                    </div>

                    <div className='dishes'>
                        <img src='https://www.thespruceeats.com/thmb/T_R22QniykdQ9aPCLKIk-O22Gh4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg' alt='' width="100px" height="100px" />
                        <p>Momos</p>
                    </div>

                    <div className='dishes'>
                        <img src='https://shwetainthekitchen.com/wp-content/uploads/2023/03/vegetable-noodles.jpg' alt='' width="100px" height="100px" />
                        <p>Noodles</p>
                    </div>

                    <div className='dishes'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/1280px-Pizza-3007395.jpg' alt='' width="100px" height="100px" />
                        <p>Pizza</p>
                    </div>

                    <div className='dishes'>
                        <img src='https://www.thespruceeats.com/thmb/h8O3i2WBjHcxOONKAGl7jR4xkNQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SES-your-best-grilled-burger-recipe-7511041-hero-C-c5080fa5f97c4c2b908968527f8a851b.jpg' alt='' width="100px" height="100px" />
                        <p>Burger</p>
                    </div>

                    <div className='dishes'>
                        <img src='https://justbakedcake.com/wp-content/uploads/2020/11/Chicken-patty.jpg' alt='' width="100px" height="100px" />
                        <p>Patties</p>
                    </div>

                    <div className='dishes'>
                        <img src='https://images.marico.in/1200x0/uploads/afgani-chaap-1-3543.jpg' alt='' width="100px" height="100px" />
                        <p>Chaap</p>
                    </div>

                    <div className='dishes'>
                        <img src='https://www.saltandlavender.com/wp-content/uploads/2020/04/tomato-goat-cheese-pasta-2-1200x1752.jpg' alt='' width="100px" height="100px" />
                        <p>Pasta</p>
                    </div>
                </div>
            </div>

            <hr />

            <div className='all-dishes'>
                <div className='filter'>
                    <div>
                        <h2>Recommended</h2>
                        <IoMdArrowDropdown size={30} cursor="pointer" />
                    </div>
                    <button>Menu</button>
                </div>

                {
                    (dishes.length > 0) && dishes.map((items) => (
                        <div className='dishes-container' key={items.id}>
                            <div className='left-info'>
                                <div className='upper-info'>
                                    <h3>{items.name}</h3>
                                    <button>{items.rating} <FaStar /></button>
                                </div>

                                <div className='middle-info'>
                                    {
                                        items.equipments && items.equipments.map((el, i) => (
                                            <div key={i}>
                                                {
                                                    el == "Refrigerator" ? <LuRefrigerator size={20} /> : <LuMicrowave size={20} />
                                                }
                                                <p>{el}</p>
                                            </div>
                                        ))
                                    }

                                    {
                                        items.equipments && <PiLineVertical size={30} color='grey' />
                                    }

                                    <div className='ingredients'>
                                        <p>Ingredients</p>
                                        <p className='view-list' onClick={() => navigate("/ingredient")}>View list <FaArrowRightLong cursor="pointer" /></p>
                                    </div>
                                </div>

                                <div className='bottom-info'>
                                    <p>{items.description}</p>
                                </div>
                            </div>

                            <div className='right-info'>
                                <img src={items.image} alt='' />
                                {
                                    itemSelected[items.id-1] ? <button onClick={() => handleList(items.id-1, "Remove")}>Remove</button> : <button onClick={() => handleList(items.id-1, "Add")}>Add +</button>
                                }
                            </div>
                        </div>
                    ))
                }



            </div>


        </div>
    )
}

export default HomePage;