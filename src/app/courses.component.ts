import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({

    selector: 'courses',
    template : `<h2>

    {{ getTitle() }}

    </h2>

    <ul>

    <li *ngFor="let course of courses"> {{ course }} </li>

    </ul>

    {{course.title | uppercase}}<br/>
    <!-- Adds commas and makes the format readable -->
    {{course.students | number }}<br\>
    <!-- Number of Integers to display before decimal . Min digits after decimal point - Max digits after decimal point -->
    {{course.ratings | number:'2.2-3'}}<br\>
    <!-- Currency type Whether to show symbol for the currency : code: Number of Integers to display before decimal . Min digits after decimal point - Max digits after decimal point-->
    {{course.price | currency: 'INR':'symbol': '3.2-2'}}<br\>
    {{course.releaseDate | date: 'shortDate'}}<br\>

    <hr>

    <!-- Custom Pipe -->
    {{desc | summary:10}}

    <hr>

    <img style="width:1200px;height:1000px;" [src]="imageURL" />

    <table style="display:block">
        <tr>
            <td [attr.colspan]="colSpan" >This is Bucks</td>
        </tr>
    </table>

    <button class="btn btn-primary" [style.backgroundColor]="isActive? 'green': 'red' " [class.active]="isActive">Submit</button>

    <hr>

    <div (click)="divClicked($event)">
        <button class="btn btn-primary" (click)="buttonClicked($event)">Click Me</button>
    </div>

    <hr>

    <input class="form-control" type="text" (keyup)="onKeyUpTradition($event)" name="traditionalevent"/>

    <hr>

    <input #typedtext class="form-control" type="text" (keyup.enter)="onKeyUpEventFiltering(typedtext.value)" name="eventfiltering"/>

    <hr>

    <!-- Two ways of doing Two way binding -->
    <input [value]="inputedText" class="form-control" type="text" (keyup.enter)="inputedText=$event.target.value;onKeyTwoWayBindingOne()" name="twoWayBindingOne"/>

    <hr>

    <input [(ngModel)]="twoWayText" class="form-control" type="text" (keyup.enter)="onKeyTwoWayBinding()" name="twoWayBinding"/>

    `
})
export class CoursesComponent {
    title = 'Latest Angular Courses';
    courses;
    imageURL = 'https://upload.wikimedia.org/wikipedia/commons/6/64/Foods_%28cropped%29.jpg';
    colSpan = 2;
    isActive = true;
    inputedText = 'Bucks';
    twoWayText = 'Adithan';
    desc = 'Hi I am Bhakavathy Adithan. I am working for Cognizant technology solutions. My Designation is Project Co-ordinator. O am a developer and my tag is Associate-Project';
    course = {
        title: 'The Complete Angular Course',
        ratings: 4.9764,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2017, 4, 29)
    };

    constructor(coursesService: CoursesService) {
        this.courses = coursesService.getCourses();
    }

    divClicked($event) {
        console.log('Div Clicked', $event);
    }

    buttonClicked($event) {
        $event.stopPropagation();
        console.log('Button Clicked', $event);
    }

    getTitle() {
        return this.title;
    }

    onKeyUpTradition($event) {

        if ($event.keyCode === 13) {
            console.log('Traditional Way: Enter key is pressed');
        }
    }

    onKeyUpEventFiltering(typedtext) {
        console.log('Event Filtering : Enter Button is clicked', typedtext);
    }

    onKeyTwoWayBindingOne() {
        console.log('First Way of Two Way Binding', this.inputedText);
    }

    onKeyTwoWayBinding() {
        console.log('Preferred Way of Two Way Binding', this.twoWayText);
    }

}
