import React from "react";
import { ScrollView, View } from "react-native";
import SaleSection from "../Components/ShopHome/SaleSelection";
import ImageRow from "../Components/ShopHome/ImageRow";
import Heading from "../Components/ShopHome/Heading";
import SearchBox from "../Components/ShopHome/SearchBox";
import FreshArrival from "../Components/ShopHome/FreshArrival";
import ArrivalList from "../Components/ShopHome/ArrivalList";
import BelowSale from "../Components/ShopHome/BelowSale";
import TopRated from "../Components/ShopHome/TopRated";
import RatedList from "../Components/ShopHome/RatedList";
import SignUp from "../Components/ShopHome/SignUp";
import SwiperComp from "../Components/ShopHome/Swiper";
// import SliderComponent from "../Components/ShopHome/SliderComponent";

const ShopComp = ({ navigation }) => {
  return (
    <View>
      <Heading dataIndex={0} />
      <SearchBox navigation={navigation} />
      {/* <SaleSection /> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <SwiperComp />
        <ImageRow />
        <FreshArrival />
        <ArrivalList navigation={navigation} />
        <BelowSale />
        <TopRated />
        <RatedList navigation={navigation} />
        <SignUp />
      </ScrollView>
    </View>
  );
};

export default ShopComp;
