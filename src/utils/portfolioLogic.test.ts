import test from 'node:test';
import assert from 'node:assert/strict';
import {
  computeWordIllumination,
  filterSkillsByCategory,
  validateInquiryForm,
  computeExplodedOffset,
  resolveCinemaFinish,
} from './portfolioLogic';
import { SKILLS_LIST } from '../data/resumeData';

test('computeWordIllumination transitions smoothly from 0 to 1 across scroll', () => {
  assert.equal(computeWordIllumination(0, 0, 20, 3), 0);
  assert.equal(computeWordIllumination(1, 19, 20, 3), 1);

  const mid = computeWordIllumination(0.5, 10, 20, 3);
  assert.ok(mid > 0 && mid <= 1);
  assert.equal(computeWordIllumination(-0.2, 5, 20, 3), 0);
  assert.equal(computeWordIllumination(1.4, 5, 20, 3), 1);
});

test('filterSkillsByCategory returns accurate subsets', () => {
  const all = filterSkillsByCategory(SKILLS_LIST, 'all');
  assert.equal(all.length, SKILLS_LIST.length);

  const software = filterSkillsByCategory(SKILLS_LIST, 'software');
  assert.equal(software.length, 3);
  assert.ok(software.every((s) => s.category === 'software'));

  const technical = filterSkillsByCategory(SKILLS_LIST, 'technical');
  assert.equal(technical.length, 8);
});

test('validateInquiryForm enforces required fields and accepts valid input', () => {
  const invalid = validateInquiryForm({
    name: 'D',
    email: 'not-an-email',
    projectType: '',
    message: 'short',
  });
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.projectType);
  assert.ok(invalid.errors.message);

  const valid = validateInquiryForm({
    name: 'Aarav Mehta',
    email: 'aarav@studio.in',
    projectType: 'Wedding Film',
    message: 'Looking for a 4-minute cinematic highlight film from 120GB Sony FX3 footage.',
  });
  assert.equal(valid.valid, true);
  assert.deepEqual(valid.errors, {});
});

test('computeExplodedOffset clamps factor and interpolates coordinates', () => {
  const resultHalf = computeExplodedOffset(
    { x: 0, y: 1, z: 0 },
    { x: 2, y: 0, z: 4 },
    0.5,
  );
  assert.deepEqual(resultHalf, { x: 1, y: 1, z: 2 });

  const resultClamped = computeExplodedOffset(
    { x: 1, y: 2, z: 3 },
    { x: 4, y: 4, z: 4 },
    1.8,
  );
  assert.deepEqual(resultClamped, { x: 5, y: 6, z: 7 });
});

test('resolveCinemaFinish returns valid finish configuration', () => {
  const titanium = resolveCinemaFinish('titanium');
  assert.equal(titanium.id, 'titanium');
  assert.equal(titanium.label, 'Brushed Titanium');
});
