import axios from 'axios';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setOnePhone } from '../../redux/actions/phonesAction';
import './PhoneDetail.scss';

const PhoneDetail = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { id } = useParams();
	const [phone, setPhone] = useState([]);
	console.log(phone);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const { data } = await axios.get(`http://localhost:5000/phones/${id}`);
		dispatch(setOnePhone(data));
		setPhone(data);
	};

	const handleClick = () => {
		history.push('/');
	};

	return (
		<div className='detail__container'>
			{phone.map(({ id, brand, model, description, img }) => {
				return (
					<div key={id} className='detail__card'>
						<img className='detail__image' src={img} alt='phone' />
						<div className='detail__info--container'>
							<h1 className='detail__info detail-brand'>{brand}</h1>
							<h2 className='detail__info detail-model'>{model}</h2>
							<p className='detail__info detail-description'>{description}</p>
						</div>
						<Button className='detail__button' onClick={handleClick}>
							Go Back
						</Button>
					</div>
				);
			})}
		</div>
	);
};

export default PhoneDetail;
