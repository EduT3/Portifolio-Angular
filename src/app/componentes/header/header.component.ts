import { DOCUMENT } from "@angular/common";
import { Component, Inject } from "@angular/core";

@Component({
  standalone: false,
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  skipToContent(event: MouseEvent): void {
    event.preventDefault();
    const content = this.document.getElementById("conteudo");
    content?.focus();
    content?.scrollIntoView({ block: "start" });
  }
}
