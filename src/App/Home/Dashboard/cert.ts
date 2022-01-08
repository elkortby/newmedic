export const html = (name: string, age: string) => {
return `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body style="font-family: Arial, Helvetica, sans-serif;">
	<div style="
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		width: 100%;
	">
		<div style="width: 40%;">
			<h4>Dr: Oussama Benkortbi</h4>
			<p><strong>Type:</strong> Clinique de psychiatrie</h1>
			<p><strong>Agrément N°:</strong> 653</h1>
		</div>
			<div style="width: 20%;">
				<img src="logo.jpg" width="100px" height="100px">
			</div>
			<div style="width: 40%;">
				<p><strong>Nom:</strong> Hamid</h1>
				<p><strong>Prenom:</strong> Benhamodi</h1>
				<p><strong>Age:</strong> 24 Ans</h1>
			</div>
		</div>
	<h1 style="text-align: center;">ORDONNANCE</h1>
	<footer style="
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 30px;
	">
		<p><strong>Tele°:</strong> +213 5 50 89 43 48</h1>
		<p><strong>Fax°:</strong> +213 0 25 80 43 48</h1>
		<p><strong>Address:</strong> Rue D'alger Medea</h1>
	</footer>
</body>
</html>`
}