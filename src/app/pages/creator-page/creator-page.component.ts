import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-creator-page',
    templateUrl: './creator-page.component.html',
    styleUrls: ['./creator-page.component.scss'],
})
export class CreatorPageComponent implements OnInit {
    private topic: any = document.getElementById('topic');
    private question: any = document.getElementById('question');
    private answer1: any = document.getElementById('answer1');
    private answer2: any = document.getElementById('answer2');
    private answer3: any = document.getElementById('answer3');

    // constructor(
    //     topic: string,
    //     question: string,
    //     answer1: string,
    //     answer2: string,
    //     answer3: string
    // ) {
    //     this.topic = topic;
    //     this.question = question;
    //     this.answer1 = answer1;
    //     this.answer2 = answer2;
    //     this.answer3 = answer3;
    // }
    ngOnInit(): void {}

    // private data: any = [];
    // constructor(private http: HttpClient) {}

    // getData() {
    //     this.http.get(this.topic).subscribe((res) => {
    //         this.data = res;
    //         console.log(this.data);
    //     });
    // }
}
