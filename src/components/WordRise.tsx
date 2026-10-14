import { Fragment, type CSSProperties } from 'react';

// Splits a heading into words that rise in one after another.
// Spaces stay outside the spans so the text still wraps and reads normally.
export default function WordRise({ text }: { text: string }) {
  return (
    <>
      {text.split(' ').map((word, i) => (
        <Fragment key={i}>
          <span className="word-rise" style={{ '--i': i } as CSSProperties}>
            {word}
          </span>{' '}
        </Fragment>
      ))}
    </>
  );
}
