import { useContext } from 'react';
//import { BeersContext } from '../../context/beers.context';
export function Edit(): JSX.Element {
  // const {  } = useContext(BeersContext);
  return (
    <>
      <div className="edit-button">
        <button onClick={Edit}>Edit</button>
      </div>
    </>
  );
}
