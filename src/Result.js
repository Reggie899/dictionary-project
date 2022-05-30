export default function Result(props) {
  console.log("Result", props.result);

  if (props.result) {
    return <div className="Results">

<h2>{props.result.word}</h2>

    </div>;
  } else {
      return null;
  }
}
