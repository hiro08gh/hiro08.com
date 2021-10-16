import styled from 'styled-components';

export const ContentStyle = styled.div`
  :root {
    --nc-font-mono: Consolas, monaco, 'Ubuntu Mono', 'Liberation Mono', 'Courier New', Courier, monospace;
  }
  address,
  area,
  article,
  aside,
  audio,
  blockquote,
  datalist,
  details,
  dl,
  fieldset,
  figure,
  form,
  input,
  iframe,
  img,
  meter,
  nav,
  ol,
  optgroup,
  option,
  output,
  p,
  pre,
  progress,
  ruby,
  section,
  table,
  textarea,
  ul,
  video {
    margin-bottom: 1.5rem;
  }
  p code {
    font-size: 16px;
    margin-top: 40px;
    padding: 2px 6px;
    background: #f0f0f0;
    border-radius: 2px;
    font-weight: 600;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.5;
    color: var(--nc-tx-1);
    padding-top: 1rem;
  }
  h1,
  h2,
  h3 {
    color: var(--nc-tx-1);
    padding-bottom: 2px;
    margin-bottom: 8px;
    border-bottom: 1px solid var(--nc-bg-2);
  }
  h4,
  h5,
  h6 {
    margin-bottom: 0.3rem;
  }
  h1 {
    font-size: 2.25rem;
  }
  h2 {
    font-size: 1.85rem;
  }
  h3 {
    font-size: 1.55rem;
  }
  h4 {
    font-size: 1.25rem;
  }
  h5 {
    font-size: 1rem;
  }
  h6 {
    font-size: 0.875rem;
  }
  ul {
    padding-left: calc(1.4em + .7vw);
    list-style-image: url(/5242cdc…/77199/images/)
    li {
      margin-top: 12px;
    }
  }
  blockquote {
    position:relative;
    border-left:3px solid #DA8596;
    padding-left:10px;
  }
  a {
    color: var(--nc-lk-1);
  }
  
  p {
    font-size: 18px;
    margin-top: 32px;
    line-height: 1.8;
  }
  a:hover {
    color: var(--nc-lk-2);
  }
  blockquote {
    padding: 1.5rem;
    border-left:3px solid #333;
    margin-left: 0;
  }
  blockquote p {
    margin: 0;
  }
  blockquote *:last-child {
    padding-bottom: 0;
    margin-bottom: 0;
  }
  a button,
  button,
  input[type='submit'],
  input[type='reset'],
  input[type='button'] {
    font-size: 1rem;
    display: inline-block;
    padding: 6px 12px;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    background: var(--nc-lk-1);
    color: var(--nc-lk-tx);
    border: 0;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
    color: var(--nc-lk-tx);
  }
  a button[disabled],
  button[disabled],
  input[type='submit'][disabled],
  input[type='reset'][disabled],
  input[type='button'][disabled] {
    cursor: default;
    opacity: 0.5;
    /* Set the [X] cursor while hovering a disabled link */
    cursor: not-allowed;
  }
  .button:focus,
  .button:enabled:hover,
  button:focus,
  button:enabled:hover,
  input[type='submit']:focus,
  input[type='submit']:enabled:hover,
  input[type='reset']:focus,
  input[type='reset']:enabled:hover,
  input[type='button']:focus,
  input[type='button']:enabled:hover {
    background: var(--nc-lk-2);
  }
  code,
  pre,
  kbd,
  samp {
    /* Set the font family for monospaced elements */
    font-family: var(--nc-font-mono);
  }
  kbd {
    /* Makes the kbd element look like a keyboard key */
    border-bottom: 3px solid var(--nc-bg-3);
  }
  details {
    /* Make the <details> look more "clickable" */
    padding: 0.6rem 1rem;
    background: var(--nc-bg-2);
    border: 1px solid var(--nc-bg-3);
    border-radius: 4px;
  }
  summary {
    /* Makes the <summary> look more like a "clickable" link with the pointer cursor */
    cursor: pointer;
    font-weight: bold;
  }
  details[open] {
    /* Adjust the <details> padding while open */
    padding-bottom: 0.75rem;
  }
  details[open] summary {
    /* Adjust the <details> padding while open */
    margin-bottom: 6px;
  }
  details[open] > *:last-child {
    /* Resets the bottom margin of the last element in the <details> while <details> is opened. This prevents double margins/paddings. */
    margin-bottom: 0;
  }
  dt {
    font-weight: bold;
  }
  a {
    color: #0070f0;
    font-size: 18px;
    word-wrap: break-word;
    word-break: break-all;
  }
  dd::before {
    /* Add an arrow to data table definitions */
    content: '→ ';
  }
  hr {
    /* Reset the border of the <hr> separator, then set a better line */
    border: 0;
    border-bottom: 1px solid var(--nc-bg-3);
    margin: 1rem auto;
  }
  fieldset {
    margin-top: 1rem;
    padding: 2rem;
    border: 1px solid var(--nc-bg-3);
    border-radius: 4px;
  }
  img {
    width: 100%;
    box-shadow: 0 3px 15px #7373731a;
    border-radius: 2px;
  }
  legend {
    padding: auto 0.5rem;
  }
  table {
    /* border-collapse sets the table's elements to share borders, rather than floating as separate "boxes". */
    border-collapse: collapse;
    width: 100%;
  }
  td,
  th {
    border: 1px solid var(--nc-bg-3);
    text-align: left;
    padding: 0.5rem;
  }
  th {
    background: var(--nc-bg-2);
  }
  tr:nth-child(even) {
    /* Set every other cell slightly darker. Improves readability. */
    background: var(--nc-bg-2);
  }
  table caption {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  h2 {
    margin: 40px 0 20px;
    background-color: #e6e6e6;
    padding: 10px 20px;
    border-radius: 2px;
  }
  h3 {
    padding: 6px 0 6px 16px;
    margin: 50px 0 10px;
    font-size: 1.6em;
    position: relative;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: 0.08rem;
    &:before {
      content: "";
      position: absolute;
      width: 5px;
      height: 100%;
      border-radius: 3px;
      top: 0;
      left: 0;
      background: #333;
    }
    @media screen and (max-width: 499px) {
      font-size: 1.4em;
      margin: 30px 0 15px 0;
      padding: 6px 0 6px 14px;
    }
  textarea {
    /* Don't let the <textarea> extend off the screen naturally or when dragged by the user */
    max-width: 100%;
  }
  ul {
    li {
      margin-top: 12px;
    }
  }
  ol,
  ul {
    /* Replace the browser default padding */
    padding-left: 2rem;
  }
  li {
    margin-top: 0.4rem;
  }
  ul ul,
  ol ul,
  ul ol,
  ol ol {
    margin-bottom: 0;
  }
  mark {
    padding: 3px 6px;
    background: var(--nc-ac-1);
    color: var(--nc-ac-tx);
  }
  textarea,
  select,
  input {
    padding: 6px 12px;
    margin-bottom: 0.5rem;
    background: var(--nc-bg-2);
    color: var(--nc-tx-2);
    border: 1px solid var(--nc-bg-3);
    border-radius: 4px;
    box-shadow: none;
    box-sizing: border-box;
  }
`;
