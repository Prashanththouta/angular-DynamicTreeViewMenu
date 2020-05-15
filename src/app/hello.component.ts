import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
  menulist : string[] = [];
  finalMenu: MenuItem[] = [];

  constructor() {
    this.menulist = [
      "showroom ,purchase, enquiries, vehicle purchase enquiries"
    ]
  }
  
}


class MenuItem {
  parentName: string;
  childName?: MenuItem[];
}