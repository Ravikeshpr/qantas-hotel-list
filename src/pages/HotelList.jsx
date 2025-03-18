import React from "react";
import { DefaultLayout } from "../layout";
import HotelListHead from "../components/HotelListHead";
import HotelListBody from "../components/HotelListBody";

function HotelList() {
    return (
        <DefaultLayout>
            <HotelListHead />
            <HotelListBody />
        </DefaultLayout>
    );
}

export default HotelList;
