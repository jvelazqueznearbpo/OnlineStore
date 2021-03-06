import { Injectable } from '@angular/core';
import { FirebaseDatabase } from 'angularfire2';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getCategories(): Observable<any> {
    return this.db.list('/categories', ref => ref.orderByChild('name'))
    .snapshotChanges();
  }
}
