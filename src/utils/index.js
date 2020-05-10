export const formattedDate = date => {
	console.log(date)
	let formattedDate = new Date(date);
	return formattedDate.toLocaleString();
};
