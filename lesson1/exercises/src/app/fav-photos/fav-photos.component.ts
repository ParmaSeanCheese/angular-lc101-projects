import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/419fa4cc-f4d6-4a6d-999a-e7c6a5eebd8e/dfe2q4a-8276693c-c3f0-4be3-ae86-70e2584f0921.jpg/v1/fill/w_1043,h_766,q_70,strp/mtg_necron_monolith_by_anthonydevine_dfe2q4a-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTQwIiwicGF0aCI6IlwvZlwvNDE5ZmE0Y2MtZjRkNi00YTZkLTk5OWEtZTdjNmE1ZWViZDhlXC9kZmUycTRhLTgyNzY2OTNjLWMzZjAtNGJlMy1hZTg2LTcwZTI1ODRmMDkyMS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.3EWvJdyKlMU-oIiObgakpCkKlQs6zqgWa1aFXlsc9SI';
  image3 = 'https://preview.redd.it/ckf7wrmwtsn91.jpg?width=960&crop=smart&auto=webp&v=enabled&s=7416db03d234e8a3d4786d3118c7dde893b1ee4c';

  constructor() { }

  ngOnInit() {
  }

}