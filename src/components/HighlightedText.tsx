interface HighlightedTextProps {
  text: string;
  highlightedWords: string[];
  className?: string;
}

/**
 * Renders a string, wrapping any words that appear in `highlightedWords`
 * with the site's "marked" highlight style. Words are matched as whole
 * substrings so partial matches (e.g. "React" inside "React.js") still work.
 */
export default function HighlightedText({
  text,
  highlightedWords,
  className,
}: HighlightedTextProps) {
  if (highlightedWords.length === 0) {
    return <span className={className}>{text}</span>;
  }

  // Escape regex special characters in the highlighted words.
  const escaped = highlightedWords.map((word) =>
    word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  );
  const pattern = new RegExp(`(${escaped.join("|")})`, "g");

  const parts = text.split(pattern);

  return (
    <span className={className}>
      {parts.map((part, index) =>
        highlightedWords.includes(part) ? (
          <span key={index} className="marked">
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </span>
  );
}
