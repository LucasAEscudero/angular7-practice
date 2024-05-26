import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  name: string = "Capitan America";
  word: string = "pAlabRa desORdenAdA";
  array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  fecha: Date = new Date();
  idioma: string = "en";
  videoUrl: string =
    "https://www.youtube.com/embed/uxarfXX_EM0?si=oEa9qVYtEXEYU_9C";
  password: string = "pass123.";
  showPassword: boolean = false;
  valorPromesa: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
      resolve("llego la data");
    }, 4500);
  });
  heroe: any = {
    nombre: "Logan",
    clave: "wolverine",
    edad: 500,
    direccion: {
      calle: "primera",
      casa: 20,
    },
  };
}
