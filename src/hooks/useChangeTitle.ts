import { useEffect, useState } from 'react';

function useChangeTitle() {
  const [timer, setTimer] = useState<number>(0);
  const [title, setTitle] = useState<string>('');
  const finalWord = 'Hey there !';
  const handler = (): string => {
    setTimeout(() => {
      setTitle(finalWord.slice(0, timer));
      if (timer < finalWord.length) {
        setTimer(prevState => prevState + 1);
      } else {
        setTimer(0);
      }
    }, 700);
    return title || finalWord;
  };
  useEffect(() => {
    document.title = handler();
    return () => {
      clearTimeout(handler());
    };
  }, [timer]);
}

export default useChangeTitle;
