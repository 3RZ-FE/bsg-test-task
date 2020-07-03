import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setUser(state, user) {
			state.user = user
		}
  },
  actions: {
    authRequest({commit}, data) {
			return new Promise((resolve, reject) => {
				const delay = parseInt(Math.random() * 3000);
			
				setTimeout(() => {

					// Неверные данные
					if (data.login !== 'admin' && data.password !== 'admin') {
						return reject({
							error: 'Неправильные логин/пароль!'
						})
					}
			
					// Данные верные, получили ответ с сервера
					const user = { name: 'Иван Иванов', email: 'example@gmail.com' }
					commit('setUser', user)
					resolve()
				}, delay)
			})
		}
  }
})

export default store