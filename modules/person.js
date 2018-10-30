export default class Person{
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
