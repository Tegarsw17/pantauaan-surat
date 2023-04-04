const loginDecorator = (user, token) =>{
  
    const loginUser = {
        username: user.fullname,
        jabatan_role_id: user.jabatan_role_id,
        token: token
      }

    return loginUser
  }

const profileDecorator = (payload) => {
  const profile = {
    fullname: payload.fullname,
    phone: payload.phone,
    email: payload.email,
    jabatan_role_id: user.jabatan_role_id,
  }

  return profile
}

    
  module.exports = {
    loginDecorator,
    profileDecorator
  }