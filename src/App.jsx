import { useRoutes  } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import routers from "./routes.jsx";

export const App = () => {
  let element = useRoutes(routers);


  return (
    <>
      {element}
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
    </>
  )
}

