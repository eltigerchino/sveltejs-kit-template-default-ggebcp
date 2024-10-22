<script>
	async function uploadFile(file) {
        let req = await fetch("/api/upload", {
            method: "POST",
            headers: {
                filename: file.name,
            },
            body: file,
            
        });

        if (!req.ok) {
            throw new Error("Upload failed.");
        }
				else {
					console.log("Request was ok")
				}
    }

	async function manualUpload(event) {
		for (let index = 0; index < event.target.files.length; index++) {
			const file = event.target.files[index];

			uploadFile(file)
					.then((file) => {
							console.log("uploaded file")
					})
					.catch((e) => console.log(e));
		}
	}
</script>

<input type="file" on:change={manualUpload} />