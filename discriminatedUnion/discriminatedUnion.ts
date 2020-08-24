import { get, has } from 'lodash';

interface Name {
	name?: number;
}

interface Age {
	age?: string
}

const discriminatedUnion = (obj: Name | Age) => {
	if (obj.name) {
		console.log(obj.name);
	} else if (obj.age) {
		console.log(obj.age);
	}

	if (obj.hasOwnProperty(name)) {
		console.log(obj.name)
	} else if (obj.hasOwnProperty(age)) {
		console.log(obj.age)
	}

	if (get(obj, 'name')) {
		console.log(obj.name);
	} else if (get(obj, 'age')) {
		console.log(obj.age);
	}

	if (has(obj, 'name')) {
		console.log(obj.name);
	} else if (has(obj, 'age')) {
		console.log(obj.age);
	}

	if ('name' in obj) {
		console.log(obj.name);
	} else if ('age' in obj) {
		console.log(obj.age);
	}
}
