const loginDecorator = (user, token) =>{
  
    const loginUser = {
        username: user.fullname,
        jabatan: user.jabatan_role.jabatan,
        role: user.jabatan_role.role,
        role_id: user.jabatan_role.id,
        token: token
      }

    return loginUser
  }

const profileDecorator = (payload) => {
  const profile = {
    fullname: payload.fullname,
    phone: payload.phone,
    email: payload.email,
    jabatan_role_id: payload.jabatan_role_id,
  }

  return profile
}

const allUserDecorators = async (payload) => {
  const userMaps = payload.map((user) => {
    return {
      user_id: user.id,
      fullname: user.fullname,
      jabatan: user.jabatan_role.jabatan,
      role:  user.jabatan_role.role
    }
  })
  return await Promise.all(userMaps)
}
    
  module.exports = {
    loginDecorator,
    profileDecorator,
    allUserDecorators
  }