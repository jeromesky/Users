
import * as mod from './view.js';



class User{
  constructor(userID = 0) {
        this._id         = userID;
        this._name       = '';
        this._surname    = '';
        this._middlename = '';
        this._profileID  = 0;
        this._active     = 0;
        this._title      = '';
        this._titleID    = 0;
        this._genderID   = 1;
        this._gender     = '';
        this._position   = '';
        this._companyID  = 0;
        this._companyName= '';
        this._divisionID = 0;
        this._divisionName= '';
        this._addressID  = 0;
        this._mobile     = '';
        this._tel        = '';
        this._tel_alt    = '';
        this._tel_int    = '';
        this._email      = {
          address     : '',
          reviewLevel : 0,
          reviewDate  : '',
          bounced     : 0,
          bounceDate  : ''
      };
    }
    //end constructor
    //start prototype
    get id() { return this._id; }
    set id(value) { this._id = parseInt(value); }

    get getName() { return this._name; }
    set setName(value) { this._name = value; }

    get getSurname() { return this._surname; }
    set setSurname(value) { this._surname = value; }

    get getMiddlename() { return this._middlename; }
    set setMiddlename(value) { this._middlename = value; }

    get getProfileID() { return this._profileID; }
    set setProfileID(value) { this._profileID = parseInt(value); }

    get getActive() { return this._active; }
    set setActive(value) { this._active = value; }

    get getTitle() { return this._title; }
    set setTitle(value) { this._title = value; }

    get getTitleID() { return this._titleID; }
    set setTitleID(value) { this._titleID = parseInt(value); }

    get getGenderID() { return this._genderID; }
    set setGenderID(value) { this._genderID = parseInt(value); }

    get getGender() { return this._gender; }
    set setGender(value) { this._gender = value; }

    get getPosition() { return this._position; }
    set setPosition(value) { this._position = value; }

    get getCompanyID() { return this._companyID; }
    set setCompanyID(value) { this._companyID = parseInt(value); }

    get getCompany() { return this._company; }
    set setCompany(value) { this._company = value; }

    get getDivisionID() { return this._divisionID; }
    set setDivisionID(value) { this._divisionID = parseInt(value); }

    get getDivisionName() { return this._divisionName; }
    set setDivisionName(value) { this._divisionName = value; }

    get getAddressID() { return this._addressID; }
    set setAddressID(value) { this._addressID = parseInt(value); }

    get getMobile() { return this._mobile; }
    set setMobile(value) { this._mobile = value; }

    get getTel() { return this._tel; }
    set setTel(value) { this._tel = value; }

    get getTel_alt() { return this._tel_alt; }
    set setTel_alt(value) { this._tel_alt = value; }

    get getTel_int() { return this._tel_int; }
    set setTel_int(value) { this._tel_int = value; }

    get getEmail() { return this._email.address; }
    set setEmail(value) { this._email.address = value; }

    get getRevLevel() { return this._email.reviewLevel; }
    set setRevLevel(value) { this._email.reviewLevel = value; }

    get getRevDate() { return this._email.reviewDate; }
    set setRevDate(value) { this._email.reviewDate = value; }

    get getBounced() { return this._email.bounced; }
    set setBounced(value) { this._email.bounced = value; }

    get getBounceDate() { return this._email.bounceDate; }
    set setBounceDate(value) { this._email.bounceDate = value; }

}

var Profile = function(){
      this.profileID= 0;
      this.userID   = 0;
      this.password = '';
      this.userName = '';
      this.hash     = '';
      this.salt     = '';
      this.bounced  = 0;
};

var Address = function(){
      this.id         = 0;
      this.street     = '';
      this.street2    = '';
      this.code       = '';
      this.city       = '';
      this.countryID  = 0;
      this.countryName= '';

};

var userWidget = new User()//x  Object.create(User.prototype);// User.prototype/ //new User();//Object.create(User.prototype);// new User();
userWidget.setProfileID = 99;
console.log('getter: ', userWidget.getProfileID);
console.log('Print userWidget.getProfileID: ', userWidget.getProfileID);
// userWidget.setProfileID = 938;
userWidget.setEmail = 'jerome@glopac.com';

console.log(userWidget);


(function(){
  for(let key in userWidget){
    console.log( (key.charAt(0) === '_') ? key.substr(1) : key, ': ' + userWidget[key]);
  }
  if( typeof userWidget  === 'object'){
    console.log('true object');
  }


})();






// var dUser = {
//       id          : 0,
//       active      : 0,
//       name        : '',
//       surname     : '',
//       middlename  : '',
//       title       : 0,
//       gender      : 1,
//       position    : '',
//       companyID   : 0,
//       companyName : '',
//       divisionID  : 0,
//       divisionName: '',
//       addressID   : 1,
//       email       : {
//         address     : '',
//         reviewLevel : 0,
//         reviewDate  : '',
//         bounced     : 0,
//         bounceDate  : ''
//       },
//       mobile      : '',
//       tel         : '',
//       tel_alt     : '',
//       tel_int     : ''
// };

// var User = function(){
//       this.id          = 0;
//       this.profileID   = 0;
//       this.active      = 0;
//       this.name        = '';
//       this.surname     = '';
//       this.middlename  = '';
//       this.title       = 0;
//       this.gender      = 1;
//       this.position    = '';
//       this.companyID   = 0;
//       this.companyName = '';
//       this.divisionID  = 0;
//       this.divisionName= '';
//       this.addressID   = 1;
//       this.email       = {
//         address     : '',
//         reviewLevel : 0,
//         reviewDate  : '',
//         bounced     : 0,
//         bounceDate  : ''
//       };
//       this.mobile      = '';
//       this.tel         = '';
//       this.tel_alt     = '';
//       this.tel_int     = ''
// };
//
// Object.defineProperty(User, 'profileID', {
//       get: function() { return this.profileID; },
//       set: function(value) { this.profileID =value; }
//   });
