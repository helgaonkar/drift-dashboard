import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {

  private _searchBy:string="";

  constructor() { }

  ngOnInit(): void {
  }


  properties=[
    { 'for':'FOR SALE',
'color':'rgb(251,68,132)',
'name':'Property & sidebar agent',
'location':'Miami, Florida',
'category':'albama',
'price':'$125,326',
'priceSqft':'$6705/sqft',
'image':'assets/Image/Properties/bedroom-1.jpeg'
},
{ 'for':'FOR SALE',
'color':'rgb(251,68,132)',
'name':'Luxury family home',
'location':'South Western Ave',
'category':'albama',
'price':'$113,859',
'priceSqft':'$6705/sqft',
'image':'assets/Image/Properties/bedroom-2.jpeg'
},
    { 'for':'FOR SALE',
      'color':'rgb(251,68,132)',
      'name':'Property & sidebar agent',
      'location':'Sublevel, Hialeah, Florida',
      'category':'popular',
      'price':'$113,859',
      'priceSqft':'$6705/sqft',
      'image':'assets/Image/Properties/bedroom-4.jpeg'
    },
    { 'for':'FOR RENTAL',
    'color':'rgb(233,138,42)',
    'name':'Modern apartment on 5th floor with views of ...',
    'location':'Modern apartment on 5th floor with views of th',
    'category':'popular',
    'price':'$113,859',
    'priceSqft':'$5130/sqft',
    'image':'assets/Image/Properties/bedroom-3.jpeg'
  },
  { 'for':'FOR RENTAL',
  'color':'rgb(233,138,42)',
  'name':'Property & agent at bottom',
  'location':'Miami, Florida',
  'category':'popular',
  'price':'$125,326',
  'priceSqft':'$5230/sqft',
  'image':'assets/Image/Properties/bedroom-5.jpeg'
},
{ 'for':'FOR SALE',
'color':'rgb(251,68,132)',
'name':'Property & agent at bottom',
'location':'Miami, Florida',
'category':'new jersey',
'price':'$125,326',
'priceSqft':'$5230/sqft',
'image':'assets/Image/Properties/living-room-2.jpeg'
},
{ 'for':'FOR SALE',
'color':'rgb(251,68,132)',
'name':'Sell beautiful Studio in one of the best areas',
'location':'South Western Ave',
'category':'new jersey',
'price':'$130,655',
'priceSqft':'$4522/sqft',
'image':'assets/Image/Properties/property-1.jpeg'
},
{ 'for':'FOR SALE',
'color':'rgb(251,68,132)',
'name':'Property & sidebar agent',
'location':'Sublevel, Hialeah, Florida',
'category':'new jersey',
'price':'$113,859',
'priceSqft':'$6705/sqft',
'image':'assets/Image/Properties/property-4.jpeg'
},
{ 'for':'FOR RENTAL',
'color':'rgb(233,138,42)',
'name':'Property & agent at bottom',
'location':'Miami, Florida',
'category':'colorado',
'price':'$125,326',
'priceSqft':'$5230/sqft',
'image':'assets/Image/Properties/property-5.jpeg'
},
{ 'for':'FOR RENTAL',
'color':'rgb(233,138,42)',
'name':'Property & sidebar agent',
'location':'Sublevel, Hialeah, Florida',
'category':'colorado',
'price':'$113,859',
'priceSqft':'$6705/sqft',
'image':'assets/Image/Properties/property-6.jpeg'
},
{ 'for':'FOR RENTAL',
'color':'rgb(233,138,42)',
'name':'Apartment for sale with high quality finishing',
'location':'colorado',
'category':'colorado',
'price':'$849,000',
'priceSqft':'$3199/sqft',
'image':'assets/Image/Properties/property-7.jpeg'
},
{ 'for':'FOR SALE',
'color':'rgb(251,68,132)',
'name':'Modern apartment on 5th floor with views of...',
'location':'Saint Petersburg, Florida',
'category':'albama',
'price':'$113,859',
'priceSqft':'$5130/sqft',
'image':'assets/Image/Properties/property-8.jpeg'
},


]



filterPropertiesArray=this.properties
  filterProduct(category:string):void
  {
    if(category=="all")
      {
        this. filterPropertiesArray=this.properties
      }
     else {
        this. filterPropertiesArray=this.properties.filter(properties=>properties.category===category)
      } 
  }


  get searchBy():string
  {
    return this._searchBy;
  }
  set searchBy(sb:string)
  {
    this._searchBy=sb;
    this.filterPropertiesArray=this.properties.filter(properties=>properties.name.toLowerCase().includes(sb.toLowerCase()));
  }


  //  pagination start ------->
startIndex=0
endIndex=3
item_per_page=3
demo=true
changePage(pageNumber:number)
{
  this.startIndex=(pageNumber-1)*this.item_per_page
  this.endIndex=pageNumber*this.item_per_page
  this.demo=!this.demo
  
}
//  pagination end ------->


}
