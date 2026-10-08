import katex from "katex";
import "katex/dist/katex.min.css";

/* Typeset LaTeX with KaTeX. A typo in the source throws at build time instead of shipping. */
function render(tex: string, block: boolean) {
  return katex.renderToString(tex, {
    displayMode: block,
    throwOnError: true,
    strict: "ignore",
  });
}

/** Inline maths: <M tex="z_u" /> */
export function M({ tex }: { tex: string }) {
  return <span dangerouslySetInnerHTML={{ __html: render(tex, false) }} />;
}

/** Display maths. Scrolls sideways on narrow screens instead of overflowing. */
export function MathDisplay({ tex }: { tex: string }) {
  return (
    <div
      className="my-3 overflow-x-auto overflow-y-hidden py-1 text-[1.05rem] sm:text-[1.15rem]"
      dangerouslySetInnerHTML={{ __html: render(tex, true) }}
    />
  );
}
