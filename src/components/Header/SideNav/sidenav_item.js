import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
// import { connect } from 'react-redux';

const SidenavItem = ({ user }) => {
	const items = [
		{
			type: 'navItem',
			icon: 'home',
			text: 'Add Rule',
			link: '/',
			restricted: false
		},
		{
			type: 'navItem',
			icon: 'file-text-o',
			text: 'Rule View',
			link: '/cab/ruleView',
			restricted: true
		},
		{
			type: 'navItem',
			icon: 'file-text-o',
			text: 'Add Cab Rate',
			link: '/cab/addRate',
			restricted: true
		},
		{
			type: 'navItem',
			icon: 'file-text-o',
			text: 'Rates View',
			link: '/cab/cabRateView',
			restricted: true
		},
		{
			type: 'navItem',
			icon: 'file-text-o',
			text: 'Booking View',
			link: '/cab/cabBookingView',
			restricted: true
		},
		// {
		// 	type: 'navItem',
		// 	icon: 'sign-in',
		// 	text: 'Login',
		// 	link: '/login',
		// 	restricted: false,
		// 	exclude: true
		// },
		// {
		// 	type: 'navItem',
		// 	icon: 'file-text-o',
		// 	text: 'My reviews',
		// 	link: '/user/user-reviews',
		// 	restricted: true
		// },
		// {
		// 	type: 'navItem',
		// 	icon: 'file-text-o',
		// 	text: 'Add review',
		// 	link: '/user/add',
		// 	restricted: true
		// },
		// {
		// 	type: 'navItem',
		// 	icon: 'sign-out',
		// 	text: 'Logout',
		// 	link: '/user/logout',
		// 	restricted: true
		// }
	];

	const element = (item, i) => {
		return (
			<div key={i} className={item.type}>
				<Link to={item.link}>
					<FontAwesome name={item.icon} />
					{item.text}
				</Link>
			</div>
		);
	};

	const showItem = () => (

		items.map((item, i) => {


			return element(item, i)



		})

	);
	return <div>{showItem()}</div>;
};
// //getting user from the redux store.....
// function mapStateToProps(state) {
// 	return {
// 		user: state.user
// 	}
// }
export default SidenavItem;
// export default connect(mapStateToProps)(SidenavItem);
