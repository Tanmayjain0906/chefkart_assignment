import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";
import "./style.css"
import { FaStar } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import spices from "../../assets/pngegg.png";
import { IoMdArrowDropdown } from "react-icons/io";
import refrigerator from "../../assets/refrigerator.png";
import microwave from "../../assets/microwave.png";
import stove from "../../assets/stove.png";
import { useNavigate } from 'react-router-dom';

function IngredientPage() {

  const [data, setData] = useState(null);
  const navigate = useNavigate();

  async function fetchData() {
    try {
      const response = await axios.get("https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1");

      console.log(response.data);
      setData(response.data);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
      <div className='arrow'>
        <MdKeyboardArrowLeft size={30} cursor="pointer" onClick={() => navigate("/")}/>
      </div>

      {
        data !== null && <div className='ingredient-container'>
          <div className='all-info'>
            <div className='left-area'>
              <div className='top'>
                <h1>{data.name}</h1>
                <button>4.2<FaStar /></button>
              </div>

              <p>Mughlai Masala is a style of cookery developed in the Indian Subcontinent by the imperial kitchens of the Mughal Empire.</p>

              <div className='bottom'>
                <FiClock size={30} />
                <h3>{data.timeToPrepare}</h3>
              </div>
            </div>

            <img src={spices} alt='' />

          </div>

          <hr />

          <div className='people'>
            <h1>Mashala Muglai</h1>
            <p>For 2 People</p>
          </div>

          <hr />

          <div className='spices'>
            <div className='vegetables-container'>
              <div className='heading'>
                <h2>vegetables ({data.ingredients.vegetables.length}) </h2>
                <IoMdArrowDropdown size={30} />
              </div>
              <div className='ing-info'>
                {
                  data.ingredients.vegetables && data.ingredients.vegetables.map((item, i) => (
                    <div key={i}>
                      <p>{item.name}</p>
                      {
                        item.quantity.includes("Kg") ? <p>{item.quantity}</p> : <p>{item.quantity} Pc</p>
                      }

                    </div>
                  ))
                }
              </div>
            </div>

            <div className='spices-container'>
              <div className='heading'>
                <h2>Spices ({data.ingredients.spices.length}) </h2>
                <IoMdArrowDropdown size={30} />
              </div>
              <div className='ing-info'>
                {
                  data.ingredients.spices && data.ingredients.spices.map((item, i) => (
                    <div key={i}>
                      <p>{item.name}</p>
                      <p>{item.quantity}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

          <div className='appliances'>
            <h1>Appliances</h1>
            <div className='appliance'>
              {
                data.ingredients.appliances && data.ingredients.appliances.map((item, i) => (
                  <div key={i}>
                    {
                      item.name == "Refrigerator" && <img src={refrigerator} alt='' width="100px" />
                    }

                    {
                      item.name == "Microwave" && <img src={microwave} alt='' width="100px" />
                    }

                    {
                      item.name == "Stove" && <img src={stove} alt='' width="100px" />
                    }

                    <p>{item.name}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      }
    </div>

  )
}

export default IngredientPage