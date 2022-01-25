import React from "react";
import { useSelector } from "react-redux";
import { Heading, Text, HStack, VStack } from "native-base";
import { View, Dimensions, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { DetailNavProps } from "../types/types";
import { RootState } from "../store/index";
import * as Haptics from "expo-haptics";
import { LinearGradient } from "expo-linear-gradient";

const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const MangaDetailScreen = ({ navigation, route }: DetailNavProps) => {
  const mangaDetails = {
    details: useSelector(
      (state: RootState) => state.Manga.mangaDetails.details
    ),
    loader: useSelector(
      (state: RootState) => state.Manga.mangaDetails.detailLoader
    ),
  };

  const { manga } = route.params;
  const spacing: number = 23;
  // console.log(mangaDetails.details);

  return (
    <LinearGradient
      colors={["#52376A", "#000", "#000"]}
      style={{
        flex: 1,
        backgroundColor: "transparent",
      }}
    >
      <HStack mb={5} alignItems="center" justifyContent="space-between">
        <VStack
          space={3}
          width={screenWidth * 0.25}
          alignItems="center"
          justifyContent="space-around"
        >
          <AntDesign
            name="left"
            size={30}
            color="#825aa5"
            onPress={() => {
              navigation.goBack();
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
            }}
            style={{
              marginBottom: 20,
            }}
          />
          <VStack alignItems="center">
            <Image
              source={{
                uri: manga?.main_picture?.large,
              }}
              style={{
                height: 60,
                width: 60,
                borderRadius: 50,
              }}
            />
            <Text color="#fff">Author</Text>
          </VStack>
          <VStack alignItems="center">
            <Image
              source={{
                uri: manga?.main_picture?.large,
              }}
              style={{
                height: 60,
                width: 60,
                borderRadius: 50,
              }}
            />
            <Text color="#fff">Author</Text>
          </VStack>
          <VStack alignItems="center">
            <Image
              source={{
                uri: manga?.main_picture?.large,
              }}
              style={{
                height: 60,
                width: 60,
                borderRadius: 50,
              }}
            />
            <Text color="#fff">Author</Text>
          </VStack>
        </VStack>
        <Image
          source={{
            uri: manga?.main_picture?.large,
          }}
          style={{
            height: screenHeight * 0.55,
            width: screenWidth * 0.75,
            borderBottomLeftRadius: 30,
            // borderBottomRightRadius: 30,
            resizeMode: "cover",
            // position: "absolute",
            // top: 0,
          }}
        />
      </HStack>

      <Heading size="xl" color="#CCC" fontFamily={"mont-bold"}>
        {manga.title}
      </Heading>
    </LinearGradient>
  );
};

export default MangaDetailScreen;
