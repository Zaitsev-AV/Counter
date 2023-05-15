export const loadMinCount = (): number => {
	const newMinCount = localStorage.getItem('key_countMin')
	if ( !newMinCount ) {
		return 0
	}
	return JSON.parse( newMinCount )
}