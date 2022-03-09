import styles from "./styles.module.css";

function RenderTags(props) {
	const { tags } = props;
	return (
		<div className={styles.tagContainer}>
			{tags.map((tag, index) => (
				<p className={styles.tags} key={index}>
					{tag}
				</p>
			))}
		</div>
	);
}
export default RenderTags;
