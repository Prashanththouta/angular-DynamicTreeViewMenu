import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>{{objmm | json}}</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
  menulist : string[] = [];
  finalMenu: MenuItem[] = [];
  mm: string[];

  constructor() {
    this.menulist = [
      "showroom ,purchase, enquiries, vehicle purchase enquiries"
    ]
    this.mm = this.menulist[0].split(',');
    this.AddMenu(this.mm.length -1);
  }
  
  objmm = {};
  AddMenu(count: number) {
    for(let i=0; i<count; i++) {
      let pi = i<0?this.mm[i-1] : this.mm[i];
      let ci = this.mm[i];
      let ni = this.mm[i+1];

      if(pi && this.objmm!== {}) {
        this.objmm[pi] = ni;
        return this.AddMenu(count-1)
      } else {
        return this.objmm;
      }
    }
  }
}


class MenuItem {
  parentName: string;
  childName?: MenuItem[];
}