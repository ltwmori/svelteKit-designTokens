import StyleDictionaryPackage from 'style-dictionary';
import './svelte-transforms.mjs';

const { extend } = StyleDictionaryPackage;
extend(new URL('./config.json', import.meta.url)).buildAllPlatforms();
