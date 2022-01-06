import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box, HStack, Text, VStack } from "native-base";
import { getAnimeData } from "../../store/Anime/Anime-Actions";

import Product from "../../components/Product";
import Carousel from "../../components/Carousel";
import { ScrollView, TouchableOpacity } from "react-native";

const data = [
  {
    image: "https://api-cdn.myanimelist.net/images/anime/6/44297.jpg",
    name: "One Piece",
  },
  {
    image: "https://api-cdn.myanimelist.net/images/anime/1259/110227.jpg",
    name: "Holo no Graffiti",
  },
  {
    image: "https://api-cdn.myanimelist.net/images/anime/6/44297.jpg",
    name: "One Piece",
  },
  {
    image: "https://api-cdn.myanimelist.net/images/anime/1259/110227.jpg",
    name: "Holo no Graffiti",
  },
  {
    image: "https://api-cdn.myanimelist.net/images/anime/6/44297.jpg",
    name: "One Piece",
  },
  {
    image: "https://api-cdn.myanimelist.net/images/anime/1259/110227.jpg",
    name: "Holo no Graffiti",
  },
  {
    image: "https://api-cdn.myanimelist.net/images/anime/6/44297.jpg",
    name: "One Piece",
  },
  {
    image: "https://api-cdn.myanimelist.net/images/anime/1259/110227.jpg",
    name: "Holo no Graffiti",
  },
];

const TopAiringAnime = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAnimeData("airing"));
  }, []);

  return (
    <Box flex={1} bg="#3730a3" p={2}>
      <VStack mb={12}>
        <Text
          color="#fff"
          textAlign="center"
          fontSize="3xl"
          fontWeight={700}
          mb={2}
        >
          Top Airing Anime
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Carousel />
          <HStack justifyContent="center" space={2} flexWrap="wrap">
            {data.map((listing, index) => (
              <TouchableOpacity key={index}>
                <Product name={listing.name} image={listing.image} />
              </TouchableOpacity>
            ))}
          </HStack>
        </ScrollView>
      </VStack>
    </Box>
  );
};

export default TopAiringAnime;
