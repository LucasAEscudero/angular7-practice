import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: [],
})
export class HomeComponent implements OnInit {
  newReleases: any[] = [];
  loading: boolean;
  error: boolean;
  errorMessage: string;

  constructor(private spotify: SpotifyService) {
    this.loading = true;

    this.spotify.getNewReleases().subscribe(
      (data) => {
        this.newReleases = data;
      },
      (serviceError) => {
        this.error = true;
        this.errorMessage = serviceError.error.error.message;
      }
    );

    this.loading = false;
  }

  ngOnInit() {}
}
