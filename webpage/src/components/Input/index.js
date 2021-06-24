import React, { useState, useEffect, useRef } from "react";

import { Container } from "./styles";

export default function Input({
  children,
  symbol,
  tooltip,
  regex,
  multiline,
  ...props
}) {
  const [show, setShow] = useState(false);
  const inputRef = useRef({ value: null });

  useEffect(() => {
    let input = inputRef.current;
    if (input != null) {
      if (regex) {
        if (regex.test(input.value)) {
          input.classList.add("correto");
          if (input.classList.contains("errado"))
            input.classList.remove("errado");
          setShow(false);
        } else {
          input.classList.add("errado");
          if (input.classList.contains("correto"))
            input.classList.remove("correto");
          setShow(true);
        }

        if (input.value === "") {
          if (input.classList.contains("correto"))
            input.classList.remove("correto");

          if (input.classList.contains("errado"))
            input.classList.remove("errado");

          setShow(false);
        }
      }
    }
  }, [inputRef.current.value, regex]);

  return (
    <Container symbol={symbol ? 1 : 0}>
      {children}
      {show ? <span>{tooltip}</span> : ""}
      <div>{symbol}</div>
      {multiline ? (
        <textarea ref={inputRef} {...props} />
      ) : (
        <input ref={inputRef} {...props} />
      )}
    </Container>
  );
}
