import API from '../util/api.js';

export const login = ({ dispatch }, email, password) => {
  console.log('[ACTION]login')
  API.login(email, password).then((response) => {
    console.log("[ACTION] login: 成功. mutationに移行");
    dispatch('LOGIN', response)
  }).catch((reason) => {
    console.log('[ACTION] login: エラー');
  })
}
