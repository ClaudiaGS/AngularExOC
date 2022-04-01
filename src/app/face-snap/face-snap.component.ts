import { Component, OnInit, Input } from '@angular/core';
import {FaceSnap} from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!:FaceSnap;
  constructor(private faceSnapsService: FaceSnapsService, private router:Router) {}
  buttonText!:string;
    ngOnInit() {

      this.buttonText = 'Oh Snap!';
    }
    onSnap() {
        if (this.buttonText === 'Oh Snap!') {
            this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
            this.buttonText = 'Oops, unSnap!';
        } else {
            this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
            this.buttonText = 'Oh Snap!';
        }
    }
    onViewFaceSnap() {
        this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
    }
 }
