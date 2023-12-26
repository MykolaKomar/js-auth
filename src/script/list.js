// 1) Завантаження даних -> Відобразити статус Завантаження
// 2) Відображення даних які ми завантажили (конвертація даних)
// 3) Якщо є помилка - виводимо статус помилки

export class List {
  STATE = {
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error',
  }

  status = null
  data = null
  element = null

  updateStatus = (status, data) => {
    this.status = status

    if (data) this.data = data

    this.updateView()
  }

  updateView = () => {}

  loadData = async () => {}

  convertData = () => {}
}
