const assign = function(memory, programCounter) {
  const value = memory[programCounter + 1];
  const cellToStore = memory[programCounter + 2];
  memory[cellToStore] = value;

  return [memory, programCounter + 3];
}

const instructions = {
  0: assign,
  9: "halt"
}

const sprint = function(program) {
  let memory = [...program];
  let programCounter = 0;
  let instruction = instructions[memory[programCounter]];

  while(instruction !== "halt") {
    [memory, programCounter] = [...assign(memory, programCounter)];
    instruction = instructions[memory[programCounter]];
  }

  return memory;
}

const program = [0, 1, 5, 9];

console.log(sprint(program));

exports.sprint = sprint;
