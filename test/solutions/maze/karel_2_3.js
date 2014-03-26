module.exports = {
  app: "maze",
  levelFile: "karelLevels",
  levelId: "2_3",
  tests: [
    {
      description: "Top Solve: Repeat 5x { MoveForward, Fill5 }",
      expected: {
        result: true,
        testResult: 100,
      },
      missingBlocks: [],
      xml: '<xml><block type="controls_repeat"><title name="TIMES">5</title><statement name="DO"><block type="maze_moveForward"><next><block type="procedures_callnoreturn"><mutation name="fill 5"></mutation></block></next></block></statement></block><block type="procedures_defnoreturn" deletable="false" editable="false"><mutation></mutation><title name="NAME">fill 5</title><statement name="STACK"><block type="controls_repeat" deletable="false" movable="false" editable="false"><title name="TIMES">5</title><statement name="DO"><block type="maze_fill" deletable="false" movable="false" editable="false"></block></statement></block></statement></block></xml>'
    }
  ]
};
