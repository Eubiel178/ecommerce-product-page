import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index";
import { GlobalStyles } from "./globalStyles/Styles";
import { Contexts } from "./contexts/Index";
import { useState } from "react";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Contexts.Provider value={{ cartItems, setCartItems }}>
      <GlobalStyles />
      <RouterProvider router={router}></RouterProvider>
    </Contexts.Provider>
  );
};

export default App;
