import React from 'react';

type Props = {};

function Loader(props: Props): JSX.Element {
  return (
    <>
      {' '}
      <div className="modal">
        <div className="loader mb-4"></div>
        <p className="text-lg bg-transparent font-semibold">
          Generatng Your Notes
        </p>
      </div>
    </>
  );
}
export default Loader;
