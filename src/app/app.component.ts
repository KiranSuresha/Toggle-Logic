import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  array = [
    { id: 1, active: false },
    { id: 2, active: false },
    { id: 3, active: false },
    { id: 4, active: false },
    { id: 5, active: false },
    { id: 6, active: false },
    { id: 7, active: false },
    { id: 8, active: false },
    { id: 9, active: false },
    { id: 10, active: false }
  ];

  setNumber(element, index) {
    if (element.active) {
      this.array[index].active = false;
    } else {
      for (const arr of this.array) {
        if (arr.active) {
          arr.active = false;
        }
      }
      this.array[index].active = true;
    }
  }
}
