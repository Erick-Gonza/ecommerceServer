const verifyLogin = (userName) => {
  return userName.includes('@') ? { email: userName } : { userName: userName }
}

export { verifyLogin }
