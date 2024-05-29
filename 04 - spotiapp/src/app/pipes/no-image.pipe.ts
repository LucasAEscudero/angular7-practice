import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "noimage",
})
export class NoImagePipe implements PipeTransform {
  transform(images: { url: string }[]): string {
    return !images || !images.length ? "assets/img/noimage.png" : images[0].url;
  }
}
