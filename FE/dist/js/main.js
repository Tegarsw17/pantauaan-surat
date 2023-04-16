function logout() {
  localStorage.clear()
  location.replace('./login.html')
}

function roleCanAccess(role_list, role) {
  var result = role_list.includes(role)
  if (result == false) {
    location.replace('./401.html')
  }
}
