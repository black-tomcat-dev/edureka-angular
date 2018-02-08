import { Component, OnInit } from "@angular/core";

// import appComponent if dependcy injecting into main file
declare var Stickyfill: any;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Edureka Angular5 framework";

  constructor() {}

  ngOnInit() {
    this.affix1();
  }

  private affix1() {
  //fixed top code
  var elements = document.querySelectorAll(".sticky");
  Stickyfill.add(elements);

  }
}
