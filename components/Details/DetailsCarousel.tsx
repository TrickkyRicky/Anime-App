import React from 'react';
import { Image, Dimensions } from 'react-native';
import SnapCarousel from 'react-native-snap-carousel';

type Props = {
	width: number;
	height: number;
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

const DetailsCarousel = ({ animeDetails, width, height }: Props) => {
	return (
		<SnapCarousel
			data={animeDetails.loader ? imgLoad : animeDetails.details.pictures}
			sliderWidth={width}
			itemWidth={width}
			layout='stack'
			autoplay={true}
			loop={true}
			inactiveSlideOpacity={0.4}
			renderItem={({ item, index }: Carousel) => {
				return (
					<Image
						source={{ uri: item?.large }}
						style={{
							width: width,
							height: height * 0.6,
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
