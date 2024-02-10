
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css';

// Define the App component
const App = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState('One time purchase');
  const [selectedFrequency, setSelectedFrequency] = useState(1);
  const [selectedCard, setSelectedCard] = useState('description');
  
  const imageUrls = [
    "https://www.graza.co/cdn/shop/files/graza-pdp-duo-header-3_2x_caa7f912-38b3-4e36-b928-ed6c036abfc7_720x.jpg?v=1698551972",
    "https://www.graza.co/cdn/shop/products/graza-pdp-sizzle-header-3_2x_98f6ef49-281f-4095-b8bb-3045391401fe_720x.jpg?v=1698551972",
    "https://www.graza.co/cdn/shop/products/graza-pdp-drizzle-header-3_2x_569477b7-acf0-4950-93a4-c263d6893aa4_720x.jpg?v=1698551972",
    "https://www.graza.co/cdn/shop/products/graza-home-drizzle-in-use_2x_91b89a03-a404-434d-ae48-fb97e37406ab_720x.jpg?v=1698551972",
    "https://www.graza.co/cdn/shop/products/graza-pdp-duo-header-2_2x_7673c33b-ecf4-43d9-b053-4261454c4f3c_720x.jpg?v=1698551972",
    "https://www.graza.co/cdn/shop/products/graza-home-sizzle-in-usecopy_2x_47ab5af6-0732-4835-96ba-9853798e5b9d_720x.jpg?v=1698551972",
  ];
  const getDiscountInfo = (quantity) => {
    switch (quantity) {
      case 1:
        return '10% off';
      case 2:
        return 'Free shipping + 14% off';
      case 3:
        return 'Free shipping + 15% off';
      case 6:
        return 'Free shipping + 17% off';
      default:
        return '';
    }
  };
  const calculatePrice = () => {
    let basePrice;

    switch (selectedQuantity) {
      case 1:
        basePrice = 33;
        break;
      case 2:
        basePrice = 69;
        break;
      case 3:
        basePrice = 100;
        break;
      case 6:
        basePrice = 200;
        break;
      default:
        basePrice = 0;
    }

    // If it's a one-time purchase, increase the price by 10%
    if (selectedOption === 'One time purchase') {
      return basePrice * 1.1;
    }

    return basePrice;
  };

  // Event handler functions
  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleQuantityClick = (quantity) => {
    setSelectedQuantity(quantity);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleFrequencyChange = (event) => {
    setSelectedFrequency(event.target.value);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  // Return JSX structure
  return (
    <div className="app-container">
      <div className="left-section">
        <Carousel showArrows={false} showThumbs={false} selectedItem={selectedImageIndex}>
          {imageUrls.map((url, index) => (
            <div key={index}>
              <img src={url} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </Carousel>
        <div className="image-icons">
          {imageUrls.map((url, index) => (
            <div
              key={index}
              className={`image-icon ${selectedImageIndex === index ? 'selected' : ''}`}
              onClick={() => handleImageClick(index)}
              style={{ backgroundImage: `url(${url})` }}
            ></div>
          ))}
        </div>
      </div>

      <div className="right-section">
        <h2>Drizzle and Sizzle</h2>
        <div className="card">
          <h3>Select Quantity</h3>
          <div className="quantity-options">
            {[1, 2, 3, 6].map((quantity) => (
              <div
                key={quantity}
                className={`quantity-box ${selectedQuantity === quantity ? 'selected' : ''}`}
                onClick={() => handleQuantityClick(quantity)}
              >
                {quantity}
                <br />
                <span className="discount-info">{getDiscountInfo(quantity)}</span>
              </div>
            ))}
          </div>
          <div className="bullet-options">
            <div
              className={`bullet-option ${selectedOption === 'One time purchase' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('One time purchase')}
            >
              One time purchase
            </div>
            <div
              className={`bullet-option ${selectedOption === 'Subscribe and save' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('Subscribe and save')}
            >
              Subscribe and save
            </div>
          </div>
          <div className="frequency-dropdown">
            <select value={selectedFrequency} onChange={handleFrequencyChange}>
              <option value={1}>Once in 1 month</option>
              <option value={2}>Once in 2 months</option>
              <option value={3}>Once in 3 months</option>
            </select>
            </div>
          <button className="subscribe-button">Subscribe Price: ${calculatePrice().toFixed(2)}</button>
        </div>

        <div className="card">
          <div className="options">
            {['Description', 'Harvest', 'Use Case'].map((option) => (
              <div
                key={option}
                className={`card-option ${selectedCard === option ? 'selected' : ''}`}
                onClick={() => handleCardClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
          <div className="content">
            {}
            {selectedCard === 'Description' && <p><b>Description content</b> - Lorem ipsum dolor sit amet. Non nihil nesciunt nam reprehenderit perferendis eum velit suscipit vel praesentium adipisci aut cupiditate quis quo aspernatur cupiditate. Aut similique nihil vel enim perspiciatis quo dolore unde ut ratione voluptatem. Qui atque atque in odit quos aut dolor rerum nam esse vero rem voluptatem aspernatur est vero magnam.</p>}
            {selectedCard === 'Harvest' && <p><b>Harvest content </b>- Lorem ipsum dolor sit amet. Non nihil nesciunt nam reprehenderit perferendis eum velit suscipit vel praesentium adipisci aut cupiditate quis quo aspernatur cupiditate. Aut similique nihil vel enim perspiciatis quo dolore unde ut ratione voluptatem. Qui atque atque in odit quos aut dolor rerum nam esse vero rem voluptatem aspernatur est vero magnam.</p>}
            {selectedCard === 'Use Case' && <p><b>Use Case content</b> - Lorem ipsum dolor sit amet. Non nihil nesciunt nam reprehenderit perferendis eum velit suscipit vel praesentium adipisci aut cupiditate quis quo aspernatur cupiditate. Aut similique nihil vel enim perspiciatis quo dolore unde ut ratione voluptatem. Qui atque atque in odit quos aut dolor rerum nam esse vero rem voluptatem aspernatur est vero magnam.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;