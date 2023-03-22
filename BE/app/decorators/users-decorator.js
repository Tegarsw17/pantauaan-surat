const loginDecorator = (user, token) =>{
  
    const loginUser = {
        username: user.fullname,
        role: user.role,
        token: token
      }

    return loginUser
  }

const profileDecorator = (payload) => {
  const profile = {
    fullname: payload.fullname,
    address: payload.address,
    phone: payload.phone,
    email: payload.email,
    role: payload.role,
    is_verified: payload.is_verified
  }

  return profile
}

    
  module.exports = {
    loginDecorator,
    profileDecorator
  }