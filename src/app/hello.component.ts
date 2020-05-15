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

  CreateMenuStructure() {
    this.menulist.forEach(
      (mi) => {
        let item : string[] = mi.split(',');
      }
    )
  }

  MenuLoop(item ) {
    this.finalMenu.push({parentName: })
  }


}


class MenuItem {
  parentName: string;
  childName?: MenuItem[];
}