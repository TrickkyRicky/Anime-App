import { View, FlatList } from "react-native";
import React from "react";
import { Text } from "native-base";
import SeasonalCard from "./SeasonalCard";

interface Props {
  array: any;
  title: string;
  season: string;
}

const SeasonalList = ({ array, title, season }: Props) => {
  return (
    <View style={{ marginVertical: 10 }}>
      <Text my={3} color="#fff" fontSize="lg" fontFamily={"mont-medium"}>
        {title}
      </Text>
      <FlatList
        data={array}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.node.id.toString()}
        renderItem={({ item }) => (
          <SeasonalCard
            season={season}
            id={item.node.id}
            title={item.node.title}
            image={item.node.main_picture.medium}
          />
        )}
      />
    </View>
  );
};

export default SeasonalList;
