<script>
	import { QRCodeSVG } from "@akamfoad/qrcode";
	import validateColor from "validate-color";

	let qrSVG;
	let data = "Example QR code";
	let color;
	let backgroundColor;
	let EC = "L";

	function genQR() {
		qrSVG = new QRCodeSVG(data, {
			bgColor:
				backgroundColor && validateColor(backgroundColor)
					? backgroundColor
					: "white",
			fgColor: color && validateColor(color) ? color : "black",
			level: EC,
			padding: 3,
		});
	}

	genQR();
</script>

<form class="flex items-center">
	<fieldset name="QR code settings" class="flex flex-col">
		<input
			type="text"
			name="data"
			placeholder="Data"
			bind:value={data}
			on:input={genQR}
			class="border border-gray-300 drop-shadow-md focus:border-gray-600 focus:outline-none m-2 p-1 rounded-lg shadow-gray-300 text-sm"
		/>
		<input
			type="text"
			placeholder="Colour"
			bind:value={color}
			on:input={genQR}
			class="border border-gray-300 drop-shadow-md focus:border-gray-600 focus:outline-none m-2 p-1 rounded-lg shadow-gray-300 text-sm"
		/>
		<input
			type="text"
			placeholder="Background colour"
			bind:value={backgroundColor}
			on:input={genQR}
			class="border border-gray-300 drop-shadow-md focus:border-gray-600 focus:outline-none m-2 p-1 rounded-lg shadow-gray-300 text-sm"
		/>
		<select bind:value={EC} on:input={genQR} class="bg-white border a border-gray-300 drop-shadow-md focus:border-gray-600 focus:outline-none m-2 p-1 rounded-lg shadow-gray-300 text-sm">
			<option value="L">L</option>
			<option value="M">M</option>
			<option value="Q">Q</option>
			<option value="H">H</option>
		</select>
	</fieldset>
	<output>
		<svg>
			{@html qrSVG}
		</svg>
	</output>
</form>
