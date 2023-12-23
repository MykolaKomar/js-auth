import {
  Form,
  REG_EXP_EMAIL,
  REG_EXP_PASSWORD,
} from '../../script/form'

// Клас для форми реєстрації
class RecoveryForm extends Form {
  FIELD_NAME = {
    EMAIL: 'email',
  }
  FIELD_ERROR = {
    IS_EMPTY: 'Введіть значення в поле',
    IS_BIG: 'Дуже довге значення, приберіть зайве',
    EMAIL: 'Введіть коректе значення e-mail адреси',
  }

  // функція яка приймає name, value яка перевірятиме коректність
  // зачення
  validate = (name, value) => {
    if (String(value).length < 1) {
      return this.FIELD_ERROR.IS_EMPTY
    }

    if (String(value).length > 20) {
      return this.FIELD_ERROR.IS_BIG
    }

    if (name === this.FIELD_NAME.EMAIL) {
      if (!REG_EXP_EMAIL.test(String(value))) {
        return this.FIELD_ERROR.EMAIL
      }
    }
  }

  // функцію прив'яжемо на кнопку щоб відправляти данні на сервер
  submit = async () => {
    if (this.disabled === true) {
      this.validateAll()
    } else {
      console.log(this.value)

      this.setAlert('progress', 'Завантаження...')

      try {
        const res = await fetch('/recovery', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: this.converData(),
        })

        const data = await res.json()

        if (res.ok) {
          this.setAlert('success', data.message)

          location.assign('/recovery-confirm')
        } else {
          this.setAlert('error', data.message)
        }
      } catch (error) {
        this.setAlert('error', error.message)
      }
    }
  }

  converData = () => {
    return JSON.stringify({
      [this.FIELD_NAME.EMAIL]:
        this.value[this.FIELD_NAME.EMAIL],
    })
  }
}

// привяжемо клас RecoveryForm в середину window
window.recoveryForm = new RecoveryForm()
