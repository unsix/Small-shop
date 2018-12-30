export function getRedirectPath({type}){

  //根据用户信息 返回跳转地址
  //user.type /boss /genius
  //user.avatar /bossinfo /geniusinfo

  let url = (type === 'register' || type ==='changePwd')?'/login':'/home'
  return url
}