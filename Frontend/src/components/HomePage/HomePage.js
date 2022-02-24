import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPhones } from '../../redux/actions/phonesAction';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import PhoneCard from '../PhoneCard/PhoneCard';
import './HomePage.scss';

const HomePage = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [phone, setPhone] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const { data } = await axios.get('http://localhost:5000/phones');
		setPhone(data);
		dispatch(setPhones(data));
	};

	const handleClick = (id) => {
		history.push(`/${id}`);
	};

	return (
		<div className='main__container'>
			<h1 className='title'>Phone Catalog App</h1>
			<div className='phones__container'>
				{phone.map(({ id, brand, model, price, img }) => {
					return (
						<PhoneCard
							key={id}
							brand={brand}
							model={model}
							price={price}
							img={img}
							onClick={() => handleClick(id)}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default HomePage;
