import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:{
    street:string,
    city:string,
    state:string   
  }
  hobbies:string[];

  constructor() { }

  ngOnInit() {
    this.name = "Kevin";
    this.age = 33;
    this.address= {
      street: "wood close",
      city: "windsor",
      state: "berkshire",
    }
    this.hobbies  = ["languages", "technology", "sci-fi"]
  }
  onClick(){
    this.name = "Kenny";
    this.hobbies.push("Marketing");
  }
  addHobby(hobby){
    this.hobbies.unshift(hobby);
    return false;
  }
  onDelete(hobby){
    for(let i=0;i<this.hobbies.length;i++){
      if(this.hobbies[i]==hobby){
        this.hobbies.splice(i,1);
      }
    }
  }

}
