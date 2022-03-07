function RenderTags(props) {
  const { tags } = props;
  return (
    <div>
      {tags.map((tag, index) => (
        <div> {tag}</div>
      ))}
    </div>
  );
}
export default RenderTags;
