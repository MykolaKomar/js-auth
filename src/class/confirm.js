class Confirm {
  // список кодів
  static #list = []

  constructor(data) {
    this.code = Confirm.generateCode()
    this.data = data
  }
  // генерує 4-х значний код
  static generateCode = () => 
    Math.floor(Math.random() * 9000) + 1000
  
  // створює
  static create = (data) => {
    // кладемо в ліст новий код з даними
    this.#list.push(new Confirm(data))
    // видаляємо отриманий код через 24 години
    setTimeout(() => {
      this.delete(code)
    }, 24 * 60 * 60 * 1000) // 24 години в мілісекондах

    console.log(this.#list)
  }

  // видаляє код
  static delete = (code) => {
    const length = this.#list

    this.#list = this.#list.filter(
      (item) => item.code !== code,
    )

    return length > this.#list.length
  }

  static getData = (code) => {
    const obj = this.#list.find(
      (item) => item.code === code,
    )

    return obj ? obj.data : null
  }
}

// Експортуємо класи
module.exports = { Confirm }
