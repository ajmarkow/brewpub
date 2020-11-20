import React from 'react';
import Keg from './Keg';

const listOfBeers = [
  {
    name:'lager',
    brand:'deschutes',
    price: '$100.00',
    abv: '4.5%'
  },
  {
    name:'IPA',
    brand:'deschutes',
    price: '$10.00',
    abv: '7.5%'

  },
  {
    name:'Double IPA',
    brand:'deschutes',
    price: '$1.00',
    abv: '9.5%'
  }
];
function KegList() {
  return(
    <React.Fragment>
      {listOfBeers.map((keg, index) => 
      <Keg name={keg.name}
          brand = {keg.brand}
          price = {keg.price}
          abv = {keg.abv}
          key ={index}/>
      )}
    </React.Fragment>
  );
}

export default KegList;