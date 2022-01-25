import { View, ImageBackground, TouchableOpacity } from "react-native";
import { Text } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

type Props = {
  title: string;
  image: string;
  season: string;
};

const SeasonalCard = ({ title, image, season }: Props) => {
  return (
    <TouchableOpacity style={{ marginRight: 15 }}>
      <ImageBackground
        imageStyle={{ borderRadius: 10 }}
        style={{ width: 150, height: 200 }}
        source={{ uri: image }}
      >
        <LinearGradient
          colors={["rgba(0, 0, 0, .2)", "rgba(0, 0, 0, .9)"]}
          style={{
            position: "absolute",
            width: "100%",
            height: 60,
            bottom: 0,
          }}
        />
        <View
          style={{
            position: "absolute",
            bottom: 10,
            paddingHorizontal: 7,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderRadius: 5,
              width: 5,
              height: 40,
              backgroundColor: "#564DA2",
            }}
          />
          <View style={{ paddingLeft: 8 }}>
            <Text
              color="#fff"
              fontSize="11.5"
              fontFamily="mont-bold"
              numberOfLines={1}
            >
              {title}
            </Text>
            <View
              style={{
                backgroundColor: "rgba(0, 0, 0, .8)",
                borderRadius: 8,
                alignSelf: "flex-start",
                paddingHorizontal: 5,
                paddingVertical: 3,
                justifyContent: "center",
              }}
            >
              <Text
                color="#fff"
                fontSize="10"
                fontFamily="mont-bold"
                textTransform="capitalize"
                textAlign="center"
              >
                {season}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default SeasonalCard;
