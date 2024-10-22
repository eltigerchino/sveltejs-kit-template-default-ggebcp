export async function POST(event) {
	let filename = event.request.headers.get('filename');
	const stream = event.request.body;
	console.log('🚀 ~ POST ~ stream:', stream);

	// Data validation
	if (!filename) return new Response('No path received', { status: 400 });
	if (!stream) return new Response('No body received', { status: 400 });

	return new Response();
}
