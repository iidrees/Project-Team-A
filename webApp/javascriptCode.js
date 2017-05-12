function roomApp(){
 this.meetings = {'location':'1st Floor', 'numberOfSeats':12, 'roomsOccupied':2, 'Duration':12, 'numberOfRooms':5}
  this.games = {'location':'2nd Floor', 'numberOfSeats':12, 'roomsOccupied':1, 'Duration':12, 'numberOfRooms':2}
  this.quiteTime = {'location':'3rd Floor', 'numberOfSeats':12, 'roomsOccupied':1, 'Duration':12, 'numberOfRooms':10}
  this.learning = {'location':'4th Floor', 'numberOfSeats':12, 'roomsOccupied':4, 'Duration':12, 'numberOfRooms':10 }
  this.working = {'location':'5th Floor', 'numberOfSeats':12, 'roomsOccupied':7, 'Duration':12, 'numberOfRooms':15 }

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
  this.checkIn.addEventListener('click', this.checkINFunction.bind(this));
}

roomApp.prototype.showMeetinFunction = function(){  
    document.getElementById('locID').innerHTML = this.meetings.location;
    document.getElementById('numID').innerHTML = this.meetings.numberOfSeats;
    document.getElementById('rmOID').innerHTML = this.meetings.roomsOccupied;
    document.getElementById('rmAID').innerHTML = this.meetings.numberOfRooms - this.meetings.roomsOccupied;
    document.getElementById('rmTotal').innerHTML = this.games.numberOfRooms;
    //document.getElementById('drt').value = this.meetings.Duration;
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
    document.getElementById('locID').innerHTML = this.games.location;
    document.getElementById('numID').innerHTML = this.games.numberOfSeats;
    document.getElementById('rmOID').innerHTML = this.games.roomsOccupied;
    document.getElementById('rmAID').innerHTML = this.games.numberOfRooms - this.games.roomsOccupied;
    //document.getElementById('drt').value = this.games.Duration;
    document.getElementById('rmTotal').innerHTML = this.games.numberOfRooms;
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
    document.getElementById('locID').innerHTML = this.quiteTime.location;
    document.getElementById('numID').innerHTML = this.quiteTime.numberOfSeats;
    document.getElementById('rmOID').innerHTML = this.quiteTime.roomsOccupied;
    document.getElementById('rmAID').innerHTML = this.quiteTime.numberOfRooms - this.quiteTime.roomsOccupied;
    document.getElementById('rmTotal').innerHTML = this.quiteTime.numberOfRooms;
    //document.getElementById('drt').value = this.quiteTime.Duration;
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
    document.getElementById('locID').innerHTML = this.learning.location;
    document.getElementById('numID').innerHTML = this.learning.numberOfSeats;
    document.getElementById('rmOID').innerHTML = this.learning.roomsOccupied;
    document.getElementById('rmAID').innerHTML = this.learning.numberOfRooms - this.learning.roomsOccupied;
    document.getElementById('rmTotal').innerHTML = this.learning.numberOfRooms;
    //document.getElementById('drt').value = this.learning.Duration;
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
    document.getElementById('locID').innerHTML = this.working.location;
    document.getElementById('numID').innerHTML = this.working.numberOfSeats;
    document.getElementById('rmOID').innerHTML = this.working.roomsOccupied;
    document.getElementById('rmAID').innerHTML = this.working.numberOfRooms - this.working.roomsOccupied;
    document.getElementById('rmTotal').innerHTML = this.working.numberOfRooms;    
    //document.getElementById('drt').value = this.working.Duration;
    this.currentLocation = 'working'
    //checks if room is full
    if((this.working.numberOfRooms - this.working.roomsOccupied)===0){
     this.checkIn.setAttribute('hidden','true');
    }
    else{
      this.checkIn.removeAttribute('hidden');
    }
  }

roomApp.prototype.checkINFunction = function(){
    if (this.currentLocation === 'meetings'){
      this.meetings.roomsOccupied +=1;
    }
    switch(this.currentLocation){
    case 'meetings':
      this.meetings.roomsOccupied +=1;
      this.showMeetinFunction();
    break;
    case 'games':
      this.games.roomsOccupied +=1;
      this.showGamesFunction();
    break;
    case 'quiteTime':
      this.quiteTime.roomsOccupied +=1;
      this.showQuiteTimeFunction();
    break;
    case 'learning':
      this.learning.roomsOccupied +=1;
      this.showLearningFunction();
    break;
    case 'working':
      this.working.roomsOccupied +=1;
      this.showWorkingFunction();
    break;
  }
}
window.onload = function() {
  window.roomApp = new roomApp();
};
/*
module.export = {
  roomApp : roomApp
}*/