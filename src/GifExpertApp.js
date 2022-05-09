//* Im calling react because i started to work with jsx *//
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

import { GifGrid } from './components/GifGrid';

//* Creating the function and export to use it in other files *//
export const GifExpertApp = () => {
  //* using useState to create an array that i can modified later on jsx *//

  const [categories, setCategories] = useState(['One Punch']);

  //* creating function with a const to run the set of useState with this im able to add more to the array and using the `...` im taking the whole array to the new one *//

  //* adding this return im adding my html as well NOTE: start with <> </> and then write the HTML inside *//

  return (
    <>
      <h2> Gif-Expert-App </h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map(category => (
          <GifGrid
            key={category}
            category={category}
          />
        ))}
      </ol>
    </>
  );
};
