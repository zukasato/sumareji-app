//setting.html ダイアログ　tost

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

const toastTrigger2 = document.getElementById('flexSwitchCheckChecked')
const toastLiveExample2 = document.getElementById('liveToast')
if (toastTrigger2) {
  toastTrigger2.addEventListener('click', function () {
    const toast = new bootstrap.Toast(toastLiveExample2)

    toast.show()
  })
}