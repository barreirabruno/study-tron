# Planning Rules

Use these rules only when asked to discover, estimate, or plan a task.

Do not implement application code or tests during this stage.

## Planning Process

1. Inspect the task description.
2. Inspect only the repository areas relevant to the task.
3. Identify assumptions, risks, missing information, and open questions.
4. Estimate the task size.
5. Create the detailed implementation plan.
6. Estimate time, tokens, confidence, and suitable model capability.
7. Write the detailed plan and structured planning metadata to their corresponding artifacts.
8. Return control to the project workflow without implementing anything.

Do not stop for implementation approval during this stage. The project workflow must complete unit-test planning before requesting approval.

## Planning Outputs

Write the detailed implementation plan to:

```text
plans/<task-id>-<task-name>.md
```

Write the structured planning metadata to:

```text
summaries/<task-id>-<task-name>-summary.md
```

Place the structured planning metadata under:

```markdown
## Step: planning
```

Do not:

* copy the JSON schema into the detailed plan;
* create future summary steps as placeholders;
* implement application code;
* implement tests;
* expand the task scope;
* silently resolve open product or architectural decisions.

## Task Sizing

Use one of the following Fibonacci values:

* `2`: micro;
* `3`: small;
* `5`: medium;
* `8`: big;
* `13`: huge.

Evaluate:

* scope of behavior changed;
* number of components affected;
* persistence impact;
* external integration impact;
* architectural impact;
* regression risk;
* uncertainty;
* validation effort.

When a task matches multiple sizes, select the highest applicable size.

### Size 2 — Micro

Typical examples:

* update an import;
* make an isolated configuration correction;
* apply a safe package-lock refresh;
* make a local change with no behavioral impact.

Does not include:

* adding a new dependency;
* changing complete methods;
* adding or changing application behavior.

### Size 3 — Small

Typical examples:

* add a well-understood dependency;
* update documentation;
* correct an isolated response or behavior;
* make a local change with limited regression risk.

Does not include:

* adding a complete feature;
* changing established feature behavior;
* modifying persistence or communication protocols.

### Size 5 — Medium

Typical examples:

* add a bounded feature touching one persistence layer;
* make a contained user-interface change;
* add an isolated external integration;
* refactor an established feature without changing its external contract.

Does not include:

* changes with broad effects on other stable features;
* changes involving several persistence or communication mechanisms;
* system-wide protocol migrations.

### Size 8 — Big

Typical examples:

* add a complete feature with substantial business rules;
* change an external communication contract;
* introduce a new communication protocol;
* make a high-risk change affecting stable behavior.

Does not include:

* adding an isolated column or response field;
* updating imports or individual files;
* adding a straightforward dependency.

### Size 13 — Huge

Typical examples:

* change several persistence or communication mechanisms together;
* coordinate database, queue, topic, or external-service changes;
* refactor a complete feature with broad effects;
* introduce a major architectural abstraction;
* perform a breaking dependency migration;
* perform a broad persistence optimization.

Tasks sized `13` should normally be decomposed before implementation.

Do not decompose a task automatically. Report the decomposition recommendation and wait for a user decision.

## Required Plan Content

The detailed plan must include:

* task understanding;
* assumptions;
* open questions;
* selected size and justification;
* affected files or repository areas;
* implementation steps;
* possible collateral effects;
* coupling impact;
* persistence impact;
* external integration impact;
* validation strategy;
* rollback considerations;
* risks;
* explicit out-of-scope items.

When a section is not applicable, state that it is not applicable and briefly explain why.

## Estimation Rules

Estimates are ranges, not exact promises.

Include:

* estimated token range;
* estimated execution-time range in minutes;
* estimation confidence;
* recommended model;
* model recommendation rationale.

Use one estimation-confidence value:

* `LOW`: major requirements, dependencies, or affected areas remain unclear;
* `MEDIUM`: the task is sufficiently understood, but some implementation uncertainty remains;
* `HIGH`: requirements, affected areas, dependencies, and validations are explicit.

Do not:

* claim exact token usage before execution;
* claim exact execution time before execution;
* fabricate model availability;
* recommend a model without explaining the quality, cost, and velocity trade-off.

If available models cannot be determined, set the model name to `null` and describe the required model capability in the rationale.

## Structured Planning Metadata

Use this valid JSON shape under `## Step: planning` in the corresponding summary file:

```json
{
  "task_name": "Task name",
  "task_size": {
    "points": 5,
    "label": "MEDIUM",
    "confidence": "MEDIUM",
    "rationale": "Explain why the task received this size"
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
    "name": null,
    "rationale": "Explain the required capability and the quality, cost, and velocity trade-off"
  },
  "open_questions": []
}
```

Use an empty `open_questions` array when no unresolved planning question exists.

The metadata must remain consistent with the detailed plan.

Do not claim that planning is complete when requirements, dependencies, affected areas, or acceptance criteria remain unresolved.
