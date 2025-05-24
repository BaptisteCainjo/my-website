import H2Style from "./H2.module.scss";

interface H2Props {
  titleContent: string;
  importantWord: string;
}

export default function H2({ titleContent, importantWord }: H2Props) {
  return (
    <h2 className={H2Style["sub-title"]}>
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
