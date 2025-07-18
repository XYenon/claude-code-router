import path from "node:path";
import os from "node:os";
import { xdgData, xdgConfig } from "xdg-basedir";

export const CONFIG_DIR = path.join(xdgConfig ?? `${os.homedir()}/.config`, "claude-code-router");

export const CONFIG_FILE = path.join(CONFIG_DIR, "config.json");

export const HOME_DIR = path.join(xdgData ?? `${os.homedir()}/.local/share`, "claude-code-router");

export const PLUGINS_DIR = path.join(HOME_DIR, "plugins");

export const PID_FILE = path.join(HOME_DIR, 'claude-code-router.pid');

export const REFERENCE_COUNT_FILE = path.join(os.tmpdir(), "claude-code-reference-count.txt");


export const DEFAULT_CONFIG = {
  LOG: false,
  OPENAI_API_KEY: "",
  OPENAI_BASE_URL: "",
  OPENAI_MODEL: "",
};
