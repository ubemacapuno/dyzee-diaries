export const getExcerpt = (text = '', maxLength = 200) => {
	const strippedString = text.replace(/(<([^>]+)>)/gi, '');

	if (text.length <= maxLength) {
		return strippedString;
	}
	return strippedString.slice(0, maxLength) + '...';
};
