import React from "react";
import { HotelList } from "./pages";
import { HotelListContext } from "./context/HotelList";
import { useHotelListContext } from "./hooks/useHotelListContext";
function App() {
    return (
        <div>
            <HotelListContext.Provider value={useHotelListContext()}>
                <HotelList />
            </HotelListContext.Provider>
        </div>
    );
}

export default App;
