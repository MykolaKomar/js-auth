// Клас для форми реєстрації
class SignupForm {
  // міститиме значення наших полей форми
  static value = {}

  // функція яка приймає name, value яка перевірятиме коректність
  // зачення
  static validate = (name, value) => {
    return true
  }

  // функцію прив'яжемо на кнопку щоб відправляти данні на сервер
  static submit = () => {
    console.log(this.value)
  }

  //   функція яка приймає name, value буде виводити значення
  // та якщо валідація проходить записуватимемо значення
  static change = (name, value) => {
    console.log(name, value)
    if (this.validate(name, value)) this.value[name] = value
  }
}

// привяжемо клас SignupForm в середину window
window.signupForm = SignupForm
