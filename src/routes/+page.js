async function getForCode(fetch, code) {
	let request = new Request('https://countries.trevorblades.com/', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: `{
        country(code: "${code}") {
          name
          capital
        }
    }`
		})
	});

	const res = await fetch(request);
	const json = await res.json();
	return json.data;
}
export const load = async (event) => {
	const res1 = await getForCode(event.fetch, 'SE');
	const res2 = await getForCode(event.fetch, 'GB');
	console.info('RES1', JSON.stringify(res1, null , 2));
	console.info('RES2', JSON.stringify(res2, null, 2));

	return { fetchResp: res2 };
};
