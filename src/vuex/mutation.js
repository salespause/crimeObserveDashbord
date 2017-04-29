export default {
  LOGIN(state, my_info){
    console.log('[MUTATIONS]Called LOGIN');
    console.log(my_info);
    state.access_token = my_info.data.access_token;
    console.log('[MUTATIONS] state.access_token = ' + state.access_token);
    state.my_id = my_info.data.data.id;
    console.log('[MUTATIONS] state.my_id = ' + state.my_id);
    state.is_login = true;
    localStorage.setItem("access_token", state.access_token);
  }
}
