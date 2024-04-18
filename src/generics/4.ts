type User = {
	name: string;
	surname: string;
	email: string;
	password: string;
};

const initialValues: User = {
	name: 'name',
	surname: 'surname',
	email: 'example@mail.com',
	password: 'password',
};

function createOrUpdateUser(initialValues: User, userValues: Partial<User>) {
	return { ...initialValues, ...userValues };
}

const createUser = createOrUpdateUser(initialValues, {
	email: 'user@mail.com',
	password: 'password123',
});
