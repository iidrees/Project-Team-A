function roomApp(){
 this.meetings = {'location':'1A', 'numberOfSeats':12, 'roomsOccupied':2, 'Duration':12, 'numberOfRooms':5}
  this.games = {'location':'1A', 'numberOfSeats':12, 'roomsOccupied':1, 'Duration':12, 'numberOfRooms':2}
  this.quiteTime = {'location':'1A', 'numberOfSeats':12, 'roomsOccupied':1, 'Duration':12, 'numberOfRooms':10}
  this.learning = {'location':'1A', 'numberOfSeats':12, 'roomsOccupied':4, 'Duration':12, 'numberOfRooms':10 }
  this.working = {'location':'1A', 'numberOfSeats':12, 'roomsOccupied':7, 'Duration':12, 'numberOfRooms':15 }

  this.currentLocation = 'meetings';

  this.showMeeting = document.getElementById('meetingTB');
  this.showGames = document.getElementById('gamesTB');
  this.showQuiteTime = document.getElementById('quiteTimeTB');
  this.showLearning = document.getElementById('learningTB');
  this.showWorking = document.getElementById('workingTB');
  this.checkIn = document.getElementById('checkInBtn');

  this.showMeeting.addEventListener('click',  this.showMeetinFunction.bind(this));
  this.showGames.addEventListener('click', this.showGamesFunction.bind(this));
  this.showQuiteTime.addEventListener('click', this.showQuiteTimeFunction.bind(this));
  this.showLearning.addEventListener('click', this.showLearningFunction.bind(this));
  this.showWorking.addEventListener('click', this.showWorkingFunction.bind(this));
}

roomApp.prototype.showMeetinFunction = function(){  
    document.getElementById('locID').value = this.meetings.location;
    document.getElementById('numID').value = this.meetings.numberOfSeats;
    document.getElementById('rmOID').value = this.meetings.roomsOccupied;
    document.getElementById('rmAID').value = this.meetings.numberOfRooms - this.meetings.roomsOccupied;
    document.getElementById('drt').value = this.meetings.Duration;
    this.currentLocation = 'meetings'
        //checks if room is full
    if((this.meetings.numberOfRooms - this.meetings.roomsOccupied)===0){
     this.checkIn.setAttribute('hidden','true');
    }
    else{
      this.checkIn.removeAttribute('hidden');
    }
  }

roomApp.prototype.showGamesFunction = function(){  
    document.getElementById('locID').value = this.games.location;
    document.getElementById('numID').value = this.games.numberOfSeats;
    document.getElementById('rmOID').value = this.games.roomsOccupied;
    document.getElementById('rmAID').value = this.games.numberOfRooms - this.games.roomsOccupied;
    document.getElementById('drt').value = this.games.Duration;
    this.currentLocation = 'games'
        //checks if room is full
    if((this.games.numberOfRooms - this.games.roomsOccupied)===0){
     this.checkIn.setAttribute('hidden','true');
    }
    else{
      this.checkIn.removeAttribute('hidden');
    }
  }

roomApp.prototype.showQuiteTimeFunction = function(){  
    document.getElementById('locID').value = this.quiteTime.location;
    document.getElementById('numID').value = this.quiteTime.numberOfSeats;
    document.getElementById('rmOID').value = this.quiteTime.roomsOccupied;
    document.getElementById('rmAID').value = this.quiteTime.numberOfRooms - this.quiteTime.roomsOccupied;
    document.getElementById('drt').value = this.quiteTime.Duration;
    this.currentLocation = 'quiteTime'
        //checks if room is full
    if((this.quiteTime.numberOfRooms - this.quiteTime.roomsOccupied)===0){
     this.checkIn.setAttribute('hidden','true');
    }
    else{
      this.checkIn.removeAttribute('hidden');
    }
  }

roomApp.prototype.showLearningFunction = function(){  
    document.getElementById('locID').value = this.learning.location;
    document.getElementById('numID').value = this.learning.numberOfSeats;
    document.getElementById('rmOID').value = this.learning.roomsOccupied;
    document.getElementById('rmAID').value = this.learning.numberOfRooms - this.learning.roomsOccupied;
    document.getElementById('drt').value = this.learning.Duration;
    this.currentLocation = 'learning'
        //checks if room is full
    if((this.learning.numberOfRooms - this.learning.roomsOccupied)===0){
     this.checkIn.setAttribute('hidden','true');
    }
    else{
      this.checkIn.removeAttribute('hidden');
    }
  }

  roomApp.prototype.showWorkingFunction = function(){  
    console.log(this.working.numberOfRooms - this.working.roomsOccupied)
    document.getElementById('locID').value = this.working.location;
    document.getElementById('numID').value = this.working.numberOfSeats;
    document.getElementById('rmOID').value = this.working.roomsOccupied;
    document.getElementById('rmAID').value = this.working.numberOfRooms - this.working.roomsOccupied;
    document.getElementById('drt').value = this.working.Duration;
    this.currentLocation = 'working'
    //checks if room is full
    if((this.working.numberOfRooms - this.working.roomsOccupied)===0){
     this.checkIn.setAttribute('hidden','true');
    }
    else{
      this.checkIn.removeAttribute('hidden');
    }
  }
window.onload = function() {
  window.roomApp = new roomApp();
};
/*
module.export = {
  roomApp : roomApp
}*/