import Button from '../Button/Button';
import './PhoneCard.scss';

const PhoneCard = ({ brand, model, price, img, onClick, id }) => {
	return (
		<div className='phone__card' id={id}>
			<div className='phone__image--container'>
				<img className='phone__image' src={img} alt='phone image' />
			</div>
			<div className='phone__info--container'>
				<h2 className='phone__info brand'>{brand}</h2>
				<h3 className='phone__info model'>{model}</h3>
				<h3 className='phone__info price'>$ {price}</h3>
			</div>
			<Button onClick={onClick}>MORE INFO</Button>
		</div>
	);
};

export default PhoneCard;
