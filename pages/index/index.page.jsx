import React from 'react'
import { nanoid } from 'nanoid';

export { Page }

function Page() {
  console.log(nanoid());
  return <h1>{nanoid()}</h1>;
}
