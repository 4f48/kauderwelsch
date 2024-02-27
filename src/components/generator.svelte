<script>
	import { QRCodeSVG } from "@akamfoad/qrcode";
	let qrSVG;
	let data;
	let color;
	function genQR() {
		qrSVG = new QRCodeSVG(data, {
			bgColor: color
		});
	}
	let width = 100;
</script>

<form class="flex items-center">
	<fieldset name="QR code settings" class="flex flex-col">
		<input
			type="text"
			placeholder="Data"
			bind:value={data}
			on:input={genQR}
			class="border border-gray-300 drop-shadow-md focus:border-gray-600 focus:outline-none m-2 p-1 rounded-lg shadow-gray-300 text-sm"
		/>
		<input
			type="text"
			placeholder="Background colour"
			bind:value={color}
			on:input={genQR}
			class="border border-gray-300 drop-shadow-md focus:border-gray-600 focus:outline-none m-2 p-1 rounded-lg shadow-gray-300 text-sm"
		/>
	</fieldset>
	<output class="p-3 border border-black m-8 rounded-lg">
		<svg {width} height={width}>
			{@html qrSVG}
		</svg>
	</output>
</form>
