export const List = ({ container, titles, links, ul, title, data }) => {
	return (
		<div className={container}>
			<h2 className={titles}>{title}</h2>
			<ul className={ul}>
				{data.map((list, i) => (
					<li className={links} key={i}>
						{list}
					</li>
				))}
			</ul>
		</div>
	)
}
