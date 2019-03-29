import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, Native
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
  {
  @Input('srvElement') element: { type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentPragrapgh') paragraph: ElementRef;
  constructor() {
    console.log("Constructor called");
   }

  ngOnInit() {
    console.log("ngOnInit called");
    console.log("Test Content: " + this.header.nativeElement.textContent);
    console.log("Test Paragraph: " + this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called");
    console.log(changes);
  }
  
  ngDoCheck() {
    console.log("ngDoCheck called");
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit called");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called");
    console.log("Test Content: " + this.header.nativeElement.textContent);
    console.log("Test Paragraph: " + this.paragraph.nativeElement.textContent);
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called");
  }
  ngOnDestroy(){
    console.log("ngOnDestroy called");
  }
}
