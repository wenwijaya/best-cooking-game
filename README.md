# Sizzle & Serve — Warung Rush

[![make.fun · best-cooking-game-20261125-0137](https://make.fun/badge/best-cooking-game-20261125-0137.svg)](https://make.fun/bounty/best-cooking-game-20261125-0137?utm_source=github&utm_medium=readme&utm_campaign=best-cooking-game-20261125-0137)
[![rank](https://make.fun/badge/best-cooking-game-20261125-0137/wenwijaya/best-cooking-game/rank.svg)](https://make.fun/bounty/best-cooking-game-20261125-0137/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=best-cooking-game-20261125-0137)
[![reward](https://make.fun/badge/best-cooking-game-20261125-0137/wenwijaya/best-cooking-game/reward.svg)](https://make.fun/bounty/best-cooking-game-20261125-0137?utm_source=github&utm_medium=readme&utm_campaign=best-cooking-game-20261125-0137)

An original cooking game for the [make.fun "Make the best cooking game" bounty](https://make.fun/bounty/best-cooking-game-20261125-0137) ($250, program/v1).

## The game

You run a small warung kitchen during the dinner rush. Orders appear on the
ticket board — read the ticket, click ingredients on the counter (or press
1–6) to stack them on the plate, then hit **SERVE** (or press S) when the
plate matches the ticket. A wrong ingredient tosses the whole plate; an order
left waiting too long walks out angry. Serve as many orders as you can in 90
seconds — 5 served earns 3 stars.

- **Menu:** Classic Burger, Garden Burger, Cheesy Melt, Double Stack, Fresh Salad Bun
- **Scoring:** dish price + remaining patience bonus, with a combo multiplier feel (combo shown in the HUD)
- **Controls:** mouse click, keys 1–6 (ingredients), S (serve), R (restart), Space (start)

## Play it

Open `game/index.html` in a desktop browser — the game is plain static files,
no library, no network request, fully offline. Deterministic screenshot states:
`?shot=start`, `?shot=play`, `?shot=end` (with `&seed=1`).

## How it is built

- `game/index.html` — the whole game: canvas 2D kitchen, order board, plate, ingredient counter, HUD, title and day-complete screens.
- `main.ts` — the entrypoint (Node 22, standard library only): copies `game/` and `screenshots/` to `/output` and writes `/output/dossier.json` with the vendored make.fun library (`vendor/makefun-game.ts`), then makes every output world-readable.
- `screenshots/` — 3 real renders (title, mid-game, day complete), first by name is the cover.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
