import { AnimeActions } from "./Anime-Slice";

const CLIENT_ID = "4b75af5e9466c3b143191b860c40c4eb";

export const getAnimeData = (type: string) => {
  return async (dispatch: any) => {
    dispatch(AnimeActions.setLoader({ choice: type, loading: true }));

    const getData = async () => {
      const res = await fetch(
        `https://api.myanimelist.net/v2/anime/ranking?ranking_type=${type}`,
        {
          headers: { "X-MAL-Client-ID": CLIENT_ID },
        }
      );
      if (res.status !== 200) {
        throw new Error(`Failed to fetch Top ${type}`);
      }
      return res.json();
    };

    try {
      const result = await getData();
      console.log(result.data);
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

export const getSeasonalAnimeData = (season: string, year: string) => {
  return async (dispatch: any) => {
    dispatch(AnimeActions.setLoader({ choice: "season", loading: true }));

    const getData = async () => {
      const res = await fetch(
        `https://api.myanimelist.net/v2/anime/season/${year}/${season}`,
        {
          headers: { "X-MAL-Client-ID": CLIENT_ID },
        }
      );
      if (res.status !== 200) {
        throw new Error(`Failed to fetch Top Seasonal ${season} Anime`);
      }
      return res.json();
    };

    try {
      const result = await getData();
      dispatch(AnimeActions.setTopSeasonal(result.data));
      dispatch(AnimeActions.setLoader({ choice: "season", loading: false }));
    } catch (err) {
      dispatch(AnimeActions.setLoader({ choice: "season", loading: false }));
      console.log(err);
    }
  };
};

// `https://api.myanimelist.net/v2/anime/${id}?fields=id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics`