class carDesc {
    constructor(company, model , year) {
        this.company = company,
        this.model = model,
        this.year = year
    }

    getDesc() {
        return `This is a ${this.company} ${this.model} ${this.year}`;
    }
    
  }

  let carDescRes = new carDesc ('BMW', 'CS6', 2020)

  console.log(carDescRes.getDesc());