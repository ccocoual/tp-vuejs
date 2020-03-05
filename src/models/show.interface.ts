export interface ShowInterface {

  id: string;
  thetvdb_id: string;
  imdb_id: string;
  title: string;
  original_title: string;
  description: string;
  seasons: string;
  seasons_details: Array<object>;
  episodes: string;
  followers: string;
  comments: string;
  similars: string;
  characters: string;
  creation: string;
  genres: Array<string>;
  length: string;
  network: string;
  rating: string;
  status: string;
  language: string;
  notes: {
    total: number;
    mean: number;
    user: number;
  };
  in_account: boolean;
  images: {
    show: string;
    banner: string;
    box: string;
    poster: string;
  };
  aliases: {
    6432: string;
    14224: string;
    1900: string;
  };
  social_links: [
    {
      type: string;
      external_id: string;
    },
    {
      type: string;
      external_id: string;
    },
    {
      type: string;
      external_id: string;
    }
  ];
  user: {
    archived: boolean;
    favorited: boolean;
    remaining: number;
    status: number;
    last: string;
    tags: Array<string>;
    next: {
      id: string,
      code: string;
      date: Date;
      title: string;
      image: string;
    };
    friends_watching: Array<string>;
  };
  next_trailer: string;
  resource_url: string;

}
