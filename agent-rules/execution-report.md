
# Execution Report Rules

Use these rules only after executing an approved plan.

Append the execution report to the corresponding file in `summaries/`.

## Required Results

Report:

- task status;
- model used;
- elapsed execution time;
- token usage, when available;
- files changed;
- validations executed;
- validation results;
- acceptance criteria satisfied;
- deviations from the approved plan;
- remaining limitations;
- recommended follow-up work.

Use one task status:

- `DONE`
- `ABORTED`
- `PARTIALLY_DONE`

Never fabricate unavailable usage information. Use `null` and explain how the value could be collected.

Use this metadata shape:

```json
{
  "task_name": "Task name",
  "task_status": "DONE",
  "model_used": "Model name",
  "elapsed_minutes": 42,
  "token_usage": {
    "input": null,
    "output": null,
    "total": null,
    "source": "Unavailable in the current execution environment"
  }
}
```