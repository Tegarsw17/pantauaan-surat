function logout() {
  localStorage.clear()
  location.replace('./login.html')
}

function roleCanAccess(role_list, role) {
  var result = role_list.includes(Number(role))
  console.log(result)
  if (result == false) {
    location.replace('./401.html')
  }
}
