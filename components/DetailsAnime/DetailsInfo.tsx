import React, { useState, useEffect, useRef } from "react";
import { Heading, HStack, Box, Text, VStack } from "native-base";
import {
  View,
  ScrollView,
  useColorScheme,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import moment from "moment";
import * as Haptics from "expo-haptics";
import LottieView from "lottie-react-native";
import * as Animatable from "react-native-animatable";

import Genres from "./Genres";
import DetailSubTitle from "./DetailSubTItle";
import Details_Rel_Rec from "./Details_Rel_Rec";
import { AntDesign } from "@expo/vector-icons";

type Props = {
  width: number;
  height: number;
  spacing: number;
  animeDetails: {
    details: any;
    loader: boolean;
  };
  animeTitle: string;
};

type studio = {
  id: number;
  name: string;
};

const DetailsInfo = ({
  width,
  height,
  spacing,
  animeDetails,
  animeTitle,
}: Props) => {
  const colorScheme = useColorScheme();
  const [isLiked, setIsLiked] = useState(false);

  const animation = React.useRef(null);
  const scrollRef = useRef<ScrollView>(null);
  const isFirstRun = React.useRef(true);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  }, []);

  return (
    <View
      style={{
        backgroundColor: colorScheme === "dark" ? "#121212" : "#ffffff",
        position: "absolute",
        width: width,
        height: height,
        transform: [{ translateY: height / 2 }],
        borderRadius: 32,
        padding: spacing,
        paddingTop: 32,
      }}
    >
      <Animatable.View animation="fadeIn" delay={400}>
        <Heading
          size="xl"
          fontFamily={"mont-bold"}
          color={colorScheme === "dark" ? "#654582" : "#52376A"}
          numberOfLines={2}
          mb={1}
        >
          {animeTitle}
        </Heading>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ height: height * 0.35 }}
          alwaysBounceVertical={true}
          bounces={true}
          ref={scrollRef}
        >
          <VStack>
            <HStack>
              <VStack>
                <DetailSubTitle
                  title="Episodes:"
                  info={animeDetails?.details?.num_episodes}
                />
                <DetailSubTitle
                  title="Studio:"
                  info={animeDetails?.details?.studios}
                />
                <DetailSubTitle
                  title="Status:"
                  info={animeDetails?.details?.status}
                />

                <DetailSubTitle
                  title="Aired:"
                  info={
                    !animeDetails?.details?.start_date
                      ? "No Date Available"
                      : `${moment(animeDetails?.details?.start_date).format(
                          "MMM DD, YYYY"
                        )} to ${
                          !animeDetails?.details?.end_date
                            ? "?"
                            : moment(animeDetails?.details?.end_date).format(
                                "MMM DD, YYYY"
                              )
                        }`
                  }
                />
              </VStack>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  console.log("Like Pressed");
                  animation.current.play(0, 40);
                  // animation.current.play();
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
                }}
                style={{
                  position: "absolute",
                  right: 3,
                  top: 0,
                  zIndex: 3,
                }}
              >
                <LottieView
                  source={require("../../assets/like.json")}
                  ref={animation}
                  loop={false}
                  // onAnimationFinish={() => {
                  // 	animation.current.pause();
                  // }}
                  style={{
                    height: 50,
                    width: 50,
                  }}
                />
              </TouchableOpacity>
            </HStack>
            <DetailSubTitle
              title="Broadcast:"
              info={
                animeDetails?.details?.broadcast
                  ? `${
                      animeDetails?.details?.broadcast?.day_of_the_week
                    } at ${moment(
                      animeDetails?.details?.broadcast?.start_time,
                      "HH:mm"
                    )
                      .utcOffset(4)
                      .format("hh:mm A")} (EST)`
                  : "Unknown"
              }
            />
            <Genres
              genres={
                animeDetails?.details?.genres
                  ? animeDetails?.details?.genres
                  : []
              }
              colorScheme={colorScheme}
            />
          </VStack>
          {/* <AntDesign
							name={filled ? 'heart' : 'hearto'}
							size={40}
							color='#e03a3a'
							onPress={() => {
								setFilled(!filled);
								Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
							}}
							style={{ marginRight: 5 }}
						/> */}

          <Text
            fontSize="sm"
            fontFamily={"mont"}
            color={colorScheme === "dark" ? "#654582" : "#52376A"}
            textAlign="justify"
          >
            {animeDetails?.details?.synopsis != ""
              ? animeDetails?.details?.synopsis
              : "No Description Available"}
          </Text>

          <Details_Rel_Rec
            array={animeDetails?.details?.related_anime}
            header="Related Anime:"
            colorScheme={colorScheme}
          />
          <Details_Rel_Rec
            array={animeDetails?.details?.recommendations}
            header="Recommended Anime:"
            colorScheme={colorScheme}
          />
        </ScrollView>
        <View style={{ height: 5 }} />
      </Animatable.View>
    </View>
  );
};
// genres []
// broadcast ---> broadcast {}
// related anime []
// recommendations []
// rating
// num_episodes

export default DetailsInfo;
