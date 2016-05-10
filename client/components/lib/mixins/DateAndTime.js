var DateAndTimeMixin = {
  _today(){
    return moment().unix();
  }
}

this.DateAndTimeMixin = DateAndTimeMixin;
