import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";

const ImageRow = () => {
  const imageItems = [
    {
      url: "https://s3-alpha-sig.figma.com/img/2616/1cae/03443c2f7e3cd78f3043758bda57d7cb?Expires=1699228800&Signature=ZSOxKUDFHjPhgygoFlibtQ71hPwyTMxrVbhdYDtajgYvgCT~bP2Dv4lHzUcQ5~okk4Z5F31kLD6qdstIvOtqMGF~Zoj34Lm6-zR~LYpZOs-rl~~4yUUz9XO~1SqBJZXhZN0JJq9jnHHJMhpToIxAot~Uvg6X36g1WgDt8zOvtWvz5qhbH9Qkq0FqOeN4M6QvIAc18yZD2qJPhObNV0ZsgSU2FoycKc1vlO08B4dLRlSw8d~JDJqqUzO7mtcaf7I327PEsvc5FTBPITW2Hv8PHdRM6JzV~nGRAhpyZi2c6i2-0i05W8ouY4JnNebncN1Uebfy8DJQE4VIP~SSeYWncw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      text: "Beauty",
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/de98/3fb3/6c1b3204f1fc5560dba5d184cf1d2125?Expires=1699228800&Signature=TZaDRpADsZHTFkPWFzUPwToL6BljMxdraCZa2umZxRWlKy4jAwQcHnaZCeMf-ZO-SYCDBws~rcK~h~5RSewMOf6Bl50~y042NB0cc7Xw4jXr5IJqSm-U67LDqJsZ0en-LMZtSygH~ATf3xiCEYbBPKyaFhNMVmflkvwG9lMOUHbJhBk9QIe0WwO00rikZMzyso6z2lvx9H2XAvmJD7DDMpBV8xguXkgG6w4WPFnj8EWvwlQsLvFTCzs-WfuKaB6X3TpZAtCFCNv7p8jjUJNZQQZrsStDzwhU9uI~DPhrv9cpgaIfAkaSed9ciOCeTswv2DIN-ms6TMME80lE5HgMkw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      text: "Footware",
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/5907/a726/a465afee67a13ddf85452689b493ad45?Expires=1699228800&Signature=XuZuUy-vEkOC3DuYQogzbDpB2kNP-OUxCttMMtSUjHrlVPXLqmJNGjnwezo0tKC7Q8KExW5G~SLw8ILBrYKTLfN0EtZEKYVCCKJLcLYqYV7cdA2xa3fn7LpYwvDAXeDTunFgE-kCdAClXNgOogDLONgv4xkDAAL8uygvbdAiwZB05mRJq8Dot4rIZ8sEfUb19zFotxWFXMXN9hned6EvAoxGepexi7KruwBD3YUZnjMXVgjthJad8ckGI4a6b~VErOIe4jvERLik6~tuiFVanMpWF7wgykdLcXKnt~4smY9eNyl2mtBZx1TiEecO9~dXPpRZKwCTAeG3k1lhZit5rw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      text: "Jewellery",
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/1ecc/4e07/0e28ea096d17ad067b1cef57874e8793?Expires=1699228800&Signature=kRf2SMCHw4QjuNMEVrRMYr87fEBnv75DdZjge3RZygiRGYz05ZjnknA86qOqRI~TGhd8kSt6BqSIwXZvAbT9aqkXxUib2njKOpSvmqyPjswa19~VFo32y2c3NmmFtPqgtjwhOrqkbgeUYKgRFdYlrCIIbGCrlw7xoX6X--yKC1P3f3nCDo94hLq2mtRT0LH1F8756DpGPS3b0nu01~sMYDf-V0fHRO7Sq3ghq8zK0CcRhXRFFGesPyog7-znpMAFQUtnQT4WhjLXTRnFbLcZW1stZ6ILNeOB3cr~ykMpND2pdtc9zssuLKReR9M1NlCMYX9bPl9z2eUJFf701-DhKw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      text: "Mens Wear",
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/f8ec/9dcb/33688be2c28628ac205022b806b83535?Expires=1699228800&Signature=ABNks-K8fAChy4TYj9vhTZK7wJnLZGmxMPNuBikSz9K~eOzkEgNHVYizx7Q7XhvlH0SZhKwKw6tcdc0Z-DYAyyw8dCY5I-QSLJkq10xzbpf6azOSuGRUG9EolC5Xfmr6ZTaUiBKJ1exwEwKYIZVXwB5XD0svqIhzU8KQ2YP3VE689niomTUaxjeexfQhvXoXXQknROWEpjkGicHiK8l7PLJOLr8uf2Gzw0lAmzKHCeWKOocNbWSGuAzIdg-Cy1z~YU2fuBWP6GLUv~ok5jIeIThrZMaPxuat7xVOrvOMATSFSZovuFO81CeNAMLybmK8raQqvDZ7drBFnCVcpPEA3Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      text: "Women wear",
    },
  ];
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.imageRow}>
        {imageItems.map((item, index) => (
          <View key={index}>
            <TouchableOpacity
              onPress={() => console.log("Navigation of row")}
              style={styles.imageContainer}
            >
              <Image source={{ uri: item.url }} style={styles.image} />
              <Text style={styles.imageText}>{item.text}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
  },
  imageRow: {
    flexDirection: "row",
    paddingTop: 28,
    marginLeft: 15,
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 72,
    marginRight: 13, // Add spacing between images
  },
  imageText: {
    textAlign: "center",
    fontSize: 14,
    marginTop: 5,
  },
});

export default ImageRow;
