import React from "react";
import { ScrollView } from "react-native";
import SaleSection from "./SaleSelection";
import ImageRow from "./ImageRow";
import Heading from "./Heading";
import SearchBox from "./SearchBox";
import FreshArrival from "./FreshArrival";
import ArrivalList from "./ArrivalList";
import BelowSale from "./BelowSale";
import TopRated from "./TopRated";
import RatedList from "./RatedList";
import SignUp from "./SignUp";

const ShopComp = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Heading />
      <SearchBox />
      <SaleSection />
      <ImageRow />
      <FreshArrival />
      <ArrivalList />
      <BelowSale />
      <TopRated />
      <RatedList />
      <SignUp />
    </ScrollView>
  );
};

export default ShopComp;
