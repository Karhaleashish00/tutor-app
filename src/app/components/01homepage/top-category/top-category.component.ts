import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-top-category',
  templateUrl: './top-category.component.html',
  styleUrls: ['./top-category.component.css']
})
export class TopCategoryComponent {
  category:Record<string, { img: string;courses: string,Title :string }>  = {
    "Label":{
        img : "../../../../assets/Cpu.png",
        courses:"53,203",
        Title:"Label"
      },
    "Business":{
        img : "../../../../assets/Handshake.png",
        courses:"43,675",
        Title:"Business"
      },
    "Finance & Accounting":{
        img : "../../../../assets/CreditCard.png",
        courses:"51,235",
        Title:"Finance & Accounting"
      },
    "IT & Software":{
        img : "../../../../assets/ChartBarHorizontal.png",
        courses:"32,567",
        Title:"IT & Software"
      },
    "Personal Development":{
        img : "../../../../assets/BugDroid.png",
        courses:"26,467",
        Title:"Personal Development"
      },
    "Office Productivity":{
        img : "../../../../assets/Receipt.png",
        courses:"12,653",
        Title:"Office Productivity"
      },

    "Marketing":{
        img : "../../../../assets/MegaphoneSimple.png",
        courses:"45,678",
        Title:"Marketing"
      },
    "Photography & Video":{
        img : "../../../../assets/Camera.png",
        courses:"10,213",
        Title:"Photography & Video"
      },
    "Lifestyle":{
        img : "../../../../assets/Package.png",
        courses:"23,897",
        Title:"Lifestyle"
      },
    "Design":{
        img : "../../../../assets/PenNib.png",
        courses:"7,654",
        Title:"Design"
      },
    "Health & Fitness":{
        img : "../../../../assets/FirstAidKit.png",
        courses:"6,900",
        Title:"Health & Fitness"
      },
    "Music":{
        img : "../../../../assets/Headphones.png",
        courses:"1,211",
        Title:"Music"
      },
  }
  objectKeys = Object.keys;
}
