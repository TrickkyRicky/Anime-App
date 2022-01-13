import React from 'react';
import { Image, Dimensions } from 'react-native';
import SnapCarousel from 'react-native-snap-carousel';
// aight
type Props = {
	animeDetails: {
		details: { pictures: [] };
		loader: boolean;
	};
};

type Carousel = {
	item: { large: string };
	index: number;
};

const imgLoad = [
	{
		large:
			'https://thumbs.gfycat.com/BackIllinformedAsianelephant-size_restricted.gif'
	}
];

const { height: screenHeight } = Dimensions.get('window');
const { width: screenWidth } = Dimensions.get('window');

const DetailsCarousel = ({ animeDetails }: Props) => {
	return (
		<SnapCarousel
			data={animeDetails.loader ? imgLoad : animeDetails.details.pictures}
			sliderWidth={screenWidth}
			itemWidth={screenWidth}
			layout='stack'
			autoplay={true}
			loop={true}
			inactiveSlideOpacity={0.4}
			renderItem={({ item, index }: Carousel) => {
				return (
					<Image
						source={{ uri: item?.large }}
						style={{
							width: screenWidth,
							height: screenHeight * 0.6,
							resizeMode: 'cover',
							position: 'absolute',
							top: 0
						}}
					/>
				);
			}}
		/>
	);
};

export default DetailsCarousel;
