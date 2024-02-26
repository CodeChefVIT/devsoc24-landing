import Timeline from "@/components/Timeline";
import About from "@/components/about";
import ActionButton from "@/components/actionButton";
import Main from "@/components/main";
import SmoothScrolling from "@/components/smoothscrolling";
import TypewriterEffect from "@/components/terminal/typewriter";
import { useState } from "react";

const help = [
  '<span class="">WDWKJDCNWKJC</span>',
  '<span class="">WUDC GWUDYGC WQUYDCG WQUODCG </span>',
  '<span class="">WIDCHWCW</span>',
  '<span class="">JQSCHNJ  CIHQIE WQCNWIKCJNWKCWNDCKJW DN</span> ',
  '<span class="">OKOEWKCWJDIOCJWI CWCJWQJDCJWC.........</span> ',
  '<span class="">WDKNCWDKJ</span> ',
  '<span class="">WDOCOWQCJQDWODC</span> ',
  '<span class="">IBC QICUDH QINCQWIC UHDWCIUWDCHIWUDHCWDCJIWDCMWD W</span> ',
  '<span class="">NJDJCDCNDJCND..................</span> ',
  '<span class="">DCNQW CIQWC WQODC WDC Q</span>',
  '<span class="">WDCQN WD QC</span> ',
  '<span class="">WJDCN QWINCQJWCNQWCKJN DWCNWD CKNWDC.........</span> ',
  '<span class="">QWIJNCI WDUHCIWDCN WIDCKJNW DICKJQWDDNCQW</span> ',
  '<span class="">WQDCN WDKCNJWQLKDCJQWNDCKJLQWN CKLDNCQWKDC WJDCNQKLW DNCQWJK</span>',
  '<span class="">WKDNCW KJDCNWKDNCWJKCWKDJCNWDLKJC</span> ',
  '<span class="">WQDJCNIUWQHCUWHDCIUHWQUDCHUIWHDCW</span> ',
  '<span class="">WDCIHWDCIUHWIUDCHIUWQHCQWHCU.........</span> ',
  '<span class="">JWD N28DH  92NJK IWCJIJDWCNW</span> ',
  '<span class="">WQINJC IUWCINWCD</span> ',
  '<span class="">JIWEIUCIUWHCIU</span> ',
  '<span class="">LOADING....................................</span>  ',

  "<br>",
];

export default function Home() {
  const [typingCompleted, setTypingCompleted] = useState(false);
  const handleTypingComplete = () => {
    setTypingCompleted(true);
  };
  return (
    <>
      {!typingCompleted ? (
        <div className="pl-3 ">
          <TypewriterEffect
            textLines={help}
            onTypingComplete={handleTypingComplete}
          />
        </div>
      ) : (
        <SmoothScrolling>
          <section id="Main">
            <Main />
          </section>

          <About />
          <div className="fixed bottom-0 z-40 mb-10 flex w-full justify-center">
            <ActionButton body="Kuch toh" link="/" />
          </div>
        </SmoothScrolling>
      )}
    </>
  );
}
