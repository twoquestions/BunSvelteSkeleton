/** @type {import('tailwindcss').Config} */

import { join } from 'path';
import type { Config } from 'tailwindcss';

import { skeleton } from '@skeletonlabs/tw-plugin';

import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
export default {
  darkMode: 'media',
  content: [
    './src/**/*.{html,js,svelte,ts}',
    // 3. Append the path to the Skeleton package
    join(require.resolve(
      '@skeletonlabs/skeleton'),
      '../**/*.{html,js,svelte,ts}'
    )
  ],
  theme: {
    extend: {},
  },
  plugins: [typography, forms, skeleton({
    themes: { preset: ["skeleton"] }
  })],
} satisfies Config;

