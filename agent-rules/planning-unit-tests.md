# Planning Unit Tests

Use these rules only after completing discovery, initial estimation, and implementation planning.

Unit-test planning may reveal additional complexity. After planning the tests, reassess the task size and implementation estimates.

Do not implement tests or application code during this stage.

## Scope Restriction

This stage is restricted to unit-test planning.

The agent must not:

* plan integration tests;
* plan end-to-end tests;
* describe integration-test cases;
* describe end-to-end test cases;
* recommend integration or end-to-end tests;
* implement any tests;
* add another test level to the approved scope;
* create test infrastructure for another test level.

If a behavior cannot be proven through a unit test:

1. Record the behavior under `unit_test_limitations`.
2. Explain why a unit test cannot prove it.
3. Add the unresolved behavior to `open_questions`.
4. Stop and request a user decision.

Do not automatically propose another test type as the solution.

## General Rules

* Describe only the unit tests required by the planned change.
* Do not create test implementations.
* Test observable behavior instead of internal implementation details.
* Prefer the smallest number of unit tests capable of proving the planned behavior.
* Do not create redundant test cases that prove the same behavior.
* Include relevant successful, failure, boundary, and state-transition scenarios.
* Do not invent behavior that is absent from the task requirements or approved assumptions.
* Identify assumptions or unanswered questions that prevent a test from being described confidently.
* If unit tests are not applicable, return an empty `test_cases` array and explain why under `unit_test_limitations`.
* Append the detailed unit-test plan to the corresponding file in `plans/`.
* Write the structured unit-test planning result to the corresponding file in `summaries/` under `## Step: planning-unit-tests`.
* Stop and wait for explicit user approval after updating the plan and summary.

## Test Description Style

Every test description must use one of these forms:

* `ensure it <DOES SOMETHING> successfully`
* `ensure it throws when <SOMETHING HAPPENS>`

Examples:

* `ensure it creates the record successfully`
* `ensure it returns the expected result successfully`
* `ensure it throws when the required identifier is missing`
* `ensure it throws when the dependency rejects the operation`

Never use `throws` and `successfully` in the same test-case description. Combining them creates ambiguity about the expected outcome.

Each description must represent one behavior. Split descriptions containing multiple independent expectations into separate test cases.

## Mocking Rules

For every test case:

* List the dependencies that should be mocked.
* Explain why each dependency must be mocked.
* Use an empty array when no mocks are required.
* Mock only dependencies that cross the unit boundary, such as repositories, gateways, message publishers, clocks, or external clients.
* Do not mock the unit under test.
* Do not mock internal value objects or pure collaborators without a concrete isolation need.
* Do not add mocks merely to make a test easier to implement.
* Do not use mocks to claim that behavior outside the unit boundary has been proven.
* Record behavior outside the unit-test boundary under `unit_test_limitations`.

## Confidence

Use one of these values:

* `LOW`: requirements or dependency behavior remain unclear.
* `MEDIUM`: the expected behavior is understood, but some implementation details or boundaries remain uncertain.
* `HIGH`: the behavior, inputs, outputs, dependencies, and expected result are explicit.

Confidence describes the quality of the test-case description. It does not indicate that the test has been implemented or executed.

## Task-Size Reassessment

After describing the unit tests:

1. Compare the required scenarios with the initial implementation plan.
2. Identify newly discovered branches, dependencies, side effects, or failure modes.
3. Reassess the task size using the planning rules.
4. Keep the original size or increase it.
5. Never decrease task size during unit-test planning.
6. Explain every size change.

If the size increases, also revise:

* estimated token range;
* estimated execution-time range;
* model recommendation;
* affected areas;
* risks;
* implementation steps.

A limitation that requires a user decision must not be silently included in the revised task scope.

## Estimation Meaning

The token, time, and model estimates in this output refer to implementing:

* the planned application change;
* the unit tests described in this document.

The estimates must not include tests or infrastructure prohibited by the scope restriction.

Estimates must be ranges, not exact promises.

## Detailed Plan Output

Append a `Unit Test Plan` section to the corresponding file in `plans/`.

The detailed section must include:

* unit-test cases;
* expected observable behavior;
* required mocks;
* mocking rationale;
* confidence per test case;
* unit-test limitations;
* open questions;
* task-size reassessment;
* revised implementation estimates.

Do not include test implementations.

## Structured Summary Output

Write the following valid JSON under `## Step: planning-unit-tests` in the corresponding summary file:

```json
{
  "test_cases": [
    {
      "task_name": "Task name",
      "test_case_description": "ensure it does something successfully",
      "test_case_confidence": "HIGH",
      "mocks": [
        {
          "dependency": "Repository name",
          "reason": "Isolate persistence from the unit under test"
        }
      ]
    }
  ],
  "total_number_of_tests": 1,
  "unit_test_limitations": [],
  "task_size_impact": {
    "initial_points": 3,
    "revised_points": 5,
    "changed": true,
    "rationale": "Unit-test planning revealed additional failure paths and dependencies"
  },
  "estimated_tokens": {
    "minimum": 10000,
    "maximum": 18000
  },
  "estimated_execution_minutes": {
    "minimum": 30,
    "maximum": 60
  },
  "estimation_confidence": "MEDIUM",
  "recommended_model": {
    "name": "Fill with an available model",
    "rationale": "Explain the quality, cost, and velocity trade-off"
  },
  "open_questions": []
}
```

Use an empty `unit_test_limitations` array when all planned behavior can be proven through the described unit tests.

Use an empty `open_questions` array when no user decision is required.

Do not claim that the unit-test plan is complete when requirements, dependencies, unit boundaries, or expected behaviors remain unresolved.
