import HTTPCodes from '../constants/httpCodes';
import mockedPhones from '../db/mockedPhones';

const getAll = (req, res) => {
	const phones = mockedPhones;
	try {
		res.status(HTTPCodes.Success).json(phones);
	} catch (error) {
		console.log(error);
		res.status(HTTPCodes.BadRequest).json({ error });
	}
};

const find = (req, res) => {
	const phoneId = req.params.id;
	const phones = mockedPhones;
	const findPhone = (id) => {
		return phones.filter((phone) => phone.id == id);
	};
	try {
		res.status(HTTPCodes.Success).json(findPhone(phoneId));
	} catch (error) {
		console.log(error);
		res.status(HTTPCodes.BadRequest).json({ error });
	}
};

export { getAll, find };
