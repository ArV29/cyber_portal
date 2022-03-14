import './footer.css';

const FooterOne = () => {
	return (
		<div className='footer-1'>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
				nibh venenatis, tempus lectus vulputate, feugiat urna. Ut
				vulputate lobortis odio at cursus. Class aptent taciti sociosqu
				ad litora torquent per conubia nostra, per inceptos himenaeos.
				Nunc vehicula fringilla elit in consequat. Donec placerat erat
				id massa placerat, a viverra leo maximus.
			</p>
		</div>
	);
};

const FooterTwo = () => {
	return (
		<div className='footer-2'>
			<div>
				<h2>Reporting</h2>
				<p style={{ paddingRight: '0.8rem' }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
					ut nibh venenatis, tempus lectus vulputate, feugiat urna.
				</p>
			</div>
			<div>
				<h2>Frauds</h2>
				<p style={{ paddingLeft: '0.8rem' }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
					ut nibh venenatis, tempus lectus vulputate, feugiat urna.
				</p>
			</div>
			<div>
				<h2>Newsroom</h2>
				<p style={{ paddingRight: '0.8rem' }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
					ut nibh venenatis, tempus lectus vulputate, feugiat urna.
				</p>
			</div>
			<div>
				<h2>Prevention</h2>
				<p style={{ paddingLeft: '0.8rem' }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
					ut nibh venenatis, tempus lectus vulputate, feugiat urna.
				</p>
			</div>
		</div>
	);
};

const FooterThree = () => {
	return (
		<div className='footer-3'>
			<h1>FIND US</h1>
			<div className='footerIcons'>
				<i class='fa-brands fa-instagram'></i>
				<i class='fa-brands fa-twitter'></i>
				<i class='fa-brands fa-facebook'></i>
			</div>
		</div>
	);
};

const Footer = () => {
	return (
		<div className='footer'>
			<FooterOne />
			<FooterTwo />
			<FooterThree />
		</div>
	);
};

export default Footer;
