import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  FlatList,
  Pressable,
  View,
} from "react-native";
import { React, useState, useEffect } from "react";
import Heading from "../Components/ShopHome/Heading";
import { TouchableOpacity } from "react-native";

const Productinfo = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedTopic, setSelectedTopic] = useState("Topic1");

  const images = [
    {
      uri: "https://s3-alpha-sig.figma.com/img/0b4f/076f/9049e286962efc9a50cc7aac1638676c?Expires=1699833600&Signature=loCtnBblCMQ-VAa-SokaXXnG1JSq~bjgcbGc3t-WYqp1Hg7lGgbrExn4mBi5ITvGFO1xQfxpTFohqSCoai6e2~uVYPftnSh8ensdNR5BIqzdZk7uhTjS37FeU~-S8R59Eo~7XSwM0f-sLC4SdYauWDYFQtu3doyUgkxbzFUrzCe5YRo63WZ5VTwjUJrlPNmCT9nCprcM-6NFTbVl2lzKDWSLcFkpdnt~vvKIrAkZOT~04SL8AfSMpPeAVyL3NoDRuPdevGrFxEB2kdMnecQ~GoIKQgEMVNV8z6F5kotrU~9rO10BcEnZvSGlnyQLsH~jQclZnyM2tNo6Hg0Jx73LyQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      uri: "https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg",
    },
    {
      uri: "https://s3-alpha-sig.figma.com/img/0b4f/076f/9049e286962efc9a50cc7aac1638676c?Expires=1699833600&Signature=loCtnBblCMQ-VAa-SokaXXnG1JSq~bjgcbGc3t-WYqp1Hg7lGgbrExn4mBi5ITvGFO1xQfxpTFohqSCoai6e2~uVYPftnSh8ensdNR5BIqzdZk7uhTjS37FeU~-S8R59Eo~7XSwM0f-sLC4SdYauWDYFQtu3doyUgkxbzFUrzCe5YRo63WZ5VTwjUJrlPNmCT9nCprcM-6NFTbVl2lzKDWSLcFkpdnt~vvKIrAkZOT~04SL8AfSMpPeAVyL3NoDRuPdevGrFxEB2kdMnecQ~GoIKQgEMVNV8z6F5kotrU~9rO10BcEnZvSGlnyQLsH~jQclZnyM2tNo6Hg0Jx73LyQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      uri: "https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg",
    },
    {
      uri: "https://s3-alpha-sig.figma.com/img/0b4f/076f/9049e286962efc9a50cc7aac1638676c?Expires=1699833600&Signature=loCtnBblCMQ-VAa-SokaXXnG1JSq~bjgcbGc3t-WYqp1Hg7lGgbrExn4mBi5ITvGFO1xQfxpTFohqSCoai6e2~uVYPftnSh8ensdNR5BIqzdZk7uhTjS37FeU~-S8R59Eo~7XSwM0f-sLC4SdYauWDYFQtu3doyUgkxbzFUrzCe5YRo63WZ5VTwjUJrlPNmCT9nCprcM-6NFTbVl2lzKDWSLcFkpdnt~vvKIrAkZOT~04SL8AfSMpPeAVyL3NoDRuPdevGrFxEB2kdMnecQ~GoIKQgEMVNV8z6F5kotrU~9rO10BcEnZvSGlnyQLsH~jQclZnyM2tNo6Hg0Jx73LyQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      uri: "https://s3-alpha-sig.figma.com/img/0b4f/076f/9049e286962efc9a50cc7aac1638676c?Expires=1699833600&Signature=loCtnBblCMQ-VAa-SokaXXnG1JSq~bjgcbGc3t-WYqp1Hg7lGgbrExn4mBi5ITvGFO1xQfxpTFohqSCoai6e2~uVYPftnSh8ensdNR5BIqzdZk7uhTjS37FeU~-S8R59Eo~7XSwM0f-sLC4SdYauWDYFQtu3doyUgkxbzFUrzCe5YRo63WZ5VTwjUJrlPNmCT9nCprcM-6NFTbVl2lzKDWSLcFkpdnt~vvKIrAkZOT~04SL8AfSMpPeAVyL3NoDRuPdevGrFxEB2kdMnecQ~GoIKQgEMVNV8z6F5kotrU~9rO10BcEnZvSGlnyQLsH~jQclZnyM2tNo6Hg0Jx73LyQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
  ];

  const relatedProdutImg = [
    {
      uri: "https://s3-alpha-sig.figma.com/img/496b/96c0/14685ed73e60c7ccd25d69c369d9cc0f?Expires=1700438400&Signature=ZT0txosylV40wWRRj1PbSb-B-BqrnhGZJjviMlI4Latp~2oXfCFs5alupmi5-4AQChZc3n0ncrJPD0mj0BB2ARo8A97gIuab~076PZozS1vO~uYoxHaeP1CPzQBDcRKhFo50cEHAyTm8kscCOYNnf9UvogMt4GSiv0A3Ie4Cqq8r3SCxY2gSWsbkItvOaxzXHHH-sEPftSWWTuzM1xay6RyS7mtJ1sVpxSmUjAHas1LB2CW0LasTzTUUdqtljUpABJDbsZ2o6F4s9K1pzLeKrTTyJ7xJUCXw3-89Wh1P-9IyFdI2ZWx35HBtKIlqPLHSWhDizrN-OtFU7H8h0iIv3Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Hand Bag",
      productName: "Groove Bag",
      price: "$299.00",
    },
    {
      uri: "https://s3-alpha-sig.figma.com/img/517d/dcd9/c4c13ba5f4ab41e4465e0fdbcb4e6a72?Expires=1700438400&Signature=nsRIGwZw6cNLzFimRvfUNPjHNrJ4y4QYW1jq6L7tpcKI3wWMO0452lWUuqhDsVNw7uwL3M4N63ff0eYQ3S6QiIRBYdRxn9AdSBIlpDt3PzaSVc7q0Znm5VgaPf~GV9~4BNrfNudXBgz5OCNrd72eugoCH83Gye2JXlmQvE3ZPW6tEcDM6AK-ajbNoMshcymdHvVM-6xT2s4jxIStuzWOkI7hWpQWmfXc-kpLvOZzMKAcnEgH5EOc4W-0xHGQmAJutYwHTCdZ~iunM6yeOC1rvF-5U1D3T-UfQW5290P-dSnhM-s997QbbuGsufpx7N6KmxZVZR9kZk15rVW7UQGoIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Cap",
      productName: "Stylish Balck Cap",
      price: "$299.00",
    },
    {
      uri: "https://s3-alpha-sig.figma.com/img/496b/96c0/14685ed73e60c7ccd25d69c369d9cc0f?Expires=1700438400&Signature=ZT0txosylV40wWRRj1PbSb-B-BqrnhGZJjviMlI4Latp~2oXfCFs5alupmi5-4AQChZc3n0ncrJPD0mj0BB2ARo8A97gIuab~076PZozS1vO~uYoxHaeP1CPzQBDcRKhFo50cEHAyTm8kscCOYNnf9UvogMt4GSiv0A3Ie4Cqq8r3SCxY2gSWsbkItvOaxzXHHH-sEPftSWWTuzM1xay6RyS7mtJ1sVpxSmUjAHas1LB2CW0LasTzTUUdqtljUpABJDbsZ2o6F4s9K1pzLeKrTTyJ7xJUCXw3-89Wh1P-9IyFdI2ZWx35HBtKIlqPLHSWhDizrN-OtFU7H8h0iIv3Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Hand Bag",
      productName: "Groove Bag",
      price: "$299.00",
    },
  ];

  const size = [
    { id: 1, size: 34 },
    { id: 2, size: 35 },
    { id: 3, size: 36 },
    { id: 4, size: 37 },
    { id: 5, size: 38 },
    { id: 6, size: 39 },
    { id: 7, size: 40 },
    { id: 9, size: 41 },
  ];

  const color = [
    {
      id: 1,
      source: require("../icons/image6.png"),
    },
    {
      id: 2,
      source: require("../icons/image7.png"),
    },
    {
      id: 3,
      source: require("../icons/image8.png"),
    },
    {
      id: 4,
      source: require("../icons/image9.png"),
    },
    {
      id: 5,
      source: require("../icons/image10.png"),
    },
  ];

  const topicContent = {
    Topic1:
      "We have to go back in time a little to properly frame this story. Back to 2004, which was the last time Wikipedia’s interface changed significantly. Mark Zuckerberg had just launched TheFacebook, Gmail had just come out, and there were no smartphones (the first iPhone would come out 3 years later). Also CSS was much more limited, so websites were more simple. Two popular computers were Dell’s Dimension 2400 desktop, and their Latitude D505 laptop. For almost everyone using it, Wikipedia looked like this. \n \n In 2010, a bunch of changes were made to increase the usability of Wikipedia for new editors (notes), and in 2015 the editing experience was again significantly improved with the introduction of the Visual Editor. However, the general layout, and specifically the reading experience, stayed largely the same between the 2004 update, and 2019, where this story begins. ",
    Topic2:
      "Mark Zuckerberg had just launched TheFacebook, Gmail had just come out, and there were no smartphones (the first iPhone would come out 3 years later). Also CSS was much more limited, so websites were more simple. Two popular computers were Dell’s Dimension 2400 desktop, and their Latitude D505 laptop. For almost everyone using it, Wikipedia looked like this",
    Topic3:
      "In 2010, a bunch of changes were made to increase the usability of Wikipedia for new editors (notes), and in 2015 the editing experience was again significantly improved with the introduction of the Visual Editor",
  };

  const switTopic = (topic) => {
    setSelectedTopic(topic);
  };

  useEffect(() => {
    setSelectedImage(0);
  }, []);

  const selectImage = (index) => {
    setSelectedImage(index);
  };

  const renderItem = ({ item, index }) => {
    return (
      <Pressable onPress={() => selectImage(index)}>
        <View style={styles.smallImageView}>
          <Image source={item} style={styles.smallImage} />
        </View>
      </Pressable>
    );
  };

  const renderRelatedItem = ({ item, index }) => {
    return (
      <Pressable onPress={() => selectImage(index)}>
        <View style={styles.relatedView}>
          <Image source={item} style={styles.relatedImage} />
        </View>
        <Text style={styles.titleTxt}>{item.title}</Text>
        <Text style={styles.productNameTxt}>{item.productName}</Text>
        <Text style={styles.priceTxt}>{item.price}</Text>
      </Pressable>
    );
  };

  return (
    <View>
      <Heading dataIndex={0} />
      <View style={[styles.containerBase, { margin: 16 }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.mainImageView}>
            <Image source={images[selectedImage]} style={styles.mainImage} />
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={images}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />

          <Text style={styles.productName}>
            Galliano Donna Women's Olsen Gem
          </Text>
          <View style={styles.productPrice}>
            <Text style={styles.originalPrice}>$399</Text>
            <View style={styles.line} />
            <Text style={styles.discountPrice}>$299</Text>
          </View>
          <Text style={styles.productDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rem
            nobis quasi numquam quis tempore obcaecati unde, praesentium beatae
            vel, sequi animi alias voluptatum. Hic natus consequatur nisi,
            veniam cupiditate assumenda non mollitia nostrum.
          </Text>
          <Text style={styles.sizeText}>Size</Text>
          <View style={styles.sizeChart}>
            {size.map((item) => (
              <Pressable key={item.id} style={styles.productSize}>
                <Text style={styles.size}>{item.size}</Text>
              </Pressable>
            ))}
            <Pressable>
              <Text style={styles.chart}>Size Chart</Text>
            </Pressable>
          </View>
          <Text style={styles.colorTxt}>Color</Text>
          <View style={styles.colorContainer}>
            {color.map((image, index) => (
              <Pressable key={image.id}>
                <View style={styles.colorView}>
                  <Image source={image.source} style={styles.colorImg} />
                </View>
              </Pressable>
            ))}
          </View>
          <View style={styles.cartBuy}>
            <TouchableOpacity onPress={() => navigation.navigate("YourCart")}>
              <Text style={styles.cartTxt}>Add to Cart</Text>
            </TouchableOpacity>
            <Text style={styles.buyTxt}>Buy Now</Text>
          </View>

          <View>
            {/* <Text>Selected Topic: {selectedTopic}</Text> */}
            <View style={styles.detailsView}>
              <Pressable onPress={() => switTopic("Topic1")}>
                <Text style={styles.topic}>Description</Text>
              </Pressable>
              <Pressable onPress={() => switTopic("Topic2")}>
                <Text style={styles.topic}>Additonal Information</Text>
              </Pressable>
              <Pressable onPress={() => switTopic("Topic3")}>
                <Text style={styles.topic}>Review(20)</Text>
              </Pressable>
            </View>
            <View styles={styles.contentView}>
              <Text style={styles.content}>{topicContent[selectedTopic]}</Text>
            </View>
          </View>
          <View styles={styles.relatedView}>
            <Text style={styles.relatedTxt}>Related Products</Text>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={relatedProdutImg}
            renderItem={renderRelatedItem}
            keyExtractor={(item, index) => index.toString()}
          />
          <View styles={styles.relatedView}>
            <Text style={styles.relatedTxt}>You Might Also Like</Text>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={relatedProdutImg}
            renderItem={renderRelatedItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Productinfo;

const styles = StyleSheet.create({
  containerBase: {
    justifyContent: "center",
    alignItems: "center",
  },
  mainImageView: {
    height: 330,
    width: 361,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    marginRight: 14,
    backgroundColor: "#ebebee",
  },

  mainImage: {
    height: 246,
    width: 246,
    // marginHorizontal: 42,
    marginRight: 38,
    borderRadius: 3,
  },

  smallImageView: {
    height: 75,
    width: 75,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    marginTop: 16,
    backgroundColor: "#ebebee",
  },

  smallImage: {
    height: 52,
    width: 52,
  },

  productName: {
    fontSize: 28,
    // fontFamily: 15,
    // marginTop: 10,
    paddingRight: 16,
    marginBottom: 14,
  },

  productPrice: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 30,
  },
  originalPrice: {
    textDecorationLine: "line-through",
    fontSize: 16,
    // fontFamily: theme.fonts.HCLTechRoobert.regular,
  },

  line: {
    backgroundColor: "gray",
  },
  discountPrice: {
    fontSize: 24,
    // fontFamily: theme.fonts.HCLTechRoobert.semiBold,
    marginLeft: 16,
  },
  productDescription: {
    fontSize: 16,
    paddingRight: 45,

    // fontFamily: theme.fonts.HCLTechRoobert.light,
  },
  sizeText: {
    fontSize: 14,
    // fontFamily: theme.fonts.HCLTechRoobert.regular,
    marginTop: 55,
  },

  sizeChart: {
    width: 357,
    flexWrap: "wrap",
    flexDirection: "row",
  },

  productSize: {
    height: 45,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    marginRight: 10,
    marginTop: 13,
  },

  size: {
    fontSize: 16,

    // fontFamily: theme.fonts.HCLTechRoobert.regular,
  },
  colorContainer: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  colorView: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 3,
    marginHorizontal: 5,
    marginBottom: 10,
  },
  colorImg: {
    width: 45,
    height: 46,
    margin: 10,
  },
  colorTxt: {
    paddingTop: 39,
  },
  cartBuy: {
    flexDirection: "row",
    margin: 9,
  },
  cartTxt: {
    borderWidth: 1,
    borderRadius: 3,
    paddingLeft: 44,
    paddingVertical: 20,
    paddingRight: 39,
    fontSize: 14,
    marginRight: 9,
  },
  buyTxt: {
    color: "#fff",
    backgroundColor: "#343539",
    borderWidth: 1,
    borderRadius: 3,
    paddingLeft: 47,
    paddingVertical: 20,
    paddingRight: 52,
    fontSize: 14,
  },

  chart: {
    textDecorationLine: "underline",
    marginTop: 26,
    fontSize: 14,
    // fontFamily: theme.fonts.HCLTechRoobert.regular,
  },

  detailsView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 61,
  },

  topic: {
    height: 53,
    width: 108,
    fontSize: 14,
    // fontFamily: theme.fonts.HCLTechRoobert.regular,
    borderWidth: 1,
    marginRight: 4,
    textAlign: "center",
    padding: 17,
  },
  contentView: {},
  content: {
    fontSize: 16,
    // paddingHorizontal: 25,
    // fontFamily: theme.fonts.HCLTechRoobert.light,
    paddingTop: 25,
    paddingRight: 50,
    paddingLeft: 21,
    flexWrap: "nowrap",
  },
  relatedView: {
    marginTop: 41,
  },
  relatedTxt: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 40,
  },
  relatedView: {
    flexDirection: "row",
    // width: 220,
    // height: 253,
    marginTop: 15,
  },
  relatedImage: {
    width: 180,
    height: 193,
    resizeMode: "contain",
    borderRadius: 3,
    backgroundColor: "#ebebee",
    marginRight: 15,
  },
  titleTxt: {
    fontSize: 12,
    marginTop: 14,
  },
  productNameTxt: {
    fontSize: 18,
  },
  priceTxt: {
    fontSize: 12,
    color: "rgb(155, 154, 154)",
  },
});
