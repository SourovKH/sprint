const program = [
  0, 1, 7, 
  0, 2, 8,
  9
];

const assign = function(state) {
  const {memory, programCounter} = state;
  const value = memory[programCounter + 1];
  const cellToStore = memory[programCounter + 2];
  memory[cellToStore] = value;
  const newState = {memory: memory, programCounter: programCounter + 3};

  return newState;
}

const loadMemory = function(program, size) {
  let memory = [...program];
  const remainingSize = size - memory.length;
  const emptyMemory = [];
  emptyMemory.length = remainingSize;
  emptyMemory.fill(null);
  memory = memory.concat(emptyMemory);

  return memory;
}

const sprint = function(program) {
  const instructions = {
    0: assign,
    9: "halt"
  };

  const memorySize = 10;
  let memory = loadMemory(program, memorySize);
  let programCounter = 0;
  let instruction = instructions[memory[programCounter]];

  while(instruction !== "halt") {
    let state = {memory: memory, programCounter: programCounter};
    state = instruction(state);
    memory = state.memory;
    programCounter = state.programCounter;
    instruction = instructions[memory[programCounter]];
  }

  return memory;
}

console.log(sprint(program));

exports.sprint = sprint;
