import React, { useState } from "react";
import { Navbar } from "./Navbar/Navbar";
import { Banner } from "./Banner/Banner";
import { Menu } from "./Menu/Menu";
import { FoodDialog } from "./FoodDialog/FoodDialog";
import { GlobalStyle } from "./Styles/GlobalStyle";
import { Order } from "./Order/Order";
import { useOpenFood } from "./Hooks/useOpenFood";
import { useOrders } from "./Hooks/useOrders";
import { useTitle } from "./Hooks/useTitle";
import {useAuthentication} from './Hooks/useAuthentication'
import { OrderDialog } from './Order/OrderDialog'
import { UserOrderDialog } from './Hooks/userOrderDialog'


function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  const auth = useAuthentication()
const ordenDialog = UserOrderDialog()

  useTitle({ ...openFood, ...orders });

  return (
    <>
      <GlobalStyle />
      <OrderDialog {...ordenDialog} {...orders} />
      <FoodDialog {...openFood} {...orders} />
      <Navbar {...auth} />
      <Order {...orders} {...openFood} {...auth} {...ordenDialog}/>
      <Banner />
      <Menu {...openFood} />
    </>
  );
}

export default App;

//  © created by react.school
