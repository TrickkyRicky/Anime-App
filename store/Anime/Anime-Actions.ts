import { AnimeActions } from './Anime-Slice';

const CLIENT_ID = '4b75af5e9466c3b143191b860c40c4eb';

export const getData = (type: string) => {
	return async (dispatch: any) => {
		dispatch(AnimeActions.setLoader({ choice: type, loading: true }));

		const getData = async () => {
			const res = await fetch(
				`https://api.myanimelist.net/v2/anime/ranking?ranking_type=${type}`,
				{
					headers: { 'X-MAL-Client-ID': CLIENT_ID }
				}
			);
			if (res.status !== 200) {
				throw new Error(`Failed to fetch Top ${type}`);
			}
			return res.json();
		};

		try {
			const result = await getData();
			// switch (type) {
			// 	case 'airing':
			// 		dispatch(AnimeActions.setTopAiring(result.data))
			// 		break;
			// 	case 'upcoming':
			// 		dispatch(AnimeActions.setTopUpcoming(result.data));
			// 		break;
			// 	case 'movie':
			// 		dispatch(AnimeActions.setTopMovies(result.data));
			// 		break;
			// 	case 'bypopularity':
			// 		dispatch(AnimeActions.setMostPopular(result.data));
			// 		break;
			// }
			dispatch(AnimeActions.setLoader({ choice: type, loading: false }));
		} catch (err) {
			dispatch(AnimeActions.setLoader({ choice: type, loading: false }));
			console.log(err);
		}
	};
};
