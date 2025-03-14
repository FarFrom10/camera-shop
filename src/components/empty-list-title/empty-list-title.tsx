import { EmptyListMessage } from '../../const';

type EmptyListTitleProps = {
  message: EmptyListMessage;
}

function EmptyListTitle({message}: EmptyListTitleProps): JSX.Element {
  return (
    <h1 className="title title--h4" data-testid='emptyListTitle'>{message}</h1>
  );
}

export default EmptyListTitle;
