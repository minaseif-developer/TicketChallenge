const shouldParse = (data) => data && data[0] && (data[0] === "{" || data[0] === "[");

export function store(key, data, storage = window.localStorage) {
	if (!window.localStorage || !key) {
		return;
	}
	if (typeof data === "object") data = JSON.stringify(data);
	else data = String(data);
	storage.setItem(key, data);
}

export function read(key, storage = window.localStorage) {
	if (!storage || !key) {
		return;
	}
	let data = localStorage.getItem(key);
	if (!data) {
		return;
	}

	const parse = JSON.parse;
	try {
		return shouldParse(data) ? JSON.parse(data) : data;
	} catch (error) {
		return parse(`"${data}"`);
	}
}

export function remove(key, storage = window.localStorage) {
	if (!storage || !key) {
		return;
	}

	storage.removeItem(key);
}
