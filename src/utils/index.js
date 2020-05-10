export const formattedDate = date => {
	console.log(date)
	let formattedDate = new Date(date);
	console.log(formattedDate)
	return formattedDate.toLocaleString();
};