import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled = true;

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.color = 'blue';
      this.height = 10000;
      this.width = 0;
      this.message = 'Shuttle in flight.';
      this.takeOffEnabled = false;
    }
  }

  handleLand(rocketImage) {
    window.alert('The shuttle is landing. Landing gear engaged.');
    this.message = 'The shuttle has landed.';
    this.color = "green";
    this.height = 0;
    rocketImage.style.bottom = '0px';
  }

  handleAbort(rocketImage) {
    let result = window.confirm('Are you sure you want to abort mission?');
    if (result) {
      this.color = 'red';
      this.height = 0
      this.message = 'Mission aborted.'
      rocketImage.style.bottom = '0px';
      this.takeOffEnabled = true;
    }
  }

  moveRocket(rocketImage, direction: string) {
    if (direction === 'right'){
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000
    } else if (direction === 'left'){
      let movement = (parseInt(rocketImage.style.left) - 10) + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000
    } else if (direction === 'up'){
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000
    } else if (direction === 'down'){
      let movement = (parseInt(rocketImage.style.bottom) - 10) + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000
    }
  }

  checkBoundary() {
    if (this.width <= -20000 || this.height <= 0){
      this.color = 'red'
    } else {
      this.color = 'blue'
    }
  }
}
