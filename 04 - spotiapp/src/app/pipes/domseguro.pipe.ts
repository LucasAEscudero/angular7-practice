import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: "domseguro",
})
export class DomseguroPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}

  transform(value: string, url: string, restUrl?: string): any {
    console.log(`${url}${value}${restUrl ? restUrl : ""}`);
    return this.domSanitizer.bypassSecurityTrustResourceUrl(
      `${url}${value}${restUrl ? restUrl : ""}`
    );
  }
}
