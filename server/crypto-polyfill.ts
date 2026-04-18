/**
 * `jose` uses the Web Crypto API (`globalThis.crypto`). Some Node versions / containers
 * don't expose it globally, which causes: ReferenceError: crypto is not defined
 */
import { webcrypto } from 'node:crypto';

if (typeof globalThis.crypto === 'undefined') {
  Object.defineProperty(globalThis, 'crypto', {
    value: webcrypto,
    configurable: true,
    enumerable: true,
    writable: true,
  });
}
