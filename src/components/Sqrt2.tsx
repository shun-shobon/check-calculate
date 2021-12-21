import { useState, useEffect, type VFC, type ChangeEvent } from "react";

import { plainText as sqrt2 } from "../assets/sqrt2.txt";

const Sqrt2: VFC = () => {
  const [length, setLength] = useState(0);
  const [validLength, setValidLength] = useState(0);
  const [text, setText] = useState("");

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value.replace(/[^\d]/g, "");
    setText(text);
  };

  useEffect(() => {
    const length = Math.min(text.length, sqrt2.length);
    setLength(length);

    for (let i = 0; i < length; i++) {
      if (text[i] !== sqrt2[i]) {
        setValidLength(i);
        return;
      }
    }
    setValidLength(length);
  }, [text, setLength, setValidLength, setText]);

  return (
    <section className="p-4 flex flex-col gap-4 rounded-lg border-2 border-cyan-200">
      <h2 className="text-xl">2の平方根(小数点以下1万桁まで)</h2>
      <div>
        結果: {length}桁中{validLength}桁合っています(小数点以下
        {validLength - 1}桁)
      </div>
      <textarea
        className="resize-none w-full rounded-lg border-2 border-grey-300 outline-teal-300"
        rows={10}
        placeholder="改行･空白は自動消去されます"
        value={text}
        onChange={handleChange}
      />
    </section>
  );
};

export default Sqrt2;
