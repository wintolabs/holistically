"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${index}`}
                  className={cn(
                    `dark:text-white text-black opacity-0 hidden`,
                    word.className
                  )}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </motion.div>
    );
  };
  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};

// export const TypewriterEffectSmooth = ({
//   words,
//   className,
// }: {
//   words: {
//     text: string;
//     className?: string;
//   }[];
//   className?: string;
//   cursorClassName?: string;
// }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   // Split text inside of words into array of characters
//   const wordsArray = words.map((word) => {
//     return {
//       ...word,
//       text: word.text.split(""),
//     };
//   });

//   useEffect(() => {
//     // Start animation immediately, then loop
//     const startAnimation = () => {
//       setIsVisible(false);
//       setTimeout(() => setIsVisible(true), 100);
//     };

//     startAnimation();

//     // Create infinite loop
//     const interval = setInterval(() => {
//       startAnimation();
//     }, 4000); // Restart every 4 seconds

//     return () => clearInterval(interval);
//   }, []);

//   const renderWords = () => {
//     return (
//       <div>
//         {wordsArray.map((word, idx) => {
//           return (
//             <div key={`word-${idx}`} className="inline-block">
//               {word.text.map((char, index) => (
//                 <span
//                   key={`char-${index}`}
//                   className={cn(`text-white font-bold`, word.className)}
//                 >
//                   {char}
//                 </span>
//               ))}
//               &nbsp;
//             </div>
//           );
//         })}
//       </div>
//     );
//   };

//   return (
//     <div className={cn("flex space-x-1", className)}>
//       <motion.div
//         className="overflow-hidden"
//         initial={{ width: "0%" }}
//         animate={{ width: isVisible ? "fit-content" : "0%" }}
//         transition={{
//           duration: 2,
//           ease: "linear",
//         }}
//       >
//         <div
//           className="text-sm sm:text-base md:text-base lg:text-base font-bold whitespace-nowrap"
//           style={{ whiteSpace: "nowrap" }}
//         >
//           {renderWords()}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

export const TypewriterEffectSmooth = ({
  words,
  className,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [animationKey, setAnimationKey] = useState(0);

  // Split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  useEffect(() => {
    // Create infinite loop with proper reset
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1); // Force re-render
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const renderWords = () => {
    return (
      <div className="inline-block">
        {wordsArray.map((word, idx) => {
          return (
            <span key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={cn(`text-white font-bold`, word.className)}
                >
                  {char}
                </span>
              ))}
              {idx < wordsArray.length - 1 && "\u00A0"}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("flex items-center", className)}>
      <motion.div
        key={animationKey} // Force restart animation
        className="overflow-hidden"
        initial={{ width: 0 }}
        animate={{ width: "auto" }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
      >
        <div className="text-sm sm:text-base md:text-base lg:text-base font-bold whitespace-nowrap">
          {renderWords()}
        </div>
      </motion.div>
    </div>
  );
};
