import type { ComponentType } from 'react';

const moduleName = '@vercel/speed-insights/next';

let SpeedInsightsComponent: ComponentType | null = null;

try {
  const resolveRequire = eval('require') as (id: string) => any; // eslint-disable-line no-eval
  const mod = resolveRequire(moduleName);
  SpeedInsightsComponent = mod?.SpeedInsights ?? null;
} catch (error) {
  if (process.env.NODE_ENV !== 'production') {
    console.warn(
      `[speed-insights] Optional dependency "${moduleName}" is not installed. Skipping analytics integration.`,
      error
    );
  }
}

export function SpeedInsights() {
  if (!SpeedInsightsComponent) {
    return null;
  }

  const Component = SpeedInsightsComponent;
  return <Component />;
}
