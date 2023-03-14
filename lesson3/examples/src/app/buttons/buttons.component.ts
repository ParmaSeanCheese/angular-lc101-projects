import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   goldInactive: boolean = false;
   silverInactive: boolean = false;
   copperInactive: boolean = false;
   

   constructor() { }

   ngOnInit() { }

   deactivateButton (metal: string) {
      if (metal === 'gold'){
         this.goldInactive = true;
      } else if (metal === 'silver'){
         this.silverInactive = true;
      } else if (metal === 'copper'){
         this.copperInactive = true;
      }
   }

}
