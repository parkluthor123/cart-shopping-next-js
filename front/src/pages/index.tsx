import type { NextPage } from 'next'
import CardProduct from '../components/CardProduct'
import React, { useContext } from 'react'
import { CartContext } from '../providers/ShopProvider'

const Home: NextPage = () => {

  const { products } = useContext(CartContext);

  return (
    <>
      <div className="container">
          {Object.values(products).map((el: any) => (
              <React.Fragment key={el.id}>
                <CardProduct 
                  ProductName={el.name}
                  Description={el.description}
                  Image={el.image}
                  Price={el.price}
                  ProductId={el.id}
                  Item={el}
                />
              </React.Fragment>
          ))}
      </div>
    </>
  )
}

export default Home
