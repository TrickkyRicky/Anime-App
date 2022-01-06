import { MangaActions } from './Manga-Slice';

const CLIENT_ID = '4b75af5e9466c3b143191b860c40c4eb';

export const getData = (type: string) => {
	return async (dispatch: any) => {
		dispatch(MangaActions.setLoader({ choice: type, loading: true }));

		const getData = async () => {
			const res = await fetch(
				`https://api.myanimelist.net/v2/manga/ranking?ranking_type=${type}`,
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
			// 	case 'manga':
			// 		dispatch(MangaActions.setTopManga(result.data))
			// 		break;
			// 	case 'novels':
			// 		dispatch(MangaActions.setTopNovels(result.data));
			// 		break;
			// 	case 'manhua':
			// 		dispatch(MangaActions.setTopManhua(result.data));
			// 		break;
			// 	case 'manhwa':
			// 		dispatch(MangaActions.setTopManhwa(result.data));
			// 		break;
			// 	case 'bypopularity':
			// 		dispatch(MangaActions.setMostPopular(result.data));
			// 		break;
			// }
			dispatch(MangaActions.setLoader({ choice: type, loading: false }));
		} catch (err) {
			dispatch(MangaActions.setLoader({ choice: type, loading: false }));
			console.log(err);
		}
	};
};
