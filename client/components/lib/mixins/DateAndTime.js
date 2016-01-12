var DateAndTimeMixin = {
  _today(){
    return moment().toDate();
  }
}

this.DateAndTimeMixin = DateAndTimeMixin;
