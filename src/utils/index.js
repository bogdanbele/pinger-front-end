export const formattedDate = date => {
	let formattedDate = new Date(date);
	return formattedDate.toLocaleString();
};