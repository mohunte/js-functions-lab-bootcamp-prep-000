// write your code below!

var string = 'Happy Holidays';

describe ('functions'){
  describe ('happyHolidays'){
    it('returns "Happy Holidays!"'){
      expect (happyHolidays()).toEqual('Happy Holidays!')
    }
  }

describe ('happyHolidaysTo(name)'){
  it('returns "Happy Holidays, ${name}"'){
    expect (happyHolidaysToMonique).toEqual('Happy Holidays, Monique!')
  }
}

describe ('happyHolidayTo(holiday,name'){
  it('returns "Happy ${hoiday}, ${name}!"'){
    expect (happyHolidayTo('Birthday, Monique')).toEqual('Happy Birthday, Monique!')
  }
}

describe ('holidayCountdown(holiday,days)'){
  it('returns "It\'s ${days} until Moniques Birthday!"'){
    expect (holidayCountdown("Birthday,345")).toEqual("Its 345 days until Moniques Birthday!")
    }
  }
}

function happyHolidays(string){
  return "Happy Holidays!";
}