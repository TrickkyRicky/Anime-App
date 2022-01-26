import { StackNavigationProp } from "@react-navigation/stack";

// Listing item used in TopAiringAnime for Flatlist and Carousel
export interface ListingItem {
  item: {
    node: {
      id: number;
      main_picture: {
        large: string;
        medium: string;
      };
      title: string;
    };
    ranking: {
      rank: number;
    };
  };
}

/* ---------------- TOP AIRING NAV PROP ---------------- */
type navList = {
  Details: {
    anime: ListingItem["item"]["node"];
  };
  Details2: {
    anime: ListingItem["item"]["node"];
  };
  MangaDetails: {
    manga: ListingItem["item"]["node"];
  };
};
// This Type is used for useNavigation in TopAiringAnime
export type TopAirNavProps = StackNavigationProp<navList, "Details">;
/* ---------------- TOP AIRING NAV PROP ---------------- */

/* ---------------- DETAIL SCREEN NAV PROP ---------------- */
type previousScreenProps = StackNavigationProp<navList, "Details">;
export type DetailNavProps = {
  navigation: previousScreenProps;
  route: {
    params: {
      anime: ListingItem["item"]["node"];
      manga: ListingItem["item"]["node"];
    };
  };
};
/* ---------------- DETAIL SCREEN NAV PROP ---------------- */
