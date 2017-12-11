
import * as mod from './view.js';

var dUser = {
      id          : 0,
      active      : 0,
      name        : '',
      surname     : '',
      middlename  : '',
      title       : 0,
      Gender      : 1,
      position    : '',
      companyID   : 0,
      companyName : '',
      divisionID  : 0,
      divisionName: '',
      addressID   : 1,
      email       : {
        address     : '',
        reviewLevel : 0,
        reviewDate  : '',
        bounced     : 0,
        bounceDate  : ''
      },
      mobile      : '',
      tel         : '',
      tel_alt     : '',
      tel_int     : ''
};

var User = function(){
      this.id          = 0;
      this.profileID   = 0;
      this.active      = 0;
      this.name        = '';
      this.surname     = '';
      this.middlename  = '';
      this.title       = 0;
      this.set 
      this.Gender      = 1;
      this.position    = '';
      this.companyID   = 0;
      this.companyName = '';
      this.divisionID  = 0;
      this.divisionName= '';
      this.addressID   = 1;
      this.email       = {
        address     : '',
        reviewLevel : 0,
        reviewDate  : '',
        bounced     : 0,
        bounceDate  : ''
      };
      this.mobile      = '';
      this.tel         = '';
      this.tel_alt     = '';
      this.tel_int     = ''
};

var Profile = function(){
      this.id       = 0;
      this.userID   = 0;
      this.password = '';
      this.userName = '';
      this.hash     = '';
      this.salt     = '';
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

var user = new User();
user.email.address = 'jerome@glopac.com';

console.log(user);
