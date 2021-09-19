import { FilmService } from './../../services/film.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.page.html',
  styleUrls: ['./film-detail.page.scss'],
})
export class FilmDetailPage implements OnInit {
  filmDetail: any = null;

  constructor(private filmService: FilmService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // COGER ID DE URL
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.filmService.getDetails(id).subscribe(result => {
      this.filmDetail = result;
    });
  }

}
