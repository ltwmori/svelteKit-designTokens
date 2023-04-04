async function registerSvelteTransforms() {
  const StyleDictionaryPackage = await import('style-dictionary');
  const { registerTransformGroup } = StyleDictionaryPackage;

  registerTransformGroup({
    name: 'svelte',
    transforms: [
      'attribute/cti',
      'name/cti/kebab',
      'time/seconds',
      'content/icon',
      'size/rem',
      'color/css'
    ]
  });
}

registerSvelteTransforms();
