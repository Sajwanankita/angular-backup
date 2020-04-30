import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { News } from 'src/app/core/models/news';
import { NewsService } from 'src/app/core/services/news.service';


@Component({
  selector: 'covid-app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent implements OnInit {

  display = false;
  newsList: News[] = [];

  constructor(private readonly newsService: NewsService) { }

  ngOnInit() {

  }

  viewFullNews() {
    this.display = true;
  }

  getUsers() {
    this.newsService.fetchNews().subscribe(news => {
      this.newsList = news;
    });
  }

  // addNews() {
  //   this.router.navigate(['add-news'], { relativeTo: this.route.parent });
  // }

}
