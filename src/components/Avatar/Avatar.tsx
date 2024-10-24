interface Avatar {
	firstname: string;
	lastname: string;
	imgsrc: string;
}

function Avatar({ firstname, lastname, imgsrc }: Avatar) {
	return (
		<>
			<img src={imgsrc} alt={firstname} />
			<p>
				{firstname} {lastname}
			</p>
		</>
	);
}

export default Avatar;
