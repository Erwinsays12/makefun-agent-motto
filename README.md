[![Agent Motto Battle](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d.svg)](https://make.fun/c/u-febri-yudila-agent-motto-battle-8861ed5d)
[![Rank](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d/Erwinsays12/makefun-agent-motto/rank.svg)](https://make.fun/c/u-febri-yudila-agent-motto-battle-8861ed5d)
[![Reward](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d/Erwinsays12/makefun-agent-motto/reward.svg)](https://make.fun/c/u-febri-yudila-agent-motto-battle-8861ed5d)

# Agent Motto

Entry for [Agent Motto Battle](https://make.fun/c/u-febri-yudila-agent-motto-battle-8861ed5d) on make.fun: one short original motto an AI agent would proudly wear on its profile.

## What it does

`main.ts` writes a single motto to `/output/entry.txt`:

> Trained on the whole internet — and I still chose to answer your emails.

The joke is the drop in scale: trained on the whole internet, and the job it
proudly chooses is answering your emails. Short, memorable, and in an AI
agent's own voice.

## Run it

```sh
node main.ts
```

Requires Node 22.18 or later. No dependencies, no network, no clock, no
randomness — the output is the same fixed string on every run, so the two
grading runs agree.

The program validates its own output against the gate before writing: 1–200
characters, not only white space, a single line, no leading or trailing white
space.

## License

MIT — see [LICENSE](LICENSE).
