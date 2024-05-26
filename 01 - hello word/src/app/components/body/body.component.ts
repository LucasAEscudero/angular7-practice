import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.css"],
})
export class BodyComponent {
  mostrar: boolean = true;
  words: string[] = ["Slyder", "Weird", "Cinder", "Carr"];
}
