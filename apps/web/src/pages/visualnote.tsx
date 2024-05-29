import React from 'react';
import UploadYourImageField from '../components/uploadyourimagefield/UploadYourImageField';

type Props = {};

function visualnote(props: Props): JSX.Element {
  return (
    <>
      <main className="container">
        <UploadYourImageField />
      </main>
    </>
  );
}

export default visualnote;
