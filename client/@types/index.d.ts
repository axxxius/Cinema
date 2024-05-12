namespace api {
  interface Film {
    id: string;
    name: string;
    originalName: string;
    description?: string;
    releaseDate?: string;
    actors?: Actors[];
    directors?: Directors[];
    runtime?: number;
    ageRating?: AgeRating;
    genres?: string[];
    userRatings: UseRatings;
    img: string;
    country?: Country;
  }

  type Professions = 'ACTOR' | 'DIRECTOR';
  type AgeRating = 'G';

  export interface Actors {
    id: number;
    professions: Professions;
    fullName: string;
  }

  interface Directors {
    id: string;
    professions: Professions;
    fullName: string;
  }

  interface UseRatings {
    kinopoisk: string;
    imdb: string;
  }

  interface Country {
    name: string;
    code: string;
    code2: string;
    id: number;
  }

  interface Schedule {
    date: string;
    seances: ScheduleSeance[];
  }

  interface ScheduleSeance {
    time: string;
    hall: FilmHall;
    payedTickets: Ticket;
  }

  type HallName = 'Red' | 'Blue' | 'Green';
  type SeancePlaceType = 'COMFORT' | 'ECONOM' | 'BLOCKED';

  interface FilmSeancePlace {
    price: number;
    type: SeancePlaceType;
  }

  interface SelectSeat {
    row: number | null;
    column: number | null;
  }

  interface ChoosePlace {
    price: number;
    row: number;
    column: number;
  }

  interface FilmHall {
    name: HallName;
    places: FilmSeancePlace[][];
  }

  interface Ticket {
    filmId: string;
    row: number;
    column: number;
    seance: FilmTicketSeance;
  }

  interface FilmTicketSeance {
    date: string;
    time: string;
  }
}
