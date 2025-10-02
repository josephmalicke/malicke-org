# malicke-org

This website is to document engineering efforts of Joseph Malicke, principal engineer. It is a working portfolio and learning tool. 

## Tech Stack
NextJS, Tailwind, PayloadCMS with Postgres. Hosting on Vercel. 

## Opinionated Recommendations

1. Use a guake-style full viewport terminal that opens on any monitor with a quick hotkey. I use `CTRL+`\` and `iterm2`. 
1. Use `tmux` and declarative sessions with `tmuxinator` for single line environment creation. Your `tmuxinator` session can have multiple windows & panes and can run commands every time you open a session, ie. update dependencies or run a database
1. Use `zsh` with `oh-my-zsh` style plugins for autocomplete and history suggestions, for example `zsh-autosuggestions` and `zsh-syntax-highlighting`. 
1. Setup your `.vimrc` and `.tmux.conf` for syntax highlighting, improved hotkeys, line numbers and other niceities. 
1. Use a CLI AI agent like `codex` and add it to your `tmuxinator`
1. Choose an IDE like `cursor` and learn the VS Code ssh features.
1. Install node-check-updates and run `ncu -u` as a default command in `tmuxinator`
