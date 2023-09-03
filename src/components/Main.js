import React, { useState } from 'react';
import DATA from '../data/data.json';

const Main = () => {

  // kategorileri bir diziye al
  const categories = Array.from(new Set(DATA.map(item => item.category)));

  // Aktif kategoriye ait verileri saklamak için bir state kullan
  const [activeCategory, setActiveCategory] = useState('');

  // kategoriye tıklandığında aktif kategoriyi günceller
  const handleCategoryClick = (category) => {
    setActiveCategory(category)
  };

  return (
    <main>
      <div>
        <div>
          <h2>Kategoriler</h2>
          <ul>
            {categories.map((category, index) => (
              <li key={index} onClick={() => handleCategoryClick(category)}>
                <button>
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Linkler</h2>
          <ul>
            {DATA
              .filter((item) => item.category === activeCategory)
              .map((item) => (
                <li key={item.id}>
                  <a href={item.link} target='blank' rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </main>
  )
}

export default Main