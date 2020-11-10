import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { razaInterface } from '../models/razaInterface';
import { studyInterface } from '../models/study';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private afs: AngularFirestore) {
    this.studyCollection = afs.collection<studyInterface>('studies');
    this.studies = this.studyCollection.valueChanges();

    this.breedsCollection = afs.collection<razaInterface>('breeds');
    this.breeds = this.breedsCollection.valueChanges();
  }

  private breedsCollection: AngularFirestoreCollection<razaInterface>;
  private breeds: Observable<razaInterface[]>;

  private studyCollection: AngularFirestoreCollection<studyInterface>;
  private studies: Observable<studyInterface[]>;
  private studyDoc : AngularFirestoreDocument<studyInterface>;
  private study: Observable<studyInterface>;

  public selectedStudy: studyInterface={};
  public typeList: Observable<boolean>;

  getAllStudies() {
    this.studyCollection = this.afs.collection<studyInterface>('studies');
    return this.studies = this.studyCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as studyInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getAllBreeds() {
    this.breedsCollection = this.afs.collection<razaInterface>('breeds');
    return this.breeds = this.breedsCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as razaInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }
  
  getRegistersByUser(id: string){
    
    this.studyCollection = this.afs.collection('studies', ref => ref.where('userUid', '==', id));
    return this.studies = this.studyCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as studyInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  addBreed(breed: razaInterface): void {
    this.breedsCollection.add(breed);
  }

  addRegister(study: studyInterface): void {
    this.studyCollection.add(study);
  }

  deleteRegister(id: string): void {
    this.studyDoc= this.afs.doc<studyInterface>(`studies/${id}`);
    this.studyDoc.delete();
  }
}
