class User {
  // стаичне  поле з ролями користувача
  static USER_ROLE = {
    USER: 1,
    ADMIN: 2,
    DEVELOPER: 3,
  }
  // Статичний приватний масив для списку створених користувачів
  static #list = []

  // Конструктор -- це спеціальний метод в класах, який викликається
  // автоматично при створенні нового об'єкту
  // constructor (аргументи) {...}
  // конструктор з усіма потрібними значеннями
  constructor({ email, password, role }) {
    this.email = String(email).toLowerCase()
    this.password = password
    this.role = User.#convertRole(role)
  }

  // Приватний метод який отримує role та перевіряє його
  static #convertRole = (role) => {
    // конвертуємо роль у число
    role = Number(role)
    // перевіряжмо чи role в нас число, якщо роль не число то за
    // замовчуванням встановлюємо йому роль USER
    if (isNaN(role)) {
      role = this.USER_ROLE.USER
    }
    // Object.values()
    // Це вбудована функція яка повертає масив значень доступних
    // властивостей об'єкта в тому ж порядку, у якому
    // вони з'являються в коді
    // отримуємо список наших значень та перевіряємо через includes
    // чи є в нас конкретна наша роль в нашому списку
    // includes() -- ПЕРЕВІРКА НА НАЯВНІСТЬ РЯДКА -- це вбудована функція яка перевіряє
    // чи міститься певний рядок в іншому рядку
    role = Object.values(this.USER_ROLE).includes(role)
      ? // якщо є то ми її записуємо
        role
      : // ящо немає то ставимо по замовчуванню user
        this.USER_ROLE.USER
    // повертаэмо значення role
    return role
  }
  // статичний метод який приймає дані
  static create(data) {
    // створює нового юзера з данними
    const user = new User(data)
    // додає нового юзера в #list через push
    this.#list.push(user)

    console.log(this.#list)
  }

  static getByEmail(email) {
    return (
      this.#list.find(
        (user) =>
          user.email === String(email).toLowerCase(),
      ) || null
    )
  }
}

// Експортуємо класи
module.exports = { User }
