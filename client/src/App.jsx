import { Route, Routes } from "react-router-dom";
import { Button } from "./components/ui/button";
import AppLayout from "./layout/AppLayout";
import { SignupCard } from "./components/SignupCard";
import { LoginCard } from "./components/LoginCard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route
          index
          element={
            <>
              <div className="flex flex-col mx-auto my-auto justify-center items-center w-full gap-10">
                {/* Tailwind usage example */}
                <h1 className="text-3xl text-blue-800">Sample Heading</h1>
                {/* shadcn component usage example */}
                <Button className="text-base">Click here</Button>
                {/* <LandingPage/> */}
              </div>
            </>
          }
        />
        {/* Other routes which need the layout */}
        <Route path="/signup" element={<SignupCard />} />
        <Route path="/login" element={<LoginCard />} />
      </Route>

      {/* Add the routes which do not need the layout */}
    </Routes>
  );
}

export default App;
