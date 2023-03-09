const verifyLogin = (userName) => {
  return userName.includes('@') ? { email: userName } : { userName }
}

export { verifyLogin }
