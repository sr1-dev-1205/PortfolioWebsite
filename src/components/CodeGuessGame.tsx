import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Play, CheckCircle, XCircle, RotateCcw, Code2, Trophy, Zap } from 'lucide-react';
import CyberPanel from './CyberPanel';

interface Challenge {
    id: number;
    code: string;
    language: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    difficulty: 'easy' | 'medium' | 'hard';
}

const allChallenges: Challenge[] = [
    // Easy Questions
    {
        id: 1,
        code: `const arr = [1, 2, 3];
const result = arr
  .map(x => x * 2)
  .filter(x => x > 2);
console.log(result);`,
        language: 'javascript',
        options: ['[2, 4, 6]', '[4, 6]', '[2, 4]', '[6]'],
        correctAnswer: 1,
        explanation: 'map() doubles each value [2,4,6], then filter() keeps only values > 2, resulting in [4,6]',
        difficulty: 'easy'
    },
    {
        id: 2,
        code: `console.log(typeof null);
console.log(typeof []);`,
        language: 'javascript',
        options: ['null, array', 'object, object', 'null, object', 'object, array'],
        correctAnswer: 1,
        explanation: 'In JavaScript, typeof null returns "object" (a known bug), and typeof [] also returns "object" since arrays are objects',
        difficulty: 'easy'
    },
    {
        id: 3,
        code: `const a = [1, 2, 3];
const b = [...a];
b.push(4);
console.log(a.length);`,
        language: 'javascript',
        options: ['3', '4', 'undefined', 'Error'],
        correctAnswer: 0,
        explanation: 'Spread operator creates a shallow copy. Modifying b does not affect a, so a.length remains 3.',
        difficulty: 'easy'
    },
    {
        id: 4,
        code: `console.log(1 + '2' + 3);
console.log(1 + 2 + '3');`,
        language: 'javascript',
        options: ['"123", "33"', '"33", "123"', '6, 6', '"15", "33"'],
        correctAnswer: 0,
        explanation: 'In 1 + "2", number coerces to string -> "12" + 3 = "123". In 1 + 2 = 3, then 3 + "3" = "33".',
        difficulty: 'easy'
    },
    {
        id: 5,
        code: `const x = 10;
if (true) {
  const x = 20;
  console.log(x);
}`,
        language: 'javascript',
        options: ['10', '20', 'undefined', 'ReferenceError'],
        correctAnswer: 1,
        explanation: 'const is block-scoped. The inner x shadows the outer x, so 20 is logged.',
        difficulty: 'easy'
    },
    {
        id: 6,
        code: `const arr = [1, 2, 3];
arr.length = 0;
console.log(arr[0]);`,
        language: 'javascript',
        options: ['1', 'undefined', '0', 'Error'],
        correctAnswer: 1,
        explanation: 'Setting length to 0 clears the array. arr[0] is now undefined.',
        difficulty: 'easy'
    },
    {
        id: 7,
        code: `console.log(0.1 + 0.2 === 0.3);
console.log(0.1 + 0.2);`,
        language: 'javascript',
        options: ['true, 0.3', 'false, 0.30000000000000004', 'true, 0.30000000000000004', 'false, 0.3'],
        correctAnswer: 1,
        explanation: 'Floating point precision issues in JavaScript make 0.1 + 0.2 slightly more than 0.3.',
        difficulty: 'easy'
    },
    // Medium Questions
    {
        id: 8,
        code: `let x = 5;
const add = () => x++;
const multiply = () => x * 2;
console.log(add() + multiply());`,
        language: 'javascript',
        options: ['15', '16', '17', '20'],
        correctAnswer: 2,
        explanation: 'add() returns 5 (then x becomes 6), multiply() returns 12 (6*2). 5 + 12 = 17',
        difficulty: 'medium'
    },
    {
        id: 9,
        code: `const obj = { a: 1 };
const arr = [obj, obj];
arr[0].a = 2;
console.log(arr[1].a);`,
        language: 'javascript',
        options: ['1', '2', 'undefined', 'Error'],
        correctAnswer: 1,
        explanation: 'Both array elements reference the same object. Modifying one affects the other.',
        difficulty: 'medium'
    },
    {
        id: 10,
        code: `function foo() {
  return
  {
    bar: 'baz'
  };
}
console.log(foo());`,
        language: 'javascript',
        options: ['{ bar: "baz" }', 'undefined', 'null', 'SyntaxError'],
        correctAnswer: 1,
        explanation: 'Automatic semicolon insertion after return. The object on next line is unreachable.',
        difficulty: 'medium'
    },
    {
        id: 11,
        code: `const a = {};
const b = { key: 'b' };
const c = { key: 'c' };
a[b] = 123;
a[c] = 456;
console.log(a[b]);`,
        language: 'javascript',
        options: ['123', '456', 'undefined', '"[object Object]"'],
        correctAnswer: 1,
        explanation: 'Object keys are converted to strings. Both b and c become "[object Object]", so 456 overwrites 123.',
        difficulty: 'medium'
    },
    {
        id: 12,
        code: `const promise = new Promise((resolve) => {
  console.log(1);
  resolve(2);
});
promise.then(console.log);
console.log(3);`,
        language: 'javascript',
        options: ['1, 2, 3', '1, 3, 2', '3, 1, 2', '2, 1, 3'],
        correctAnswer: 1,
        explanation: 'Promise executor runs immediately (1), then sync code (3), then microtask (2).',
        difficulty: 'medium'
    },
    {
        id: 13,
        code: `const person = {
  name: 'John',
  greet: () => \`Hello \${this.name}\`
};
console.log(person.greet());`,
        language: 'javascript',
        options: ['Hello John', 'Hello undefined', 'Hello null', 'TypeError'],
        correctAnswer: 1,
        explanation: 'Arrow functions don\'t have their own this. this.name refers to global/window.name which is undefined.',
        difficulty: 'medium'
    },
    {
        id: 14,
        code: `const arr = [1, 2, 3];
const [a, , b, c = 4] = arr;
console.log(a, b, c);`,
        language: 'javascript',
        options: ['1, 2, 3', '1, 3, 4', '1, 2, 4', '1, 3, undefined'],
        correctAnswer: 1,
        explanation: 'Destructuring skips index 1, a=1, b=3, c gets default value 4 since arr[3] is undefined.',
        difficulty: 'medium'
    },
    {
        id: 15,
        code: `console.log([] == ![]);
console.log([] === ![]);`,
        language: 'javascript',
        options: ['true, false', 'false, false', 'true, true', 'false, true'],
        correctAnswer: 0,
        explanation: '![] is false, [] == false converts both to 0, so true. === checks type, so false.',
        difficulty: 'medium'
    },
    // Hard Questions
    {
        id: 16,
        code: `Promise.resolve(1)
  .then(x => { throw new Error('oops'); })
  .catch(err => 3)
  .then(x => console.log(x));`,
        language: 'javascript',
        options: ['1', 'Error: oops', '3', 'undefined'],
        correctAnswer: 2,
        explanation: 'The error is caught and returns 3, which is passed to the next then().',
        difficulty: 'hard'
    },
    {
        id: 17,
        code: `async function foo() {
  return Promise.reject(1);
}
foo().catch(x => console.log(x));
console.log(2);`,
        language: 'javascript',
        options: ['1, 2', '2, 1', '1', '2'],
        correctAnswer: 1,
        explanation: 'async returns a promise. Sync 2 logs first, then the rejected promise is caught.',
        difficulty: 'hard'
    },
    {
        id: 18,
        code: `const obj = {
  value: 1,
  [Symbol.toPrimitive](hint) {
    return hint === 'string' ? 'str' : 42;
  }
};
console.log(\`\${obj}\`);
console.log(+obj);`,
        language: 'javascript',
        options: ['str, 42', '42, str', '[object Object], NaN', 'str, NaN'],
        correctAnswer: 0,
        explanation: 'Template literal calls toPrimitive with "string", unary + calls with "number".',
        difficulty: 'hard'
    },
    {
        id: 19,
        code: `function* gen() {
  yield 1;
  yield* [2, 3];
  yield 4;
}
const g = gen();
console.log([...g]);`,
        language: 'javascript',
        options: ['[1, 2, 3, 4]', '[1, [2, 3], 4]', '[1, 2, 3]', '[2, 3, 4]'],
        correctAnswer: 0,
        explanation: 'yield* delegates to iterable. Generator yields 1, then 2, 3 from array, then 4.',
        difficulty: 'hard'
    },
    {
        id: 20,
        code: `const map = new Map();
const key1 = { id: 1 };
const key2 = { id: 1 };
map.set(key1, 'a');
map.set(key2, 'b');
console.log(map.get(key1), map.size);`,
        language: 'javascript',
        options: ['a, 1', 'b, 1', 'a, 2', 'b, 2'],
        correctAnswer: 2,
        explanation: 'Map uses reference equality. key1 and key2 are different objects, so both entries exist.',
        difficulty: 'hard'
    },
    {
        id: 21,
        code: `const proto = { x: 1 };
const obj = Object.create(proto);
obj.x = 2;
console.log(obj.x, proto.x);
delete obj.x;
console.log(obj.x);`,
        language: 'javascript',
        options: ['2 1 1', '2 2 2', '2 1 undefined', '1 1 1'],
        correctAnswer: 0,
        explanation: 'Setting obj.x shadows proto.x. Deleting obj.x reveals the inherited proto.x = 1.',
        difficulty: 'hard'
    },
    {
        id: 22,
        code: `const sym1 = Symbol.for('foo');
const sym2 = Symbol.for('foo');
const sym3 = Symbol('foo');
console.log(sym1 === sym2, sym1 === sym3);`,
        language: 'javascript',
        options: ['true, true', 'true, false', 'false, true', 'false, false'],
        correctAnswer: 1,
        explanation: 'Symbol.for() returns same symbol from global registry. Symbol() creates unique symbols.',
        difficulty: 'hard'
    },
    {
        id: 23,
        code: `const p = new Proxy({}, {
  get(target, prop) {
    return prop in target ? target[prop] : 42;
  }
});
console.log(p.x, p.y = 10, p.y);`,
        language: 'javascript',
        options: ['42, 10, 42', '42, 10, 10', 'undefined, 10, 10', '42, undefined, 10'],
        correctAnswer: 1,
        explanation: 'p.x triggers get trap returning 42. Assignment returns 10. p.y now exists, so get returns 10.',
        difficulty: 'hard'
    },
    {
        id: 24,
        code: `class Base {
  constructor() {
    this.name = 'Base';
  }
}
class Derived extends Base {
  name = 'Derived';
}
console.log(new Derived().name);`,
        language: 'javascript',
        options: ['Base', 'Derived', 'undefined', 'ReferenceError'],
        correctAnswer: 1,
        explanation: 'Class fields are initialized after super() returns. The field assignment overwrites the base value.',
        difficulty: 'hard'
    },
    {
        id: 25,
        code: `const obj = {
  get x() {
    delete this.x;
    return 1;
  }
};
console.log(obj.x, obj.x);`,
        language: 'javascript',
        options: ['1, 1', '1, undefined', 'undefined, undefined', 'Error'],
        correctAnswer: 1,
        explanation: 'First access calls getter which deletes the property and returns 1. Second access returns undefined.',
        difficulty: 'hard'
    }
];

// Number of questions per game session
const QUESTIONS_PER_GAME = 5;

// Shuffle array using Fisher-Yates algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

// Shuffle options for a challenge and update correctAnswer index
const shuffleChallengeOptions = (challenge: Challenge): Challenge => {
    const correctValue = challenge.options[challenge.correctAnswer];
    const shuffledOptions = shuffleArray(challenge.options);
    const newCorrectIndex = shuffledOptions.indexOf(correctValue);
    return {
        ...challenge,
        options: shuffledOptions,
        correctAnswer: newCorrectIndex
    };
};

// Get random questions ensuring mix of difficulties
const getRandomQuestions = (): Challenge[] => {
    const easy = allChallenges.filter(c => c.difficulty === 'easy');
    const medium = allChallenges.filter(c => c.difficulty === 'medium');
    const hard = allChallenges.filter(c => c.difficulty === 'hard');
    
    // Select questions: 2 easy, 2 medium, 1 hard
    const selected = [
        ...shuffleArray(easy).slice(0, 2),
        ...shuffleArray(medium).slice(0, 2),
        ...shuffleArray(hard).slice(0, 1)
    ];
    
    // Shuffle options for each selected challenge and shuffle final selection
    return shuffleArray(selected.map(shuffleChallengeOptions));
};

const difficultyColors = {
    easy: { color: 'text-neon-green', bg: 'bg-neon-green/10', border: 'border-neon-green/30' },
    medium: { color: 'text-neon-yellow', bg: 'bg-neon-yellow/10', border: 'border-neon-yellow/30' },
    hard: { color: 'text-neon-magenta', bg: 'bg-neon-magenta/10', border: 'border-neon-magenta/30' }
};

const CodeGuessGame: React.FC = () => {
    const [challenges, setChallenges] = useState<Challenge[]>(() => getRandomQuestions());
    const [currentChallenge, setCurrentChallenge] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const [gameComplete, setGameComplete] = useState(false);
    const [attempted, setAttempted] = useState<boolean[]>(new Array(QUESTIONS_PER_GAME).fill(false));

    const challenge = challenges[currentChallenge];
    const diffStyle = difficultyColors[challenge.difficulty];

    const handleAnswer = (index: number) => {
        if (showResult) return;
        setSelectedAnswer(index);
        setShowResult(true);

        if (index === challenge.correctAnswer) {
            if (!attempted[currentChallenge]) {
                setScore(prev => prev + 1);
            }
        }

        const newAttempted = [...attempted];
        newAttempted[currentChallenge] = true;
        setAttempted(newAttempted);
    };

    const handleNext = () => {
        if (currentChallenge < challenges.length - 1) {
            setCurrentChallenge(prev => prev + 1);
            setSelectedAnswer(null);
            setShowResult(false);
        } else {
            setGameComplete(true);
        }
    };

    const handleReset = () => {
        const newChallenges = getRandomQuestions();
        setChallenges(newChallenges);
        setCurrentChallenge(0);
        setSelectedAnswer(null);
        setShowResult(false);
        setScore(0);
        setGameComplete(false);
        setAttempted(new Array(QUESTIONS_PER_GAME).fill(false));
    };

    const isCorrect = selectedAnswer === challenge.correctAnswer;

    return (
        <div className="w-full max-w-3xl mx-auto">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-8"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-terminal-surface border border-grid-line rounded-sm mb-4">
                    <Terminal className="w-4 h-4 text-neon-cyan" />
                    <span className="font-mono text-xs uppercase tracking-widest text-gray-400">
                        Guess My Code
                    </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-cyber font-black text-white mb-2">
                    CODE CHALLENGE
                </h3>
                <p className="text-sm text-gray-400 font-mono">
                    Test your JavaScript knowledge. Can you predict the output?
                </p>
            </motion.div>

            {/* Score Bar */}
            {!gameComplete && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center justify-between mb-6 px-4"
                >
                    <div className="flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-neon-yellow" />
                        <span className="font-mono text-sm text-gray-300">
                            Score: <span className="text-neon-green font-bold">{score}</span>/{challenges.length}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-gray-500">
                            Challenge {currentChallenge + 1}/{challenges.length}
                        </span>
                    </div>
                </motion.div>
            )}

            {/* Game Complete Screen */}
            <AnimatePresence mode="wait">
                {gameComplete ? (
                    <motion.div
                        key="complete"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                    >
                        <CyberPanel status="active" corner="all" glowColor="rgba(57, 255, 20, 0.4)">
                            <div className="p-8 text-center space-y-6">
                                <div className="w-20 h-20 mx-auto rounded-full bg-neon-green/10 border-2 border-neon-green flex items-center justify-center">
                                    <Trophy className="w-10 h-10 text-neon-green" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-cyber font-black text-white mb-2">
                                        CHALLENGE COMPLETE!
                                    </h4>
                                    <p className="text-gray-400 font-mono text-sm">
                                        You scored {score} out of {QUESTIONS_PER_GAME}
                                    </p>
                                </div>
                                <div className="flex justify-center gap-4">
                                    <div className="text-center">
                                        <div className="text-3xl font-cyber font-black text-neon-cyan">
                                            {Math.round((score / QUESTIONS_PER_GAME) * 100)}%
                                        </div>
                                        <div className="text-xs text-gray-500 font-mono uppercase">Accuracy</div>
                                    </div>
                                </div>
                                <button
                                    onClick={handleReset}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-terminal-surface border border-neon-cyan text-neon-cyan font-mono text-sm uppercase tracking-wider rounded-sm hover:bg-neon-cyan/10 transition-colors"
                                >
                                    <RotateCcw className="w-4 h-4" />
                                    Play Again
                                </button>
                            </div>
                        </CyberPanel>
                    </motion.div>
                ) : (
                    <motion.div
                        key="game"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <CyberPanel status="active" corner="all" glowColor="rgba(0, 240, 255, 0.3)">
                            <div className="p-4 sm:p-6 space-y-6">
                                {/* Challenge Header */}
                                <div className="flex items-center justify-between">
                                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-sm border ${diffStyle.bg} ${diffStyle.border}`}>
                                        <Zap className={`w-3 h-3 ${diffStyle.color}`} />
                                        <span className={`font-mono text-[10px] uppercase tracking-wider ${diffStyle.color}`}>
                                            {challenge.difficulty}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <Code2 className="w-4 h-4" />
                                        <span className="font-mono text-xs">{challenge.language}</span>
                                    </div>
                                </div>

                                {/* Code Block */}
                                <div className="relative">
                                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />
                                    <pre className="bg-terminal-black/80 border border-grid-line rounded-sm p-4 overflow-x-auto">
                                        <code className="font-mono text-sm text-gray-300">
                                            {challenge.code.split('\n').map((line, i) => (
                                                <div key={i} className="flex">
                                                    <span className="text-gray-600 select-none w-8 text-right mr-4">
                                                        {i + 1}
                                                    </span>
                                                    <span>{line}</span>
                                                </div>
                                            ))}
                                        </code>
                                    </pre>
                                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />
                                </div>

                                {/* Question */}
                                <p className="font-mono text-sm text-gray-300">
                                    What is the output?
                                </p>

                                {/* Options */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {challenge.options.map((option, index) => {
                                        let buttonClass = "w-full p-4 text-left font-mono text-sm border rounded-sm transition-all duration-200 ";
                                        
                                        if (!showResult) {
                                            buttonClass += "bg-terminal-surface border-grid-line text-gray-300 hover:border-neon-cyan hover:bg-neon-cyan/5";
                                        } else if (index === challenge.correctAnswer) {
                                            buttonClass += "bg-neon-green/10 border-neon-green text-neon-green";
                                        } else if (index === selectedAnswer && !isCorrect) {
                                            buttonClass += "bg-neon-magenta/10 border-neon-magenta text-neon-magenta";
                                        } else {
                                            buttonClass += "bg-terminal-surface border-grid-line text-gray-500 opacity-50";
                                        }

                                        return (
                                            <button
                                                key={index}
                                                onClick={() => handleAnswer(index)}
                                                disabled={showResult}
                                                className={buttonClass}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span className="w-6 h-6 rounded-sm bg-terminal-black border border-grid-line flex items-center justify-center text-xs">
                                                        {String.fromCharCode(65 + index)}
                                                    </span>
                                                    <span>{option}</span>
                                                    {showResult && index === challenge.correctAnswer && (
                                                        <CheckCircle className="w-4 h-4 ml-auto text-neon-green" />
                                                    )}
                                                    {showResult && index === selectedAnswer && !isCorrect && (
                                                        <XCircle className="w-4 h-4 ml-auto text-neon-magenta" />
                                                    )}
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Result & Explanation */}
                                <AnimatePresence>
                                    {showResult && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="space-y-4"
                                        >
                                            <div className={`p-4 rounded-sm border ${isCorrect ? 'bg-neon-green/5 border-neon-green/30' : 'bg-neon-magenta/5 border-neon-magenta/30'}`}>
                                                <div className="flex items-center gap-2 mb-2">
                                                    {isCorrect ? (
                                                        <>
                                                            <CheckCircle className="w-5 h-5 text-neon-green" />
                                                            <span className="font-cyber font-bold text-neon-green">CORRECT!</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <XCircle className="w-5 h-5 text-neon-magenta" />
                                                            <span className="font-cyber font-bold text-neon-magenta">INCORRECT</span>
                                                        </>
                                                    )}
                                                </div>
                                                <p className="text-sm text-gray-300 leading-relaxed">
                                                    {challenge.explanation}
                                                </p>
                                            </div>

                                            <button
                                                onClick={handleNext}
                                                className="w-full py-3 bg-neon-cyan text-terminal-black font-cyber font-bold uppercase tracking-wider rounded-sm hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-shadow flex items-center justify-center gap-2"
                                            >
                                                <Play className="w-4 h-4" />
                                                {currentChallenge < challenges.length - 1 ? 'Next Challenge' : 'See Results'}
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Progress Dots */}
                                <div className="flex justify-center gap-2 pt-2">
                                    {challenges.map((c, index) => (
                                        <div
                                            key={c.id}
                                            className={`w-2 h-2 rounded-full transition-colors ${
                                                index === currentChallenge
                                                    ? 'bg-neon-cyan'
                                                    : index < currentChallenge
                                                        ? attempted[index]
                                                            ? 'bg-neon-green'
                                                            : 'bg-gray-600'
                                                        : 'bg-gray-700'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </CyberPanel>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CodeGuessGame;
