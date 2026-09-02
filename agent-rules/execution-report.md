# Execution Report Rules

Use these rules only after executing an approved plan.

Append the execution report to the corresponding file in `summaries/`.

## Required Results

Report:

* task status;
* exact model identifier used;
* reasoning effort used;
* execution start timestamp;
* execution end timestamp;
* elapsed execution time;
* token usage status;
* files changed;
* validations executed;
* validation results;
* acceptance criteria satisfied;
* deviations from the approved plan;
* remaining limitations;
* recommended follow-up work.

Use one task status:

* `DONE`
* `ABORTED`
* `PARTIALLY_DONE`

The agent must not report final token usage because the complete usage is available only after the Codex session ends. Set `token_usage_status` to `PENDING_EXTERNAL_CAPTURE`. Final token usage must be captured from the Codex CLI exit report and recorded separately.

Use this metadata shape:

```json
{
  "task_name": "Task name",
  "task_status": "DONE",
  "model_used": {
    "name": "Exact model identifier",
    "reasoning_effort": "MEDIUM"
  },
  "execution_timing": {
    "started_at": "YYYY-MM-DDTHH:mm:ssZ",
    "finished_at": "YYYY-MM-DDTHH:mm:ssZ",
    "elapsed_minutes": 42,
    "source": "Measured during the execution session"
  },
  "token_usage_status": "PENDING_EXTERNAL_CAPTURE"
}
```
