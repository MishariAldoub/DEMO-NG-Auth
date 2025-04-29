import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-notes',
  imports: [NgFor],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css',
})
export class NotesComponent {
  private readonly notes =
    'https://task-react-auth-backend.eapi.joincoded.com/api/notes';

  private http = inject(HttpClient);
  data: any[] = [];
  newNote = {
    id: '',
    //id is randomized
    title: '',
    description: '',
    // comment: '',
  };

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.http.get<any[]>(this.notes).subscribe((response) => {
      this.data = response;
      console.log('data: ', this.data);
    });
  }
}
