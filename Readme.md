# AniManga <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="25px">

AniManga is an informational application using the [MAL API ---> MyAnimeList API](https://myanimelist.net/apiconfig/references/api/v2). The goal was to be able to view the
top ranking Anime and Manga, in various different forms. Such as currently airing ranks, seasonal ranks, popular ranks, upcoming ranks, etc. Using React-Native w/[Expo](https://expo.dev/) we were able to test the application on IOS devices and Android devices for better user experience.

## Getting Started

### Prerequisites

- npm
  ```sh
  npm install expo -g
  ```
- Device Usage
  ```sh
  Access the Google Playstore or App Store. Search and download Expo Go
  ```
- Simulator Usage (Android)
  ```sh
  Access or Download Android Studio ---> AVD Manager ---> Create Virtual Device w/Play Store
  ```
- Simulator Usage (IOS)
  ```sh
  Access or Download Xcode ---> Xcode Dropdown ---> Open Developer Tools ---> Simulator
  ```

### Installation

1. Download zip or Clone repo

```sh
git clone https://github.com/TrickkyRicky/Anime-App
```

2. Get a free API key @ [MAL API](https://myanimelist.net/login.php?from=%2Fapiconfig&account_policy=AP1)
3. Enter your API key in AnimeActions.tsx and MangaActions.tsx

```sh
const CLIENT_ID = 'YOUR API KEY'
```

```sh
4. expo install
5. expo start
```

- Expo App

```sh
6a. Scan the QR code with your phone
```

- Computer Simulator

```sh
6b. Press i in terminal for IOS
6c. Press a in terminal for Android
```

<div>
    <img align="right" alt="GIF" src="https://github.com/TrickkyRicky/Anime-App/blob/main/Readme/Anime.png" width="300" />
    <img align="right" alt="GIF" src="https://github.com/TrickkyRicky/Anime-App/blob/main/Readme/AnimeDetails2.png" width="300" />
    <img align="right" alt="GIF" src="https://github.com/TrickkyRicky/Anime-App/blob/main/Readme/AnimeDetails.png" width="300" />
</div>
<div>
    <img align="right" alt="GIF" src="https://github.com/TrickkyRicky/Anime-App/blob/main/Readme/Manga.png" width="300" height="auto" />
    <img align="right" alt="GIF" src="https://github.com/TrickkyRicky/Anime-App/blob/main/Readme/MangaDetail.png" width="300" height="auto" />
</div>

**languages and tools:**

<div style="display:block;">
<code><img height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"></code>
<code><img height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react-native/react-native.png"></code>
<code><img height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png"></code>
<code><img height="40" src="https://reactnavigation.org/img/spiro.svg"></code>
<code><img height="40" src="https://static.expo.dev/static/brand/square-512x512.png"></code>
<code><img height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"></code>
</div>
