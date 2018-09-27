// write your code below!

describe ('functions'){
  describe ('happyHolidays'){
    it('returns "Happy Holidays!"'){
      expect (happyHolidays()).toEqual('Happy Holidays!')
    }
  }
}

describe ('happyHolidaysToMonique'){
  it('returns "Happy Holidays, Monique"'){
    expect (happyHolidaysToMonique).toEqual('Happy Holidays, Monique!')
  }
}

describe ('happyHolidayTo(Birthday, Monique'){
  it('returns "Happy Birthday, Monique!"'){
    expect (happyHolidayTo('Birthday, Monique')).toEqual('Happy Birthday, Monique!')
  }
}

describe ('holidayCountdown(Birthday, 345)'){
  it('returns "Its 345 days until Moniques Birthday!"'){
    expect (holidayCountdown("Birthday,345")).toEqual("Its 345 days until Moniques Birthday!")
  }
}