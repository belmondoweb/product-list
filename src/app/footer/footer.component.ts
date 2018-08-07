import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'jb-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements  OnInit {

    ngOnInit(): void {
        // Component-מתבצע פעם אחת בטעינה של ה
        // מיועד לפעולות לוגיות הדרושות לביצוע פעם אחת
        console.log("ngOnInit");
    }

}
