import React from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import styles from '@/styles/components/CodeBlock.module.scss';

interface CodeBlockProps {
  code: string;
  language: string;
  showLineNumbers?: boolean;
  title?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  language, 
  showLineNumbers = true,
  title
}) => {
  return (
    <div className={styles.codeBlockWrapper}>
      {title && <div className={styles.codeBlockTitle}>{title}</div>}
      <Highlight
        theme={themes.vsDark}
        code={code.trim()}
        language={language as any}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={`${className} ${styles.codeBlock}`} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {showLineNumbers && <span className={styles.lineNumber}>{i + 1}</span>}
                <span className={styles.lineContent}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeBlock; 