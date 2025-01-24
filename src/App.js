import React from 'react'
import Header from './componets/Header'
import Footer from './componets/Footer'
import Items from './componets/Items'
import Categories from './componets/Categories'
import ShowFullItem from './componets/ShowFullItem'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			orders: [],
			currentItems: [],
			items: [
				{
					id: 1,
					title: 'Стул серый',
					img: 'chair.jpg',
					desc: 'Описание',
					category: 'chairs',
					price: '49.99',
				},
				{
					id: 2,
					title: 'Стол',
					img: 'table.jpg',
					desc: 'Описание',
					category: 'tables',
					price: '149.00',
				},
				{
					id: 3,
					title: 'Диван',
					img: 'sofa.jpg',
					desc: 'Описание',
					category: 'sofa',
					price: '549.99',
				},
				{
					id: 4,
					title: 'Лампа',
					img: 'lamp.jpg',
					desc: 'Описание',
					category: 'light',
					price: '25.00',
				},
				{
					id: 5,
					title: 'Стул белый',
					img: 'chair1.jpg',
					desc: 'Описание',
					category: 'chair',
					price: '27.00',
				},
			],
			showFullItem: false,
			fullItem: {},
		}
		this.state.currentItems = this.state.items
		this.addToOrder = this.addToOrder.bind(this)
		this.deleteOrder = this.deleteOrder.bind(this)
		this.chooseCategory = this.chooseCategory.bind(this)
		this.onShowItem = this.onShowItem.bind(this)
	}
	render() {
		return (
			<div className='wrapper'>
				<Header onDelete={this.deleteOrder} orders={this.state.orders} />
				<Categories chooseCategory={this.chooseCategory} />
				<Items
					onShowItem={this.onShowItem}
					items={this.state.currentItems}
					onAdd={this.addToOrder}
				/>
				{this.state.showFullItem && (
					<ShowFullItem
						item={this.state.fullItem}
						onAdd={this.addToOrder}
						onShowItem={this.onShowItem}
					/>
				)}
				<Footer />
			</div>
		)
	}
	onShowItem(item) {
		this.setState({ fullItem: item })
		this.setState({ showFullItem: !this.state.showFullItem })
	}
	chooseCategory(category) {
		if (category == 'all') {
			this.setState({
				currentItems: this.state.items,
			})
			return
		}

		this.setState({
			currentItems: this.state.items.filter(el => el.category == category),
		})
	}

	deleteOrder(id) {
		this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
	}

	addToOrder(item) {
		let isInArray = false
		this.state.orders.forEach(el => {
			if (el.id === item.id) isInArray = true
		})
		if (!isInArray) this.setState({ orders: [...this.state.orders, item] })
	}
}

export default App
