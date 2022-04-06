interface Props {
  text: string,
}
function add(a: number, b: number): number {
  return a + b;
}

const Test: React.FC<Props> = (props) => {
  return (
    <div>
      <h3>this is test component</h3>
      <p>{props.text}</p>
      <p>{add(1, 2)}</p>
    </div>
  )
}

export default Test


