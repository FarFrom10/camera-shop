import { EmptyListMessage } from '../../const';

type EmptyListProps = {
  message: EmptyListMessage;
}

function EmptyList({message}: EmptyListProps): JSX.Element {
  return (
    <h1 className="title title--h4">{message}</h1>
  );
}

export default EmptyList;
