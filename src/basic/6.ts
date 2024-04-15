interface IPerson {
	name: string;
	age: number;
	email: string;
	address?: {
		city: string;
		country: string;
	};
}

const mango: IPerson = {
	name: 'Mango',
	age: 30,
	email: 'mango@example.com',
	address: {
		city: 'New York',
		country: 'USA',
	},
};

const poly: IPerson = {
	name: 'Poly',
	age: 30,
	email: 'poly@example.com',
};
