import './navbar.css';

const SearchBar = () => {
	return (
		<div className='searchbar'>
			<button type='submit' className='searchBtn'>
				<i className='fa fa-search'></i>
			</button>
			<input
				type='text'
				className='searchTerm'
				placeholder='Search for Topics'
			/>
		</div>
	);
};

const Navbar = () => {
	return (
		<div className='navbar'>
			
			<div className='navlinks'>
				<a href='/'>Have a complaint?</a>
			</div>
			<div className='navlinks'>
				<a href='/'>Contact Us</a>
			</div>
			<SearchBar />
			<div className='navlinks'>
				<a href='/'>FAQ's</a>
			</div>
			<div className='navlinks'>
				<a href='/'>Have a suggestion?</a>
			</div>
			<div className='navbtn'>
				<button>Login</button>
			</div>
		</div>
	);
};

export default Navbar;
