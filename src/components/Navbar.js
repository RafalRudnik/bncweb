export default function Navbar({ handleLanguage }) {
	return (
		<div className='nav' id='home'>
			<div className='logo'>
				<p>
					{'{'}
					<span>BNC</span>
					{'}'}
				</p>
			</div>
			<div className='nav__btns'>
				<LangButton onClick={handleLanguage}>PL</LangButton>
				<LangButton onClick={handleLanguage}>GB</LangButton>
			</div>
		</div>
	);
}

function LangButton({ onClick, children }) {
	return <button onClick={onClick}>{children}</button>;
}
