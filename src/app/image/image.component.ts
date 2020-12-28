import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import {WebcamImage} from 'ngx-webcam';
import {Subject, Observable} from 'rxjs';
import { data } from 'jquery';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  public seconds:number ;
  private trigger: Subject<void> = new Subject<void>();
  // @ViewChild("video")
  // public video: ElementRef;

  // @ViewChild("canvas")
  // public canvas: ElementRef;

  // public captures: Array<any>;
  private width: number;
  private height: number;

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    const win = !!event ? (event.target as Window) : window;
    this.width = win.innerWidth;
    this.height = win.innerHeight;
  }

  constructor(private router: Router) { 
    this.onResize();
    // this.captures = [];
  }

  ngOnInit() {
  }

  public webcamImage: WebcamImage = null;

  public triggerSnapshot(): void {
    this.seconds = 3;
    setTimeout(()=>{
      this.seconds = 2;
     setTimeout(()=>{
       this.seconds = 1
       setTimeout(()=>{
         this.trigger.next(); 
         this.seconds = null;
       },2000)
     },2000) 
    },2000)
       
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info("received webcam image", webcamImage);
    this.webcamImage = webcamImage;
  }

  public retake() {
    if (this.webcamImage === this.webcamImage) {
      this.webcamImage = null;
    }
  }
  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
  // public ngAfterViewInit() {
  //   if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  //       navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
  //           this.video.nativeElement.src = window.URL.createObjectURL(stream);
  //           this.video.nativeElement.play();
  //       });
  //   }
  // }

// public capture() {
//   var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
//   this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
// }

  public next() {
    this.router.navigate(['/code_generate'])
  }
}