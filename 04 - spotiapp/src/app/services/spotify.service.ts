import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log("Spotify service done!");
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQDLUgqkraapU0aXvyCtvaueUuM9WS3AKSiCa5uUnQv9iv9S7W8rQX-8VSkjbxMHuoNUmhv4zyCYFH-UfxZxbydAFvYLAQ84yhvPakmR9nkNsCotkls",
    });

    return this.http.get(url, {
      headers,
    });
  }

  getNewReleases() {
    return this.getQuery("browse/new-releases?limit=20").pipe(
      map((data) => {
        return data["albums"].items;
      })
    );
  }

  getArtists(toSearch: string) {
    return this.getQuery(`search?q=${toSearch}&type=artist&limit=15`).pipe(
      map((data) => {
        return data["artists"].items;
      })
    );
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
      map((data) => data["tracks"])
    );
  }
}
