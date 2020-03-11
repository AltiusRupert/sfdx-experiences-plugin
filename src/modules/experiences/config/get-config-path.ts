import { resolve } from 'path';

/**
 * Returns the path to the config directory for the given bundle path.
 *
 * @param {string} bundlePath Path to the bundle.
 * @returns {string} Path to the config directory of the bundle.
 */
export default function getConfigPath(bundlePath: string): string {
  return resolve(bundlePath, 'config');
}
