import { makeAutoObservable } from 'mobx'

class Cart {
	cart = []

	constructor() {
		makeAutoObservable(this)
	}
	
	addCart(card) {
		const find = this.cart.find(c => c.id === card.id)

		if (find) {
			find.count++
		} else {
			this.cart.push({
				...card,
				count: 1,
			})
		}
	}

	removeCart(id) {
		const find = this.cart.find(c => c.id === id)

		if (find.count === 1) {
			this.cart = this.cart.filter(c => c.id !== id)
		} else {
			find.count--
		}
	}
}

export default new Cart()
