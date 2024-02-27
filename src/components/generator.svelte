<script>
	import { onMount } from 'svelte';
	import { QRCodeSVG } from '@akamfoad/qrcode';
	let qrSVG;
	let data;
	function genQR() {
		qrSVG = new QRCodeSVG(data);
	};
	let width = 100;
</script>

<body>
	<input type="text" bind:value={data} on:input={genQR}/>
	<svg {width}>
		{@html qrSVG}
	</svg>
</body>
