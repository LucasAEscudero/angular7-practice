import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Pipe({
  name: "domseguro",
})
export class DomseguroPipe implements PipeTransform {
  constructor(private domSanitazer: DomSanitizer) {}

  transform(url: string): SafeResourceUrl {
    return this.domSanitazer.bypassSecurityTrustResourceUrl(url);
  }
}
