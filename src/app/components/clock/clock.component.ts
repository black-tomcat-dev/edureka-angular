import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
declare var Stickyfill: any;
@Component({
  selector: 'app-clock',
  template: '<canvas #canvas1 width="150" height="150" class="pull-right"></canvas>',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  @ViewChild("canvas1") canvas1: ElementRef; 

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
      //clock code
  let gradient = null;
  let canvas = document.getElementById("canvas");
  let ctx: CanvasRenderingContext2D = this.canvas1.nativeElement.getContext("2d");

  ctx.strokeStyle = "#101010";
  ctx.lineWidth = 7;
  ctx.lineCap = "round";
  ctx.shadowBlur = 1;
  ctx.shadowColor = "#101010";

  //this function will convert degree to radian
  function degToRad(degree) {
    var factor = Math.PI / 180;
    return degree * factor;
  }

  function showTime() {
    var now = new Date();
    var today = now.toDateString();
    var time = now.toLocaleTimeString();
    var hours = now.getHours();
    if (hours > 12) {
      hours = hours - 12;
    }
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var milliseconds = now.getMilliseconds();
    //we will use newSeconds to give a smooth transition while seconds arc moves
    var newSeconds = seconds + milliseconds / 1000;

    // Background
    gradient = ctx.createRadialGradient(75, 75, 5, 75, 75, 100);
    gradient.addColorStop(0, "#fff");
    gradient.addColorStop(1, "#fff");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 150, 150);

    //Creating Hours Circle
    ctx.beginPath();
    ctx.arc(75, 75, 60, degToRad(270), degToRad(hours * 30 - 90));
    ctx.stroke();

    //Creating Minutes Circle
    ctx.beginPath();
    ctx.arc(75, 75, 51, degToRad(270), degToRad(minutes * 6 - 90));
    ctx.stroke();

    //Creating Seconds Circle
    ctx.beginPath();
    ctx.arc(75, 75, 42, degToRad(270), degToRad(newSeconds * 6 - 90));
    ctx.stroke();

    // Date
    ctx.font = "9px Arial bold";
    ctx.fillStyle = "#004ACB";
    ctx.fillText(today, 46, 75);

    // Time
    ctx.font = "8px Arial";
    ctx.fillStyle = "#004ACB";
    ctx.fillText(time, 60, 84);
  }
  //showTime method will be called after 40 milliseconds
  setInterval(showTime, 40);
  //end of clock code


  }
}


