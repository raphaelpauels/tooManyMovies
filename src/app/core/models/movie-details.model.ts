import { realisateurListing } from './realisateur-listing.model';

export interface MovieDetails {
  id: number;
  title: string;
  releaseDate: string;
  genres: string[];
  realisteur: realisateurListing[];
}
