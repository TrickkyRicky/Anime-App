import { AnimeActions } from "./Anime-Slice";

const CLIENT_ID = "4b75af5e9466c3b143191b860c40c4eb";

export const getAnimeData = (type: string) => {
  return async (dispatch: any) => {
    dispatch(AnimeActions.setLoader({ choice: type, loading: true }));

    const getData = async () => {
      const res = await fetch(
        `https://api.myanimelist.net/v2/anime/ranking?ranking_type=${type}&limit=14`,
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
      switch (type) {
        case "airing":
          dispatch(AnimeActions.setTopAiring(result.data));
          break;
        case "upcoming":
          dispatch(AnimeActions.setTopUpcoming(result.data));
          break;
        case "movie":
          dispatch(AnimeActions.setTopMovies(result.data));
          break;
        case "bypopularity":
          dispatch(AnimeActions.setMostPopular(result.data));
          break;
      }
      dispatch(AnimeActions.setLoader({ choice: type, loading: false }));
    } catch (err) {
      dispatch(AnimeActions.setLoader({ choice: type, loading: false }));
      console.log(err);
    }
  };
};

export const getSeasonalAnimeData = (year: number, season: string) => {
  return async (dispatch: any) => {
    dispatch(AnimeActions.setLoader({ choice: "season", loading: true }));

    const getData = async () => {
      const res = await fetch(
        `https://api.myanimelist.net/v2/anime/season/${year}/${season}?limit=14`,
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

      dispatch(
        AnimeActions.setTopSeasonal({ season: season, data: result.data })
      );
      dispatch(AnimeActions.setLoader({ choice: "season", loading: false }));
    } catch (err) {
      dispatch(AnimeActions.setLoader({ choice: "season", loading: false }));
      console.log(err);
    }
  };
};

export const getAnimeDetails = (id: number, is2 = false) => {
  return async (dispatch: any) => {
    if (!is2)
      dispatch(AnimeActions.setLoader({ choice: "animeD", loading: true }));
    else {
      dispatch(AnimeActions.setLoader({ choice: "animeD2", loading: true }));
    }

    const getData = async () => {
      const res = await fetch(
        `https://api.myanimelist.net/v2/anime/${id}?fields=id,title,main_picture,start_date,end_date,synopsis,status,genres,num_episodes,broadcast,rating,pictures,related_anime,recommendations,studios`,
        {
          headers: { "X-MAL-Client-ID": CLIENT_ID },
        }
      );
      if (res.status !== 200) {
        throw new Error(`Failed to fetch Anime Details of ${id}`);
      }
      return res.json();
    };

    try {
      const result = await getData();
      if (!is2) {
        dispatch(AnimeActions.setAnimeDetails(result));
        dispatch(AnimeActions.setLoader({ choice: "animeD", loading: false }));
      } else {
        dispatch(AnimeActions.setAnimeDetails2(result));
        dispatch(AnimeActions.setLoader({ choice: "animeD2", loading: false }));
      }
    } catch (err) {
      dispatch(AnimeActions.setLoader({ choice: "animeD", loading: false }));
      dispatch(AnimeActions.setLoader({ choice: "animeD2", loading: false }));
      console.log(err);
    }
  };
};
