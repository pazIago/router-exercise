import React from "react";
import contato from "../assets/contato.jpg";
import { useSpring, animated } from "react-spring";

const Contato = () => {

  const animation = useSpring({
    from: { opacity: 0, transform: "translateX(-500px)" },
    to: { opacity: 1, transform: "translateX(0px)" },
  });

  return (
    <animated.div className="flex gap-5" style={animation}>
      <img className="w-2/5 rounded-2xl" src={contato} />
      <div className="flex flex-col gap-1">
        <p className="font-bold font-serif text-2xl">Entre em Contato</p>
        {contactInfo.map((item) => (
          <p
            key={item}
            className="text-medium before:block before:bg-slate-300 before:w-4 before:h-0.5 flex items-end"
          >
            {item}
          </p>
        ))}
      </div>
    </animated.div>
  );
};

const contactInfo = [
  "iagopaz@hotmail.com.br",
  "(51) 9 9211-4211",
  "Rua Ali Perto, 99",
];

export default Contato;
