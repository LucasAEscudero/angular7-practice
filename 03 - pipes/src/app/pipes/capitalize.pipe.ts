import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "capitalize",
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, full: boolean = true): string {
    value = value.toLocaleLowerCase();
    let names = value.split(" ");

    if (full)
      names = names.map((name) => name[0].toUpperCase() + name.substring(1));
    else names[0] = names[0][0].toUpperCase() + names[0].substring(1);

    return names.join(" ");
  }
}
