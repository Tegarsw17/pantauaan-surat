var token = localStorage.getItem('token')
var role = localStorage.getItem('role_id')
var username = localStorage.getItem('username')
var linkApi = 'http://localhost:5151/v1/api'
var linkPdf = 'http://localhost:5151/v1/pdf'

function logout() {
  localStorage.clear()
  location.replace('./login.html')
}

function roleCanAccess(role_list, role) {
  var result = role_list.includes(Number(role))
  if (result == false) {
    location.replace('./401.html')
  }
}

const getSpeechValue = async () => {
  window.SpeechRecognition =
    window.webkitSpeechRecognition || window.SpeechRecognition
  const recognition = new window.SpeechRecognition()
  // recognition.stop()
  var speech = true
  recognition.interimResults = true
  recognition.lang = 'id-ID'
  // console.log(recognition)

  recognition.addEventListener('result', (e) => {
    const transcript = Array.from(e.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join('')
    document.getElementById('swal2-input').value = transcript
  })

  if (speech == true) {
    recognition.start()
  }

  const { value: hasil } = await Swal.fire({
    title: 'Cari Surat',
    input: 'text',
    inputLabel: 'Silahkan berbicara',
    showCancelButton: true,
  })

  if (hasil) {
    $('#example1_filter label input').val('jabar').trigger('keyup')
    recognition.stop()
  }
}

$('#btnFind').on('click', function async(e) {
  e.preventDefault()
  Swal.fire({
    icon: 'question',
    showCancelButton: true,
    title: 'Cari Surat',
    confirmButtonText: 'Mulai',
  }).then((result) => {
    if (result.isConfirmed) {
      getSpeechValue()
    }
  })
})

function getPdf(event) {
  var id = event.target.dataset.target
  axios
    .get(`${linkApi}/surat/${id}`, {
      headers: {
        authorization: token,
      },
    })
    .then((res) => {
      var file = res.data.data.file[0]
      $('.modal-body').load('modal.html', (data) => {
        $('#title').text(file.filename)
        $('#img').attr('src', `${linkPdf}/${file.filename}`)
        $('#imgModal').modal({ show: true })
      })
    })
}
