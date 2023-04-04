<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<script>
    import tokens from '../../style-dictionary/tokens/tokens.json';
  
    const buttonStyles = `color: ${tokens.colors.green[100]}; background-color: ${tokens.colors.yellow[100]};`;
  </script> 
  
<button style="{buttonStyles}">Click me</button>
  
