<script>
	import { QRCodeSVG } from "@akamfoad/qrcode";
	import validateColor from "validate-color";
	import { v1 } from 'uuid';

	let qrSVG;
	let data = "Example QR code";
	let color;
	let backgroundColor;
	let EC = "L";
	let fileName;

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

		fileName = v1();
	};

	function download(qrSVG) {
		const blob = new Blob([qrSVG], { type: "image/svg+xml" });
		const url = URL.createObjectURL(blob);
		return url;
	};

	genQR();
</script>

<form
	class="flex items-center bg-white p-5 rounded-2xl space-x-12 px-12 drop-shadow-lg"
>
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
		<select
			bind:value={EC}
			on:input={genQR}
			class="bg-white border cursor-pointer border-gray-300 drop-shadow-md focus:border-gray-600 focus:outline-none m-2 p-1 rounded-lg shadow-gray-300 text-sm"
		>
			<option value="L">L</option>
			<option value="M">M</option>
			<option value="Q">Q</option>
			<option value="H">H</option>
		</select>
		<a
			class="bg-black text-white m-2 p-2 rounded-lg text-sm text-center hover:bg-neutral-800 drop-shadow-md"
			href={download(qrSVG)}
			download={fileName}>Download SVG</a
		>
	</fieldset>
	<output>
		<svg
			width="12rem"
			height="12rem"
			style="background-color: {backgroundColor &&
			validateColor(backgroundColor)
				? backgroundColor
				: 'white'};"
			class="rounded-lg p-3 m-5 drop-shadow-md"
		>
			{@html qrSVG}
		</svg>
	</output>
</form>
