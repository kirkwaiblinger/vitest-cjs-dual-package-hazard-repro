import packageB from '../lib/main.js'
import packageA from 'package-A';
import packageAOther from 'package-A/other';

import { describe, it, expect } from 'vitest';

describe('tests', () => {
  it("package-B's versions should be the same", () => {
    expect(packageB.objectWhoseIdentityIsImportant1).toBe(packageB.objectWhoseIdentityIsImportant2);
  })

  it("package-A's default export's version should be the same as in package-B", () => {
    expect(packageB.objectWhoseIdentityIsImportant1).toBe(packageA);
  })

  it("package-A's other export's version should be the same as in package-B", () => {
    expect(packageB.objectWhoseIdentityIsImportant2).toBe(packageAOther.objectWhoseIdentityIsImportant)
  })
})