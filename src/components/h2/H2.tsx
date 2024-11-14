interface H2Props {
  titleContent: string;
  importantWord: string;
}

export default function H2({ titleContent, importantWord }: H2Props) {
  return (
    <h2>
      {titleContent
        .split(" ")
        .map((word, index) =>
          word === importantWord ? (
            <span key={index}> {word} </span>
          ) : (
            word + " "
          )
        )}
    </h2>
  );
}
