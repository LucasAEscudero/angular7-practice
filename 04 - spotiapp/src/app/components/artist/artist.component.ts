import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: "app-artist",
  templateUrl: "./artist.component.html",
  styles: [],
})
export class ArtistComponent implements OnInit {
  artist: any = {};
  loading: boolean;
  topTracks: any[] = [];

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe((params) => {
      this.getArtist(params["id"]);
      this.getTopTracks(params["id"]);
      this.loading = false;
    });
  }

  ngOnInit() {}

  getArtist(id: string) {
    this.spotify.getArtist(id).subscribe((data) => {
      this.artist = data;
    });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe((data) => {
      console.log(data);
      this.topTracks = data;
    });
  }
}
